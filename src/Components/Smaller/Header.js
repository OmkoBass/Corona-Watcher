import React from 'react'

//Ant Components
import {Layout} from 'antd';

import moment from "moment";

function Header({updated}) {
    return <Layout.Header style={{color: 'white', textAlign: 'center'}}>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            Corona-Watcher
            <div>
                Last updated:{moment(updated).format('DD.MM.YYYY HH:mm')}
            </div>
        </div>
    </Layout.Header>
}

export default Header;
