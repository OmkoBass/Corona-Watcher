import React, {useEffect, useState} from 'react'

//axios
import axios from 'axios';

//Bootstrap
import Container from 'react-bootstrap/Container'
import Spinner from 'react-bootstrap/Spinner'

//CountUp
import CountUp from 'react-countup';

function CoronaNumbers() {
    const [done, setDone] = useState(false);

    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get('https://coronavirus-tracker-api.herokuapp.com/all')
            .then(response => {
                const allThree = response.data;

                setData(allThree);
                setDone(true);
            })

    }, []);

    return (
        <div>
            {done ?
                <div className='corona'>
                    <div className='corona-date'>
                        <Container>
                            <h3>This was last updated:</h3>
                            <h3>{data.confirmed.last_updated}</h3>
                        </Container>
                    </div>
                        <div className='corona-numbers'>
                            <Container>
                                <ul>
                                    <h3>Confirmed Cases:</h3>
                                    <li>
                                        <h2 className='latest'>
                                            <CountUp end={data.latest.confirmed}
                                            duration={4}/>
                                        </h2>
                                    </li>
                                    <hr/>
                                    <h3>Total Deaths:</h3>
                                    <li>
                                        <h2 className='death'>
                                            <CountUp end={data.latest.deaths}
                                            duration={4}/>
                                        </h2>
                                    </li>
                                    <hr/>
                                    <h3>Recovered:</h3>
                                    <li>
                                        <h2 className='recovered'>
                                            <CountUp end={data.latest.recovered}
                                            duration={4}/>
                                        </h2>
                                    </li>
                                    <hr/>
                                </ul>
                            </Container>
                        </div>
                </div>
                :
                <div className='loading'>
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                </div>
            }
        </div>
    )
}

export default CoronaNumbers
