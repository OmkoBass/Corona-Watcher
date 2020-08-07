import React, { useState, useEffect } from 'react'

//Ant Components
import {Card, Spin} from "antd";

//Components
import GlobalStats from "./GlobalStats";
import {StackedArea} from "@ant-design/charts";

function CountryCard({ countryInfo, countryHistorical }) {
    const [loading, setLoading] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        let casesDates = (Object.keys(countryHistorical.cases));
        let casesValues = (Object.values(countryHistorical.cases));

        let deathsValues = (Object.values(countryHistorical.deaths));

        let recoveredValues = (Object.values(countryHistorical.recovered));

        let total = [];

        for(let i = 0; i < casesDates.length; i++) {
            const combinedObjectCases = {
                date: casesDates[i],
                value: casesValues[i],
                type: 'cases'
            }

            const combinedObjectDeath = {
                date: casesDates[i],
                value: deathsValues[i],
                type: 'deaths'
            }

            const combinedObjectRecovered = {
                date: casesDates[i],
                value: recoveredValues[i],
                type: 'recovered'
            }

            total.push(combinedObjectCases);
            total.push(combinedObjectDeath);
            total.push(combinedObjectRecovered);
        }

        setData(total);
    }, [countryHistorical.cases, countryHistorical.deaths, countryHistorical.recovered]);

    const config = {
        title: {
            visible: true,
            text: countryInfo.country,
        },
        description: {
            visible: true,
        },
        data,
        xField: 'date',
        yField: 'value',
        stackField: 'type',
        color: ['#007bff', '#dc3545', '#28a745'],
        xAxis: {
            type: 'dateTime',
            tickCount: 5,
        },
        label: {
            visible: true,
            type: 'area',
            autoScale: true,
        },
        legend: {
            visible: true,
            position: 'right-top',
        },
        responsive: true,
    };

    return <Card title={countryInfo?.country} hoverable>
        <GlobalStats
            cases={countryInfo.cases}
            deaths={countryInfo.deaths}
            recovered={countryInfo.recovered}
        />

        <Spin spinning={loading}>
            <StackedArea {...config} />
        </Spin>
    </Card>
}

export default CountryCard;
