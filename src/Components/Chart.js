import React from 'react'
import { Line } from "react-chartjs-2";

function Chart(props) {
    const sickData = props.countryInfo.country[0].history;
    const deadData = props.countryInfo.country[1].history;
    const recoveredData = props.countryInfo.country[2].history;

    const data = {
        labels: Object.keys(sickData),
        datasets: [
                {
                    label: 'Sick',
                    backgroundColor: '#cccccc', //Lighter
                    borderColor: '#bfbfbf', //Darker
                    data: Object.values(sickData)
                },
                {
                    label: 'Dead',
                    backgroundColor: '#ff6666',
                    borderColor: '#ff4d4d',
                    data: Object.values(deadData),
                },
                {
                    label: 'Recovered',
                    backgroundColor: '#85e085',
                    borderColor: '#70db70',
                    data: Object.values(recoveredData),
                }
            ]
    }

    function handleBack() {
        props.goBack();
    }

    return (
        <div>
            <h2>{props.countryInfo.country[0].country}</h2>
            <Line data={data} options={{responsive: true}}/>
            <div className='less-info' onClick={handleBack}>
                <h4>Less info</h4>
            </div>
        </div>
    )
}

export default Chart
