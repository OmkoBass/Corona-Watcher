import React, {useState, useEffect} from 'react'

//Ant Components
import {Spin, AutoComplete} from "antd";

//Components
import CountryCard from "./CountryCard";

import axios from 'axios'

//React windowing
import {FixedSizeList} from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

function AllCountries() {
    const [allCountries, setAllCountries] = useState(null);
    const [loading, setLoading] = useState(true);
    const [countryNames, setCountryNames] = useState(null);

    useEffect(() => {
        axios.get(`https://corona.lmao.ninja/v2/countries?sort=country`)
            .then(response => {
                if (response.data)
                {
                    setAllCountries(response.data);
                    setCountryNames(response.data.map(country => { return {value: `${country.country}`}}))
                }
            }).then(() => setLoading(false));
    }, []);

    const Country = ({index, style}) => (
        <div key={index} style={style}>
            <CountryCard countryInfo={allCountries[index]}/>
        </div>
    );

    return <div>
        <Spin spinning={loading} tip='Loading...'>
            <AutoComplete
                style={{width: '100%', display: 'block', margin: 'auto', marginBottom: '1em'}}
                allowClear
                placeholder="Country"
                options={countryNames}
            />
            <AutoSizer style={{height: '100vh'}}>
                {({height, width}) =>
                    <FixedSizeList
                        style={{display: 'block', margin: 'auto'}}
                        itemCount={allCountries?.length}
                        itemSize={820}
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
