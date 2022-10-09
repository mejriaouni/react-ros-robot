import React, { Component } from "react";
import Connection from "./Connection";
import Teleoperation from "./Teleoperation";
import { Row, Col, Container, Button } from "react-bootstrap";
import RobotState from "./RobotState";
import Map from "./Map";








class Home extends Component {
    state = { Counter: 0, }
    increment_counter() {
        //this.state.Counter = this.state.Counter + 1;
        this.setState({ Counter: this.state.Counter + 1 });
        console.log(this.state.Counter);
    }
    render() {
        return (
            <div>
                <Container>
                    <h1 className="text-center mt-3">Robot Control Page</h1>
                    <Row>
                        <Col>
                            <Connection />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Teleoperation />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <RobotState />

                        </Col>
                        <Col>
                            <h1>Map</h1>
                            <Map />
                        </Col>
                    </Row>
                </Container>

            </div>
        );
    }
}

export default Home;