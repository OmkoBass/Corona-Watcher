import React, {useEffect, useState} from 'react'

//Components
import Loader from "./Loader";

//MoreInfo.js
import {Line} from "react-chartjs-2";

function MoreInfo(props) {
    const [info, setInfo] = useState(null);
    const [done, setDone] = useState(false);

    useEffect(() => {
        const getCountry = async () => {
            const response = await fetch(`https://corona.lmao.ninja/v2/historical/${props.country}/${props.province}`);
            const responseData = await response.json();
            const info = {
                labels: Object.keys(responseData.timeline.cases),
                datasets: [
                    {
                        label: 'Sick',
                        backgroundColor: '#cccccc', //Lighter
                        borderColor: '#bfbfbf', //Darker
                        fill: false,
                        data: Object.values(responseData.timeline.cases)
                    },
                    {
                        label: 'Dead',
                        backgroundColor: '#ff6666',
                        borderColor: '#ff4d4d',
                        fill: false,
                        data: Object.values(responseData.timeline.deaths)
                    },
                    {
                        label: 'Recovered',
                        backgroundColor: '#85e085',
                        borderColor: '#70db70',
                        fill: false,
                        data: Object.values(responseData.timeline.recovered)
                    }
                ]
            };

            setInfo(info);
        };
        getCountry().then(function () {
            setDone(true);
        });
    });

    return (
        <div>
            {done ?
                <Line data={info} options={{responsive: true}}/>
                :
                <Loader/>
            }
        </div>
    )
}

export default MoreInfo
