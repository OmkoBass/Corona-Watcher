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

    const [selectedCountries, setSelectedCountries] = useState(null);

    useEffect(() => {
        axios.get(`https://corona.lmao.ninja/v2/countries?sort=country`)
            .then(response => {
                console.log(response.data);
                if (response.data) {
                    setAllCountries(response.data);
                    setSelectedCountries(response.data);
                }
            }).then(() => setLoading(false));
    }, []);

    const Country = ({index, style}) => (
        <div key={index} style={style}>
            <CountryCard countryInfo={selectedCountries[index]}/>
        </div>
    );

    return <div>
        <Spin spinning={loading} tip='Loading...'>
            <AutoComplete
                style={{width: '100%', display: 'block', margin: 'auto', marginBottom: '1em'}}
                allowClear
                placeholder="Country"
                options={selectedCountries?.map(country => { return { value: country.country }})}
                onChange={value => setSelectedCountries(allCountries?.filter(country => country.country.includes(value)))}
                onSelect={value => setSelectedCountries(allCountries?.filter(country => country.country === value))}
            />
            <AutoSizer style={{height: '100vh'}}>
                {({height, width}) =>
                    <FixedSizeList
                        style={{display: 'block', margin: 'auto'}}
                        itemCount={selectedCountries?.length}
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
