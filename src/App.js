import React, { useEffect, useState } from 'react';

//axios
import axios from 'axios';

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

function App() {
    const [pulled, setPulled] = useState(null);
    const [done, setDone] = useState(false);

    useEffect(() => {
        axios.get('https://coronavirus-tracker-api.herokuapp.com/all')
            .then(response => {
                setPulled(response);
                setDone(true);
            })
    }, []);

    return (
        <React.Fragment>
            <Nav/>
            {done
            ?
                <CoronaNumbers latest={pulled.data.latest} date={pulled.data.confirmed.last_updated}/>
            :
                <Loader/>
            }
            <Info/>
            {done
            ?
                <Countries
                    confirmed={pulled.data.confirmed.locations}
                    deaths={pulled.data.deaths.locations}
                    recovered={pulled.data.recovered.locations}
                />
            :
                <Loader/>
            }
            <Footer/>
        </React.Fragment>
    );
}

export default App;
