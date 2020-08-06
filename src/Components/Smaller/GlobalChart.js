import React, {useState, useEffect} from 'react'

//Ant Components
import { Spin } from 'antd';

//Ant Charts
import {StackedArea} from '@ant-design/charts';

import axios from 'axios';

function GlobalChart() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);

    useEffect(() => {
        axios.get(`https://disease.sh/v3/covid-19/historical/all?lastdays=all`)
            .then(response => {
                if (response.data) {
                    let casesDates = (Object.keys(response.data.cases));
                    let casesValues = (Object.values(response.data.cases));

                    let deathsValues = (Object.values(response.data.deaths));

                    let recoveredValues = (Object.values(response.data.recovered));

                    let total = [];

                    for(let i = 0; i < casesDates.length; i++) {
                        const combinedObject = {
                            date: casesDates[i],
                            value: casesValues[i],
                            type: 'cases'
                        }

                        total.push(combinedObject);
                    }

                    for(let i = 0; i < casesDates.length; i++) {
                        const combinedObject = {
                            date: casesDates[i],
                            value: deathsValues[i],
                            type: 'deaths'
                        }

                        total.push(combinedObject);
                    }

                    for(let i = 0; i < casesDates.length; i++) {
                        const combinedObject = {
                            date: casesDates[i],
                            value: recoveredValues[i],
                            type: 'recovered'
                        }

                        total.push(combinedObject);
                    }

                    setData(total);
                }
            }).then(() => setLoading(false));
    }, []);

    const config = {
        title: {
            visible: true,
            text: 'Global Covid-19 Stats',
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
    return <div>
        <Spin spinning={loading}>
            <StackedArea {...config} />
        </Spin>
    </div>
}

export default GlobalChart;
