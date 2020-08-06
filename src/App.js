import React from 'react';

//Ant Components
import { Layout } from 'antd';

//Components
import Header from "./Components/Smaller/Header";
import Footer from "./Components/Smaller/Footer";

import 'antd/dist/antd.css';

function App() {
    return <Layout>
        <Header/>
        <Layout.Content style={{minHeight: '86vh'}}>

        </Layout.Content>
        <Footer/>
    </Layout>
}

export default App;
