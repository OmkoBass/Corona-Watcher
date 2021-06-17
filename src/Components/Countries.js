import React, { useEffect, useRef, useState } from "react";
//Components
import Stats from "./Stats";
//Bootstrap
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
//React-window
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

function Countries(props) {
  const [stats, setStats] = useState(null);
  const [allStats, setAllStats] = useState(null);

  function renderRow(list) {
    if (list.length === 0) {
      return null;
    } else {
      return [
        ({ index, style }) => (
          <div style={style}>
            <Stats
              key={index}
              country={list[index].country}
              stats={[
                list[index].cases,
                list[index].deaths,
                list[index].recovered,
              ]}
              updated={list[index].updated}
              flag={list[index].countryInfo.flag}
            />
          </div>
        ),
        list.length,
      ];
    }
  }

  function renderSizer(Row) {
    if (Row === null) {
      return null;
    } else {
      return (
        <AutoSizer style={{ height: "660px" }}>
          {({ height, width }) => (
            <List
              height={height}
              width={width}
              itemCount={Row[1]}
              itemSize={560}
            >
              {Row[0]}
            </List>
          )}
        </AutoSizer>
      );
    }
  }

  useEffect(() => {
    setStats(renderSizer(renderRow(props.countries)));
    setAllStats(props.countries);
  }, []);

  let search = useRef(null);

  function handleSearch() {
    if (search.current.value !== null) {
      let upper = search.current.value
        .toLowerCase()
        .replace(/^\w/, (c) => c.toUpperCase());

      const searched = allStats.filter((stat) => {
        if (stat.country.includes(upper)) return stat;
        else return null;
      });

      setStats(renderSizer(renderRow(searched)));
    }
  }

  return (
    <div>
      <Container>
        <div className="stats-control">
          <Form.Control
            ref={search}
            onChange={handleSearch}
            placeholder="Search countries..."
          />
        </div>
      </Container>
      <div>{stats}</div>
    </div>
  );
}

export default Countries;
