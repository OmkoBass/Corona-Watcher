import React, {useState, useEffect} from 'react'

//Ant Components
import {Row, Col, Spin} from "antd";

//Components
import CountryCard from "./CountryCard";

import axios from 'axios'

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

    return <div>
        <Spin spinning={loading} tip='Loading...'>
            <Row
                justify='center'
                style={{padding: '2em'}}
                gutter={[{xs: 0, sm: 16, md: 24, lg: 32}, {xs: 8, sm: 16, md: 24, lg: 32}]}>
                {allCountries?.map((country, index) => <Col md={16} sm={20} xs={24} key={index}>
                    <CountryCard
                        cases={country.cases}
                        country={country.country}
                        flag={country.countryInfo.flag}
                        deaths={country.deaths}
                        recovered={country.recovered}
                    />
                </Col>)}
            </Row>
        </Spin>
    </div>
}

export default AllCountries;
