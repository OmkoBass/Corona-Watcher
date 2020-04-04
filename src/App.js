import React, { useEffect, useState } from 'react';

//Components
import Nav from "./Components/Nav";
import CoronaNumbers from "./Components/CoronaNumbers";
import Info from "./Components/Info";
import Countries from "./Components/Countries";
import Footer from "./Components/Footer";
import Loader from "./Components/Loader";

//css
import './Styles/style.css'

//Bootstrap dependency
import 'bootstrap/dist/css/bootstrap.min.css';

//API
import { NovelCovid } from "novelcovid/dist";
import GraphedCases from "./Components/GraphedCases";

function App() {
    const [globalData, setGlobalData] = useState(null);
    const [countries, setCountries] = useState(null);
    const [globalHistory, setGlobalHistory] = useState(null);
    const [done, setDone] = useState(false);

    async function getCountries() {
        let data = await new NovelCovid();

        return await data.jhucsse();
    }

    async function getGlobalData() {
         let data = await new NovelCovid();

         return data.all();
    }

    async function getGlobalHistory() {
        let data = await new NovelCovid();

        return data.historical(true);
    }

    async function setData() {
        await getGlobalData().then(data => setGlobalData(data));
        await getCountries().then(data => setCountries(data));
        await getGlobalHistory().then(data => setGlobalHistory(data));
    }

    useEffect(() => {
        setData().then(function() {
            setDone(true);
        })
    }, []);

    return (
        <React.Fragment>
            <Nav/>
            {done
            ?
                <div>
                    <CoronaNumbers
                        cases={globalData.cases}
                        deaths={globalData.deaths}
                        recovered={globalData.recovered}
                    />
                    <GraphedCases
                        cases={globalHistory.cases}
                        deaths={globalHistory.deaths}
                        recovered={globalHistory.recovered}
                    />
                </div>
            :
                <Loader/>
            }
            <Info/>
            {done
            ?
                <Countries countries={countries} />
            :
                <Loader/>
            }
            <Footer/>
        </React.Fragment>
    );
}

export default App;
