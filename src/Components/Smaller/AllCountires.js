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

    const [countryHistorical, setCountryHistorical] = useState(null);

    useEffect(() => {
        axios.get(`https://corona.lmao.ninja/v2/countries?sort=country`)
            .then(response => {
                if (response.data) {
                    setAllCountries(response.data);
                    setSelectedCountries(response.data);
                }
            }).then(() => axios.get(`https://corona.lmao.ninja/v2/historical?lastdays=all`)
            .then(response => {
                if (response.data)
                    setCountryHistorical(response.data);
            }).then(() => setLoading(false)));
    }, []);

    const Country = ({index, style}) => (
        <div key={index} style={style}>
            <CountryCard countryInfo={selectedCountries[index]} countryHistorical={countryHistorical[index].timeline}/>
        </div>
    );

    return <div>
        {
            loading
                ?
                <Spin style={{display: 'block', margin: '2em auto auto auto'}} size='large' tip='Getting info...'/>
                :
                <div>
                    <AutoComplete
                        style={{width: '100%', display: 'block', margin: 'auto', marginBottom: '1em'}}
                        allowClear
                        placeholder="Country"
                        options={selectedCountries.map(country => {
                            return {value: country.country}
                        })}
                        onChange={value => setSelectedCountries(allCountries.filter(country => country.country.includes(value)))}
                        onSelect={value => setSelectedCountries(allCountries.filter(country => country.country === value))}
                    />
                    <AutoSizer style={{height: '100vh'}}>
                        {({height, width}) =>
                            <FixedSizeList
                                style={{display: 'block', margin: 'auto'}}
                                itemCount={selectedCountries.length}
                                itemSize={820}
                                height={height}
                                width={width}
                            >
                                {Country}
                            </FixedSizeList>
                        }
                    </AutoSizer>
                </div>
        }
    </div>
}

export default AllCountries;
