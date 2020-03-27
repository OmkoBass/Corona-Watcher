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

    const countryNames = props.confirmed.map(country => [country.country, country.province]);
    const confirmed = props.confirmed.map(country => country.latest);
    const dead = props.deaths.map(country => country.latest);
    const recovered = props.recovered.map(country => country.latest);
    const datesConfirmed = props.confirmed.map(country => country.history);
    const datesDead = props.deaths.map(country => country.history);
    const datesRecovered = props.recovered.map(country => country.history);

    const zip = (arr, ...arrs) => {
        return arr.map((val, i) => arrs.reduce((a, arr) => [...a, arr[i]], [val]));
    }

    const countries = zip(countryNames, confirmed, dead, recovered, datesConfirmed, datesDead, datesRecovered);

    let counter = -1;

    const statsMapped = countries.map(country => {
        counter++;
        return <Stats
            key={counter}
            name={country[0]}
            confirmed={country[1]}
            dead={country[2]}
            recovered={country[3]}
            datesConfirmed={country[4]}
            datesDead={country[5]}
            datesRecovered={country[6]}
        />
    });

    useEffect(() => {
        Promise.all(statsMapped).then(() => {
            setStats(statsMapped);
            setAllStats(statsMapped);
        });
    }, []);

    let search = useRef(null);

    function handleSearch() {
        const searched = allStats.filter(stat =>
        stat.props.name[0].includes(search.current.value));

        setStats(searched);
    }

    return (
        <div>
            <Container>
                <div className='stats-control'>
                    <Form.Label>Search countires:</Form.Label>
                    <Form.Control ref={search} onChange={handleSearch} placeholder='Search countries...'/>
                </div>
            </Container>
            { stats }
        </div>
    )
}

export default Countries
