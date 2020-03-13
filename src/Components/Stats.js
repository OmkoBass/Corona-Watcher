import React, { useState } from 'react'

//Bootstrap
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Chart from "./Chart";

function Stats(props) {
    const [basic, setBasic] = useState(false);

    function handleInfo() {
        setBasic(!basic);
    }

    return (
        <div className='stats'>
            <Container>
                <Card>
                    {basic
                    ?
                    <Chart countryInfo={props} goBack={handleInfo}/>
                    :
                        <div>
                            <h2>{props.country[0].country}</h2>
                            <h4>{props.country[0].province}</h4>
                            <h5>{props.country[0].latest}</h5>
                            <h5 className='death'>{props.country[1].latest}</h5>
                            <h5 className='recovered'>{props.country[2].latest}</h5>
                            <div className='country-info' onClick={handleInfo}>
                                <p>Click me for more info!</p>
                            </div>
                        </div>
                    }
                </Card>
                <hr/>
            </Container>
        </div>
    )
}

export default  Stats
