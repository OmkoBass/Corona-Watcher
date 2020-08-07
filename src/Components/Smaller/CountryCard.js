import React from 'react'

//Ant Components
import { Card } from "antd";
import GlobalStats from "./GlobalStats";

function CountryCard({ countryInfo }) {
    return <Card title={countryInfo?.country} hoverable>
        {/*<Meta
            style={{textAlign: 'center'}}
            title={props.country}
            avatar={
                <Avatar src={props.flag}/>
            }
        />*/}

        <GlobalStats
            cases={countryInfo?.cases}
            deaths={countryInfo?.deaths}
            recovered={countryInfo?.recovered}
        />
    </Card>
}

export default CountryCard;
