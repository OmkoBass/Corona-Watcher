import React from 'react'

//Ant Components
import { Card } from "antd";
import GlobalStats from "./GlobalStats";

function CountryCard(props) {
    return <Card title={props.country}>
        {/*<Meta
            style={{textAlign: 'center'}}
            title={props.country}
            avatar={
                <Avatar src={props.flag}/>
            }
        />*/}

        <GlobalStats
            cases={props.cases}
            deaths={props.deaths}
            recovered={props.recovered}
        />
    </Card>
}

export default CountryCard;
