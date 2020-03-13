import React from 'react'

//Chart.js
import { Line } from "react-chartjs-2";

function Chart(props) {
    const sickData = props.countryInfo.country[0].history;
    const deadData = props.countryInfo.country[1].history;
    const recoveredData = props.countryInfo.country[2].history;

    //Dates weren't sorted so i needed to sort the dates
    //And preserve the value order for those dates
    let dates = [];

    for (let date in sickData) {
        dates.push([date, sickData[date]]);
    }
    dates.sort(function(a, b) {
        return a[1] - b[1];
    })

    const datesSorted = dates.map(date => date[0]);
    const values = dates.map(value => value[1]);

    const data = {
        labels: datesSorted,
        datasets: [
                {
                    label: 'Sick',
                    backgroundColor: '#cccccc', //Lighter
                    borderColor: '#bfbfbf', //Darker
                    data: values
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
