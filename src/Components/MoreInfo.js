import React, {useEffect, useState} from 'react'

//Components
import Loader from "./Loader";

//MoreInfo.js
import {Line} from "react-chartjs-2";

//API
import { NovelCovid } from "novelcovid/dist";

function MoreInfo(props) {
    const [info, setInfo] = useState(null);
    const [done, setDone] = useState(false);

    async function getCountry() {
        let data = await new NovelCovid();

        return data.historical(null, props.country, props.province);
    }

    useEffect(() => {
        getCountry().then(responseData => {
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
            setDone(true);
        })
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
