import React from "react";

//Components
import MoreInfo from "./MoreInfo";

//Bootstrap
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

function Stats(props) {
  return (
    <div className="stats">
      <Container>
        <Card>
          <div>
            <Row className="mb-3">
              <Col className="text-center">
                <div>
                  <h3 className="text-center">{props.country}</h3>
                  <Image
                    className={"p-2"}
                    style={{ height: "150px", width: "150px" }}
                    roundedCircle
                    src={props.flag}
                    alt="flag"
                  />
                </div>
              </Col>
            </Row>
            <div>
              <Row>
                <Col>
                  <h5>Cases</h5>
                  <h5 className="text-primary font-weight-bold">
                    {props.stats[0]}
                  </h5>
                </Col>
                <Col>
                  <h5>Deaths</h5>
                  <h5 className="text-danger font-weight-bold">
                    {props.stats[1]}
                  </h5>
                </Col>
                <Col>
                  <h5>Healthy</h5>
                  <h5 className="text-success font-weight-bold">
                    {props.stats[2]}
                  </h5>
                </Col>
              </Row>
            </div>
          </div>
          <MoreInfo country={props.country} />
        </Card>
        <hr />
      </Container>
    </div>
  );
}

export default Stats;
