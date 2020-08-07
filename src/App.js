import React, { useState, useEffect } from 'react';

//Ant Components
import { Layout, Spin } from 'antd';

//Components
import Header from "./Components/Smaller/Header";
import Footer from "./Components/Smaller/Footer";
import GlobalStats from "./Components/Smaller/GlobalStats";
import GlobalChart from "./Components/Smaller/GlobalChart";
import Description from "./Components/Smaller/Description";
import AllCountries from "./Components/Smaller/AllCountires";

//For fetching
import axios from 'axios'

import './Styles/Global.css';
import 'antd/dist/antd.css';

function App() {
    const [all, setAll] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`https://disease.sh/v3/covid-19/all`)
            .then(response => {
                if(response)
                    setAll(response.data);
            }).then(() => setLoading(false));
    }, []);

    return <Layout>
        <Spin tip='Loading...' spinning={loading}>
            <Header updated={all?.updated}/>
            <Layout.Content style={{padding: '2em', minHeight: '86vh', maxWidth: '1324px', display: 'block', margin: 'auto'}}>
                <GlobalStats
                    cases={all?.cases}
                    deaths={all?.deaths}
                    recovered={all?.recovered}
                />

                <GlobalChart/>

                <Description/>

                <AllCountries/>
            </Layout.Content>
        </Spin>
        <Footer/>
    </Layout>
}

export default App;
