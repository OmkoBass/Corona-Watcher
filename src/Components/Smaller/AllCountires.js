import React, {useState, useEffect} from 'react'

//Ant Components
import {Spin} from "antd";

//Components
import CountryCard from "./CountryCard";

import axios from 'axios'

import {FixedSizeList} from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

function AllCountries() {
    const [allCountries, setAllCountries] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`https://corona.lmao.ninja/v2/countries?sort=country`)
            .then(response => {
                if (response.data)
                    setAllCountries(response.data);
            }).then(() => setLoading(false));
    }, []);

    const Country = ({index, style}) => (
        <div key={index} style={style}>
            <CountryCard countryInfo={allCountries[index]}/>
        </div>
    );

    return <div>
        <Spin spinning={loading} tip='Loading...'>
            <AutoSizer style={{height: '100vh', width: '100%'}}>
                {({height, width}) =>
                    <FixedSizeList
                        style={{display: 'block', margin: 'auto'}}
                        itemCount={allCountries?.length}
                        itemSize={1000}
                        height={height}
                        width={width}
                    >
                        {Country}
                    </FixedSizeList>
                }
            </AutoSizer>
        </Spin>
    </div>
}

export default AllCountries;
