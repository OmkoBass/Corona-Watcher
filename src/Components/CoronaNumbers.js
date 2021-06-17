import React from "react";

//Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//CountUp
import CountUp from "react-countup";
import Jumbotron from "react-bootstrap/Jumbotron";

//icons
import sick from "../Assets/sick.png";
import dead from "../Assets/dead.png";
import recovered from "../Assets/recovered.png";

function CoronaNumbers(props) {
  const date = new Date(props.update);

  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hour = date.getHours();
  let min = date.getMinutes();
  let second = date.getSeconds();

  if (month < 10) month = `0${month}`;
  if (day < 10) day = `0${day}`;
  if (hour < 10) hour = `0${hour}`;
  if (min < 10) min = `0${min}`;
  if (second < 10) second = `0${second}`;

  const convertedDate = `${month}:${day}:${date.getFullYear()} at ${hour}:${min}:${second}`;

  return (
    <div className="text-center">
      <div
        className="text-center text-white p-3 shadow"
        style={{ backgroundColor: "black" }}
      >
        <h4>Last updated: {convertedDate}</h4>
      </div>
      <Container className="mb-5 mt-4">
        <Row>
          <Col md={4}>
            <Jumbotron
              className="latest"
              style={{ borderBottom: "18px solid #87ceeb" }}
            >
              <img src={sick} alt="sick-icon" />
              <h4 className="mt-3">Cases:</h4>
              <h3>
                <CountUp
                  data-testid={`count-latest`}
                  className="font-weight-bold"
                  start={0}
                  end={props.cases}
                  duration={5}
                />
              </h3>
            </Jumbotron>
          </Col>
          <Col md={4}>
            <Jumbotron
              data-testid={`jumbotron-death`}
              className="death"
              style={{ borderBottom: "18px solid #ff6666" }}
            >
              <img src={dead} alt="dead-icon" />
              <h4 className="mt-3">Deaths:</h4>
              <h3>
                <CountUp
                  className="font-weight-bold"
                  start={0}
                  end={props.deaths}
                  duration={5}
                />
              </h3>
            </Jumbotron>
          </Col>
          <Col md={4}>
            <Jumbotron
              data-testid={`jumbotron-recovered`}
              className="recovered"
              style={{ borderBottom: "18px solid #85e085" }}
            >
              <img src={recovered} alt="icon-recovered" />
              <h4 className="mt-3">Recovered:</h4>
              <h3>
                <CountUp
                  className="font-weight-bold"
                  start={0}
                  end={props.recovered}
                  duration={5}
                />
              </h3>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CoronaNumbers;
