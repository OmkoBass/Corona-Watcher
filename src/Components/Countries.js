import React, {useEffect, useRef, useState} from 'react'
//Components
import Stats from "./Stats";
//Bootstrap
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
//React-window
import {FixedSizeList as List} from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

function Countries(props) {
    const [stats, setStats] = useState(null);
    const [allStats, setAllStats] = useState(null);

    async function renderList(list) {
        const Row = ({index, style}) => (
            <Stats
                style={style}
                key={index}
                country={list[index].country}
                stats={[list[index].cases, list[index].deaths, list[index].recovered]}
                updated={list[index].updated}
                flag={list[index].countryInfo.flag}
            />
        );

        return () => (
            <AutoSizer style={{height: '700px'}}>
                {({height, width}) => (
                    <List
                        height={height}
                        width={width}
                        itemCount={list.length}
                        itemSize={3.3}
                    >
                        {Row}
                    </List>
                )}
            </AutoSizer>
        );
    }

    useEffect(() => {
        renderList(props.countries).then(response => setStats(response));
        setAllStats(props.countries);
    }, []);

    let search = useRef(null);

    function handleSearch() {
        let searched = allStats.filter(stat => {
            if (stat.country.includes(search.current.value))
                return stat;
            else
                return null;
        });

        const Row = ({index, style}) => (
            <Stats
                style={style}
                key={index}
                country={searched[index].country}
                stats={[searched[index].cases, searched[index].deaths, searched[index].recovered]}
                updated={searched[index].updated}
                flag={searched[index].countryInfo.flag}
            />
        );

        const Example = <AutoSizer style={{height: '700px'}}>
                {({ height, width }) => (
                    <List
                        className='List'
                        height={height}
                        width={width}
                        itemCount={searched.length}
                        itemSize={3.3}
                    >
                        {Row}
                    </List>
                )}
            </AutoSizer>;

        setStats(Example);
    }

    return (
        <div>
            <Container>
                <div className='stats-control'>
                    <Form.Control ref={search} onChange={handleSearch} placeholder='Search countries...'/>
                </div>
            </Container>
            <div>
                {stats}
            </div>
        </div>
    )
}

export default Countries
