import React, { useState } from 'react'

//Bootstrap
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Chart from "./Chart";

function Stats(props) {
    const [basic, setBasic] = useState(false);

    function handleInfo() {
        setBasic(!basic);
    }

    return (
        <div className='stats'>
            <Container>
                <Jumbotron>
                    {basic
                    ?
                    <Chart countryInfo={props} goBack={handleInfo}/>
                    :
                        <div>
                            <h2>{props.country[0].country}</h2>
                            <h4>{props.country[0].province}</h4>
                            <h5>{props.country[0].latest}</h5>
                            <h5 className='death-no-animation'>{props.country[1].latest}</h5>
                            <h5 className='recovered-no-animation'>{props.country[2].latest}</h5>
                            <div className='country-info' onClick={handleInfo}>
                                <p>Click me for more info!</p>
                            </div>
                        </div>
                    }
                </Jumbotron>
                <hr/>
            </Container>
        </div>
    )
}

export default  Stats
