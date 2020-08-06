import React from 'react'

//Ant Components
import {Layout} from 'antd';

import moment from "moment";

function Header({updated}) {
    return <Layout.Header style={{color: 'white', textAlign: 'center'}}>
        <div style={{display: 'flex', flexDirection: 'column'}}>
            Corona-Watcher
            Last updated
            {moment(updated).format('DD.MM.YYYY HH:mm')}
        </div>
    </Layout.Header>
}

export default Header;
