import React, { Component } from 'react';
import axios from "axios";
import { Card, Button, CardHeader, CardBody } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import Histogram from "./Histogram";
import ScatterHist from "./ScatterHist";
import ScatterPlot from "./ScatterPlot";
class EDA extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: [],
            dataLoaded: false
        }
    }

    componentDidMount() {
        axios.get("http://localhost:3001/getdata").then(res => {
            this.setState({ arr: res.data });
            this.setState({ dataLoaded: true });
            console.log("componentDidMount, EDA, MAIN:", this.state.arr);
        }
        );
    }

    render() {
        return (
            <div className="container">
                {this.state.dataLoaded ? (
                    <>
                        <Card body outline color="seconadary">
                            <CardHeader><b>Histograms</b></CardHeader>
                            <CardBody>
                                <Container>
                                    <Row>
                                        <Col> <Histogram data={this.state.arr.Survived} colname="Survived" /> </Col>
                                        <Col> <Histogram data={this.state.arr.Pclass} colname="Pclass" />    </Col>
                                        <Col> <Histogram data={this.state.arr.Age} colname="Age" />  </Col>
                                    </Row>
                                    <Row>
                                        <Col> <Histogram data={this.state.arr.SibSp} colname="SibSp" /> </Col>
                                        <Col><Histogram data={this.state.arr.Parch} colname="Parch" />  </Col>
                                        <Col> <Histogram data={this.state.arr.Fare} colname="Fare" />  </Col>
                                    </Row>
                                </Container>
                            </CardBody>
                        </Card>
                        <br />
                        <Card body outline color="seconadary">
                            <CardHeader><b>Scatter Matrix</b></CardHeader>
                            <CardBody>
                                <Container>
                                    <Row>
                                        <Col> <ScatterHist data={this.state.arr.Survived} colname="Survived" /> </Col>
                                        <Col> <ScatterPlot x={this.state.arr.Pclass} xlabel="Pclass" y={this.state.arr.Survived} ylabel="Survived" /> </Col>
                                        <Col> <ScatterPlot x={this.state.arr.Pclass} xlabel="Age" y={this.state.arr.Survived} ylabel="Survived" /> </Col>
                                        <Col> <ScatterPlot x={this.state.arr.Pclass} xlabel="SibSp" y={this.state.arr.Survived} ylabel="Survived" /> </Col>
                                        <Col> <ScatterPlot x={this.state.arr.Pclass} xlabel="Parch" y={this.state.arr.Survived} ylabel="Survived" /> </Col>
                                        <Col> <ScatterPlot x={this.state.arr.Pclass} xlabel="Fare" y={this.state.arr.Survived} ylabel="Survived" /> </Col>
                                    </Row>
                                    <Row>
                                        <Col> <ScatterPlot x={this.state.arr.Pclass} xlabel="Survived" y={this.state.arr.Pclass} ylabel="Pclass" /> </Col>
                                        <Col> <ScatterHist data={this.state.arr.Pclass} colname="Pclass" /> </Col>
                                        <Col> <ScatterPlot x={this.state.arr.Pclass} xlabel="Age" y={this.state.arr.Pclass} ylabel="Pclass" /> </Col>
                                        <Col> <ScatterPlot x={this.state.arr.Pclass} xlabel="SibSp" y={this.state.arr.Pclass} ylabel="Pclass" /> </Col>
                                        <Col> <ScatterPlot x={this.state.arr.Pclass} xlabel="Parch" y={this.state.arr.Pclass} ylabel="Pclass" /> </Col>
                                        <Col> <ScatterPlot x={this.state.arr.Pclass} xlabel="Fare" y={this.state.arr.Pclass} ylabel="Pclass" /> </Col>
                                    </Row>
                                    <Row>
                                        <Col> <ScatterPlot x={this.state.arr.Pclass} xlabel="Survived" y={this.state.arr.Pclass} ylabel="Age" /> </Col>
                                        <Col> <ScatterPlot x={this.state.arr.Pclass} xlabel="Pclass" y={this.state.arr.Pclass} ylabel="Age" /> </Col>
                                        <Col> <ScatterHist data={this.state.arr.Age} colname="Age" />  </Col>
                                        <Col> <ScatterPlot x={this.state.arr.Pclass} xlabel="SibSp" y={this.state.arr.Pclass} ylabel="Age" /> </Col>
                                        <Col> <ScatterPlot x={this.state.arr.Pclass} xlabel="Parch" y={this.state.arr.Pclass} ylabel="Age" /> </Col>
                                        <Col> <ScatterPlot x={this.state.arr.Pclass} xlabel="Fare" y={this.state.arr.Pclass} ylabel="Age" /> </Col>
                                    </Row>
                                    <Row>
                                        <Col> <ScatterPlot x={this.state.arr.Pclass} xlabel="Survived" y={this.state.arr.Pclass} ylabel="SibSp" /> </Col>
                                        <Col> <ScatterPlot x={this.state.arr.Pclass} xlabel="Pclass" y={this.state.arr.Pclass} ylabel="SibSp" /> </Col>
                                        <Col> <ScatterPlot x={this.state.arr.Pclass} xlabel="Age" y={this.state.arr.Pclass} ylabel="SibSp" /> </Col>
                                        <Col> <ScatterHist data={this.state.arr.Survived} colname="SibSp" /> </Col>
                                        <Col> <ScatterPlot x={this.state.arr.Pclass} xlabel="Parch" y={this.state.arr.Pclass} ylabel="SibSp" /> </Col>
                                        <Col> <ScatterPlot x={this.state.arr.Pclass} xlabel="Fare" y={this.state.arr.Pclass} ylabel="SibSp" /> </Col>
                                    </Row>
                                    <Row>
                                        <Col> <ScatterPlot x={this.state.arr.Pclass} xlabel="Survived" y={this.state.arr.Pclass} ylabel="Parch" /> </Col>
                                        <Col> <ScatterPlot x={this.state.arr.Pclass} xlabel="Pclass" y={this.state.arr.Pclass} ylabel="Parch" /> </Col>
                                        <Col> <ScatterPlot x={this.state.arr.Pclass} xlabel="Age" y={this.state.arr.Pclass} ylabel="Parch" /> </Col>
                                        <Col> <ScatterPlot x={this.state.arr.Pclass} xlabel="SibSp" y={this.state.arr.Pclass} ylabel="Parch" /> </Col>
                                        <Col> <ScatterHist data={this.state.arr.Pclass} colname="Parch" />    </Col>
                                        <Col> <ScatterPlot x={this.state.arr.Pclass} xlabel="Fare" y={this.state.arr.Pclass} ylabel="Parch" /> </Col>
                                    </Row>
                                    <Row>
                                        <Col> <ScatterPlot x={this.state.arr.Pclass} xlabel="Survived" y={this.state.arr.Pclass} ylabel="Fare" /> </Col>
                                        <Col> <ScatterPlot x={this.state.arr.Pclass} xlabel="Pclass" y={this.state.arr.Pclass} ylabel="Fare" /> </Col>
                                        <Col> <ScatterPlot x={this.state.arr.Pclass} xlabel="Age" y={this.state.arr.Pclass} ylabel="Fare" /> </Col>
                                        <Col> <ScatterPlot x={this.state.arr.Pclass} xlabel="SibSp" y={this.state.arr.Pclass} ylabel="Fare" /> </Col>
                                        <Col> <ScatterPlot x={this.state.arr.Pclass} xlabel="Parch" y={this.state.arr.Pclass} ylabel="Fare" /> </Col>
                                        <Col> <ScatterHist data={this.state.arr.Age} colname="Fare" />  </Col>
                                    </Row>
                                </Container>
                            </CardBody>
                        </Card>
                    </>
                ) : (
                    <></>
                )}
            </div>
        );
    }
}
export default EDA;




