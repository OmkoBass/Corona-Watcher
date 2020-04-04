import React, {useState} from 'react'

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
                    <div>
                        <h2>{props.country}</h2>
                        <h4>{props.province}</h4>
                        <h5 className='text-secondary m-3'>Last updated: {props.updated}</h5>
                        <h5>{props.stats.confirmed}</h5>
                        <h5 className='text-danger'>{props.stats.deaths}</h5>
                        <h5 className='text-success'>{props.stats.recovered}</h5>
                    </div>
                    {
                        basic
                            ?
                            null
                            :
                            <MoreInfo
                                country={props.country}
                                province={props.province}
                                updated={props.updated}
                                goBack={handleInfo}
                            />
                    }
                    <div className='country-info mt-3' onClick={handleInfo}>
                        <p>Click me for {basic ? 'more' : 'less'} info!</p>
                    </div>
                </Card>
                <hr/>
            </Container>
        </div>
    )
}

export default Stats
