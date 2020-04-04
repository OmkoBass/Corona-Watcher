/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useRef, useState} from 'react'

//Components
import Stats from "./Stats";

//Bootstrap
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

function Countries(props) {
    const [stats, setStats] = useState(null);
    const [allStats, setAllStats] = useState(null);

    let counter = -1;

    useEffect(() => {
        setStats(props.countries);
        setAllStats(props.countries);
    }, []);

    let search = useRef(null);

    function handleSearch() {
        const searched = allStats.filter(stat =>
        stat.country.includes(search.current.value))

        setStats(searched);
    }

    return (
        <div>
            <Container>
                <div className='stats-control'>
                    <Form.Label>Search countries:</Form.Label>
                    <Form.Control ref={search} onChange={handleSearch} placeholder='Search countries...'/>
                </div>
            </Container>
            {stats ? stats.map(country => (
                <Stats
                    key = {++counter}
                    country = {country.country}
                    province = {country.province}
                    stats = {country.stats}
                    updated = {country.updatedAt}
                />
            ))
            :
            null}
        </div>
    )
}

export default Countries
