import React, { useState } from 'react'

//Components
import Chart from "./Chart";

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
                                <h2>{props.name[0]}</h2>
                                <h4>{props.name[1]}</h4>
                                <h5>{props.confirmed}</h5>
                                <h5 className='death'>{props.dead}</h5>
                                <h5 className='recovered'>{props.recovered}</h5>
                                <div className='country-info' onClick={handleInfo}>
                                    <p>Click me for more info!</p>
                                </div>
                            </div>
                        :
                        <Chart
                            name={props.name}
                            datesConfirmed={props.datesConfirmed}
                            datesDead={props.datesDead}
                            datesRecovered={props.datesRecovered}
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
