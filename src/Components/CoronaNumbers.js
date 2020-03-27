import React from 'react'

//Bootstrap
import Container from 'react-bootstrap/Container'

//CountUp
import CountUp from 'react-countup';
import Jumbotron from "react-bootstrap/Jumbotron";

function CoronaNumbers(props) {

    const mortality = (props.latest.deaths / props.latest.confirmed * 100).toFixed(2);
    const date = props.date.slice(0, 10);
    const time = props.date.slice(11, 19);

    return (
        <div className='text-center'>
            <div className='corona-date bg-dark text-white'>
                <Container>
                    <h3>This was last updated:</h3>
                    <h3>{date} {time}</h3>
                </Container>
            </div>
            <div className='corona-numbers'>
                <Jumbotron className='latest bg-warning'>
                    <Container>
                        <h3>Confirmed Cases:</h3>
                        <h2>
                            <CountUp
                                start={0}
                                end={props.latest.confirmed}
                                duration={5}/>
                        </h2>
                    </Container>
                </Jumbotron>
                <Jumbotron className='recovered bg-success'>
                    <Container>
                        <h3>Recovered:</h3>
                        <h2>
                            <CountUp
                                start={0}
                                end={props.latest.recovered}
                                duration={5}/>
                        </h2>
                    </Container>
                </Jumbotron>
                <Jumbotron className='death bg-danger'>
                    <Container>
                        <h3>Total Deaths:</h3>
                        <h2>
                            <CountUp
                                start={0}
                                end={props.latest.deaths}
                                duration={5}/>
                        </h2>
                    </Container>
                </Jumbotron>
                <Jumbotron className='bg-secondary'>
                    <Container>
                        <h3>Mortality rate: {mortality}%</h3>
                    </Container>
                </Jumbotron>
            </div>
        </div>
    )
}

export default CoronaNumbers
