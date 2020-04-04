import React from 'react'

//Bootstrap
import Container from 'react-bootstrap/Container'

//CountUp
import CountUp from 'react-countup';
import Jumbotron from "react-bootstrap/Jumbotron";

function CoronaNumbers(props) {
    const mortality = (props.deaths / props.cases * 100).toFixed(2);

    const date = new Date(props.update);

    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours();
    let min = date.getMinutes();
    let second = date.getSeconds();

    if (month < 10)
        month = `0${month}`;
    if (day < 10)
        day = `0${day}`;
    if (hour < 10)
        hour = `0${hour}`;
    if (min < 10)
        min = `0${min}`;
    if (second < 10)
        second = `0${second}`;


    const convertedDate = `${month}:${day}:${date.getFullYear()} at ${hour}:${min}:${second}`;

    return (
        <div className='text-center'>
            <div className='text-center bg-dark text-white p-3'>
                <h4>Last updated: {convertedDate}</h4>
            </div>
            <div className='corona-numbers'>
                <Jumbotron className='latest bg-warning'>
                    <Container>
                        <h3>Confirmed Cases:</h3>
                        <h2>
                            <CountUp
                                start={0}
                                end={props.cases}
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
                                end={props.deaths}
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
                                end={props.recovered}
                                duration={5}/>
                        </h2>
                    </Container>
                </Jumbotron>
                <Jumbotron className='bg-secondary'>
                    <Container>
                        <h3>Mortality rate: { mortality }%</h3>
                    </Container>
                </Jumbotron>
            </div>
        </div>
    )
}

export default CoronaNumbers
