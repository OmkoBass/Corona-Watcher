import React from 'react';

//Components
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import CoronaNumbers from "./Components/CoronaNumbers";
import Info from "./Components/Info";

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
            <Footer/>
        </React.Fragment>
    );
}

export default App;
