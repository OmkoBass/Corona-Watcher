import React from 'react'

//Bootstrap
import Container from "react-bootstrap/Container";

//Graph.js
import { Line } from "react-chartjs-2";


function GraphedCases(props) {
    const data = {
        labels: Object.keys(props.cases),
        datasets: [
                {
                    label: 'Confirmed',
                    backgroundColor: '#cccccc', //Lighter
                    borderColor: '#bfbfbf', //Darker
                    fill: false,
                    data: Object.values(props.cases)
                },
                {
                    label: 'Dead',
                    backgroundColor: '#ff6666',
                    borderColor: '#ff4d4d',
                    fill: false,
                    data: Object.values(props.deaths)
                },
                {
                    label: 'Recovered',
                    backgroundColor: '#85e085',
                    borderColor: '#70db70',
                    fill: false,
                    data:   Object.values(props.recovered)
                }
            ]
    }

    return <div>
        <Container className='text-center'>
            <h3 className='p-3'>Global COVID-19 cases</h3>
            <Line
                data={data}
                options={{responsive: true,
                    maintainAspectRatio: true
                }}/>
        </Container>
    </div>
}

export default GraphedCases
