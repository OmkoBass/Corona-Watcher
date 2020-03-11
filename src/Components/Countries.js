import React, {useEffect, useState} from 'react'

//axios
import axios from 'axios';

//Components
import Stats from "./Stats";
import Spinner from "react-bootstrap/Spinner";

function Countires() {
    const [done, setDone] = useState(false);

    const [data, setData] = useState(null);

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

                setData(country)
                setDone(true);
            })

    }, []);

    return (
        <div>
            {done
            ?
            data
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
