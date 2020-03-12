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
                    backgroundColor: 'lightgray',
                    data: Object.values(sickData)
                },
                {
                    label: 'Dead',
                    backgroundColor: 'darkred',
                    data: Object.values(deadData),
                },
                {
                    label: 'Recovered',
                    backgroundColor: 'green',
                    data: Object.values(recoveredData),
                }
            ]
    }

    function handleBack() {
        props.goBack();
    }

    return (
        <div>
            <Line data={data} options={{responsive: true}}/>
            <div className='less-info' onClick={handleBack}>
                <h4>Less info</h4>
            </div>
        </div>
    )
}

export default Chart
