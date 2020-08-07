import React from 'react'

//Ant Components
import {Layout} from 'antd';

function Footer() {
    return <Layout.Footer style={{display: 'flex', flexDirection: 'column', textAlign: 'center'}}>
        @OmkoBass
        <a href="https://corona.lmao.ninja">CORONA NINJA API</a>
        <a href="https://documenter.getpostman.com/view/8854915/SzS7R6uu?version=latest">NOVEL COVID API</a>
    </Layout.Footer>
}

export default Footer;
