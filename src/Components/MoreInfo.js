import React from 'react'

//MoreInfo.js
/*import { Line } from "react-chartjs-2";*/

function MoreInfo(props) {
    /*const data = {
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
    }*/

    function handleBack() {
        props.goBack();
    }

    return (
        <div>
            <h2>{props.name}</h2>
            <h4>{props.province}</h4>
            {/*<Line data={data} options={{responsive: true}}/>*/}
            <div className='less-info' onClick={handleBack}>
                <h4>Less info</h4>
            </div>
        </div>
    )
}

export default MoreInfo
