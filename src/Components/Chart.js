import React from 'react'

//Chart.js
import { Line } from "react-chartjs-2";

function Chart(props) {
    //Dates weren't sorted so i needed to sort the dates
    //And preserve the value order for those dates
    let dates = [];

    for (let date in props.datesConfirmed) {
        dates.push([date, props.datesConfirmed[date]]);
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
                    data: props.datesDead,
                },
                {
                    label: 'Recovered',
                    backgroundColor: '#85e085',
                    borderColor: '#70db70',
                    data: props.datesRecovered,
                }
            ]
    }

    function handleBack() {
        props.goBack();
    }

    return (
        <div>
            <h2>{props.name[0]}</h2>
            <h4>{props.name[1]}</h4>
            <Line data={data} options={{responsive: true}}/>
            <div className='less-info' onClick={handleBack}>
                <h4>Less info</h4>
            </div>
        </div>
    )
}

export default Chart
