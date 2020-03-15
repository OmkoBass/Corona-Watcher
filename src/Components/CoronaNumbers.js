import React from 'react'

//Bootstrap
import Container from 'react-bootstrap/Container'

//CountUp
import CountUp from 'react-countup';

function CoronaNumbers(props) {
    return (
        <div className='corona'>
            <div className='corona-date'>
                <Container>
                    <h3>This was last updated:</h3>
                    <h3>{props.date}</h3>
                </Container>
            </div>
            <div className='corona-numbers'>
                <Container>
                    <ul>
                        <h3>Confirmed Cases:</h3>
                        <li>
                            <h2 className='latest'>
                                <CountUp end={props.latest.confirmed}
                                         duration={4}/>
                            </h2>
                        </li>
                        <hr/>
                        <h3>Total Deaths:</h3>
                        <li>
                            <h2 className='death'>
                                <CountUp end={props.latest.deaths}
                                         duration={4}/>
                            </h2>
                        </li>
                        <hr/>
                        <h3>Recovered:</h3>
                        <li>
                            <h2 className='recovered'>
                                <CountUp end={props.latest.recovered}
                                         duration={4}/>
                            </h2>
                        </li>
                        <hr/>
                    </ul>
                </Container>
            </div>
        </div>
    )
}

export default CoronaNumbers
