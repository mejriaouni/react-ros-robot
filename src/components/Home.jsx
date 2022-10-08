import React, { Component } from "react";
import Connection from "./Connection";
import Teleoperation from "./Teleoperation";
import { Row, Col, Container, Button } from "react-bootstrap";






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
                        <Col>
                        <h1>Map</h1>
                        <p>this region will be used later for displaying a map</p>
                        </Col>
                    </Row>
                </Container>

            </div>
        );
    }
}

export default Home;