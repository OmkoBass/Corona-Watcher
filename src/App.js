import React from 'react';

//Components
import Nav from "./Components/Nav";
import CoronaNumbers from "./Components/CoronaNumbers";
import Info from "./Components/Info";
import Countires from "./Components/Countries";
import Footer from "./Components/Footer";

//css
import './Styles/style.css'

//Bootstrap dependency
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <React.Fragment>
            <Nav/>
            <CoronaNumbers/>
            <Info/>
            <Countires/>
            <Footer/>
        </React.Fragment>
    );
}

export default App;
