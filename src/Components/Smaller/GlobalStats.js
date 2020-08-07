import React from 'react'

//Ant Components
import {Row, Col, Card} from 'antd';

//Ant Icons
import {MehTwoTone, FrownTwoTone, SmileTwoTone} from '@ant-design/icons';

function GlobalStats({cases, deaths, recovered}) {
    return <div>
        <Row style={{padding: '2em'}}
             gutter={[{xs: 0, sm: 16, md: 24, lg: 32}, {xs: 8, sm: 16, md: 24, lg: 32}]}
             justify='center'>
            <Col md={8} xs={24}>
                <Card
                    hoverable
                    title={'Cases'}
                    style={{borderBottom: '5px solid #007bff'}}
                >
                    <div style={{textAlign: 'center'}}>
                        <MehTwoTone style={{fontSize: '4em'}}/>

                        <h3 style={{color: '#007bff', marginTop: '1em'}}>{cases}</h3>
                    </div>
                </Card>
            </Col>

            <Col md={8} xs={24}>
                <Card
                    hoverable
                    title={'Deaths'}
                    style={{borderBottom: '5px solid #dc3545'}}
                >
                    <div style={{textAlign: 'center'}}>
                        <FrownTwoTone style={{fontSize: '4em'}} twoToneColor='#dc3545'/>

                        <h3 style={{color: '#dc3545', marginTop: '1em'}}>{deaths}</h3>
                    </div>
                </Card>
            </Col>

            <Col md={8} xs={24}>
                <Card
                    hoverable
                    title={'Recovered'}
                    style={{borderBottom: '5px solid #28a745'}}
                >
                    <div style={{textAlign: 'center'}}>
                        <SmileTwoTone style={{fontSize: '4em'}} twoToneColor='#28a745'/>

                        <h3 style={{color: '#28a745', marginTop: '1em'}}>{recovered}</h3>
                    </div>
                </Card>
            </Col>
        </Row>
    </div>
}

export default GlobalStats;
