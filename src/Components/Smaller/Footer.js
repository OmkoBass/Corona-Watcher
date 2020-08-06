import React from 'react'

//Ant Components
import {Layout} from 'antd';

function Footer() {
    return <Layout.Footer style={{display: 'flex', flexDirection: 'column', textAlign: 'center'}}>
        @OmkoBass
        <a href="https://corona.lmao.ninja">API</a>
    </Layout.Footer>
}

export default Footer;
