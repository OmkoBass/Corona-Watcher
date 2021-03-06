import React, { useEffect, useState } from 'react';

//Components
import Nav from "./Components/Nav";
import CoronaNumbers from "./Components/CoronaNumbers";
import Info from "./Components/Info";
import Countries from "./Components/Countries";
import Footer from "./Components/Footer";
import Loader from "./Components/Loader";
import GraphedCases from "./Components/GraphedCases";

//css
import './Styles/style.css'

//Bootstrap dependency
import 'bootstrap/dist/css/bootstrap.min.css';

//API
import { NovelCovid } from 'novelcovid';

function App() {
    const [globalData, setGlobalData] = useState(null);
    const [countries, setCountries] = useState(null);
    const [globalHistory, setGlobalHistory] = useState(null);
    const [toTop, setToTop] = useState(false);
    const [done, setDone] = useState(false);

    async function getGlobalData() {
        let data = await new NovelCovid();

        return data.all();
    }

    async function getCountries() {
        let data = await new NovelCovid();

        console.log(await data.countries());

        return await data.countries(null, {sort: 'cases'});
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

    function scroll() {
        if (document.body.scrollTop > 460 || document.documentElement.scrollTop > 460) {
            setToTop(true);
        } else {
            setToTop(false);
        }
    }

    window.onscroll = () => {
        scroll();
    };

    useEffect(() => {


        setData().then(function() {
            setDone(true);
        })
    }, []);

    return (
        <React.Fragment>
            <Nav/>
            <div className='to-top'
                 style={toTop ? null : {display: 'none'}}
                 onClick={() => window.scrollTo(0, 0)}>
                <span>&#8593;</span>
            </div>
            {done
            ?
                <div>
                    <CoronaNumbers
                        update={globalData.updated}
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
