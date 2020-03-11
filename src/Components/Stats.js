import React from 'react'

//Bootstrap
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";

function Stats(props) {
    return (
        <div className='stats'>
            <Container>
                <Jumbotron>
                    <h2>{props.country[0].country}</h2>
                    <h4>{props.country[0].province}</h4>
                    <h5>{props.country[0].latest}</h5>
                    <h5 className='death-no-animation'>{props.country[1].latest}</h5>
                    <h5 className='recovered-no-animation'>{props.country[2].latest}</h5>
                </Jumbotron>
                <hr/>
            </Container>
        </div>
    )
}

export default  Stats
