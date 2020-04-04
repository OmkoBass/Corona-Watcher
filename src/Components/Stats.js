import React, { useState } from 'react'

//Components
import MoreInfo from "./MoreInfo";

//Bootstrap
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

function Stats(props) {
    const [basic, setBasic] = useState(true);

    function handleInfo() {
        setBasic(!basic);
    }

    return (
        <div className='stats'>
            <Container>
                <Card>
                    {
                        basic
                        ?
                            <div>
                                <h2>{props.country}</h2>
                                <h4>{props.province}</h4>
                                <h5 className='text-secondary m-3'>Last updated: {props.updated}</h5>
                                <h5>{props.stats.confirmed}</h5>
                                <h5 className='death text-danger'>{props.stats.deaths}</h5>
                                <h5 className='recovered text-success'>{props.stats.recovered}</h5>

                                {/*<div className='country-info' onClick={handleInfo}>
                                    <p>Click me for more info!</p>
                                </div>*/}
                            </div>
                        :
                        <MoreInfo
                            name={props.country}
                            province={props.province}
                            goBack={handleInfo}
                        />
                    }
                </Card>
                <hr/>
            </Container>
        </div>
    )
}

export default  Stats
