import React, {useEffect, useState, useRef} from 'react'

//axios
import axios from 'axios';

//Components
import Stats from "./Stats";
import Spinner from "react-bootstrap/Spinner";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

function Countires() {
    const [done, setDone] = useState(false);

    const [data, setData] = useState(null);

    const [all, setAll] = useState(null);

    const zip = (arr, ...arrs) => {
        return arr.map((val, i) => arrs.reduce((a, arr) => [...a, arr[i]], [val]));
    }

    useEffect(() => {
        axios.get('https://coronavirus-tracker-api.herokuapp.com/all')
            .then(response => {

                const countries = zip(response.data.confirmed.locations,
                    response.data.deaths.locations,
                    response.data.recovered.locations)

                let counter = -1;

                const country = countries.map(country => {

                    counter++;

                    return <Stats country={country} key={counter}/>
                })

                setAll(country);
                setData(country);
                setDone(true);
            })

    }, []);

    const search = useRef(null);

    function handleSearch() {
        const searched = all.filter(country =>
            country.props.country[0].country.includes(search.current.value))

        setData(searched);
    }

    return (
        <div>
            {done
            ?
                <div>
                    <Container>
                        <div className='stats-control'>
                            <Form.Label >Search your country:</Form.Label>
                            <Form.Control ref={search} onChange={handleSearch} placeholder='Search countries...'/>
                        </div>
                    </Container>
                    {data}
                </div>
            :
            <div className='loading'>
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            </div>}
        </div>
    )
}

export default Countires
