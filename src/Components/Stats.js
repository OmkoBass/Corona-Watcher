import React, {useState} from 'react'

//Components
import MoreInfo from "./MoreInfo";

//Bootstrap
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

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
                        <Row className='mb-3'>
                            <Col className='text-center'>
                                <div>
                                    <h4 className='text-center'>{props.country}</h4>
                                    <Image
                                        style={{maxHeight: '50px'}}
                                        src={props.flag} alt='flag'
                                        roundedCircle/>
                                </div>
                            </Col>
                        </Row>
                        <div>
                            <Row>
                                <Col>
                                    <h5>Cases</h5>
                                    <h5 className='text-primary font-weight-bold'>{props.stats[0]}</h5>
                                </Col>
                                <Col>
                                    <h5>Deaths</h5>
                                    <h5 className='text-danger font-weight-bold'>{props.stats[1]}</h5>
                                </Col>
                                <Col>
                                    <h5>Recovered</h5>
                                    <h5 className='text-success font-weight-bold'>{props.stats[2]}</h5>
                                </Col>
                            </Row>
                        </div>
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
