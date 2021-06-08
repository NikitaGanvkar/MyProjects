import React, { Component } from 'react';
import { Card, CardHeader, CardBody, CardText, CardTitle } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import axios from "axios";
import InputForm from './InputForm';
import EDA from './EDA';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            p_id: "",
            pclass: "",
            sex: "",
            age: "",
            sibsp: "",
            parch: "",
            fare: "",
            embarked: "",
            gotResults: false,
            results: [],
            activeTab: '1'
        };

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.toggle = this.toggle.bind(this)
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault()
        //setting input values according to model parameter requirements
        this.param = {
            p_id: this.state.p_id,
            pclass: this.state.pclass,
            sex_m: "0",
            sex_f: "0",
            age: this.state.age,
            sibsp: this.state.sibsp,
            parch: this.state.parch,
            fare: this.state.fare,
            embarked_s: "0",
            embarked_c: "0",
            embarked_q: "0"
        };
        if (this.state.sex === "F")
            this.param.sex_f = "1";
        else
            this.param.sex_m = "1";
        if (this.state.embarked === "S")
            this.param.embarked_s = "1";
        else if (this.state.embarked === "C")
            this.param.embarked_c = "1";
        else this.param.embarked_q = "1";

        //posting values for model prediction
        axios.post("http://localhost:3001/predictmodel", this.param).then(res => {
            //console.log("Posted: ", res.data);
            this.setState({ results: res.data });//retrieving model predicitions
            this.setState({ gotResults: true });
            //console.log(this.state.gotResults)
        })
            .catch(err => {
                if (err.response) { // client received an error response (5xx, 4xx)        
                    console.log("ERR_RESPONSE: ", err.response.data);
                } else if (err.request) {// client never received a response, or request never left  
                    console.log("ERR_REQUEST: ", err.request);
                } else { // anything else  
                    console.log("DEFAULT ERR ", err);
                }
            });
    }

    toggle = (tab) => {
        if (this.state.activeTab !== tab)
            this.setState({ activeTab: tab });
    }

    render() {

        const values = {
            p_id: this.state.p_id,
            pclass: this.state.pclass,
            sex: this.state.sex,
            age: this.state.age,
            sibsp: this.state.sibsp,
            parch: this.state.parch,
            fare: this.state.fare,
            embarked: this.state.embarked,
        }

        return (
            <div className="container">
                <Nav tabs>
                    <NavItem>
                        <NavLink href="#" className={classnames({ active: this.state.activeTab === '1' })}
                            onClick={() => { this.toggle('1'); }} >
                            EDA Visualizations
                 </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#" className={classnames({ active: this.state.activeTab === '2' })}
                            onClick={() => { this.toggle('2'); }}>
                            Model
                 </NavLink>
                    </NavItem>
                </Nav>
                <br />
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <EDA />
                    </TabPane>
                    <TabPane tabId="2">
                        <Row>
                            <Container>
                                <Row>
                                    <Col>
                                        <Card body outline color="secondary">
                                            <CardHeader tag="h3"><CardTitle>Enter Model Attributes</CardTitle></CardHeader>
                                            <CardBody>
                                                < InputForm class="form"
                                                    onInputChange={this.handleChange}
                                                    onFormSubmit={this.handleSubmit}
                                                    {...values} />
                                            </CardBody>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card body outline color="secondary">
                                            <CardHeader tag="h3"><CardTitle>Results</CardTitle></CardHeader>
                                            <CardBody>
                                                {this.state.gotResults ? (
                                                    <>
                                                        <Card>
                                                            <CardHeader><b>Model Results</b></CardHeader>
                                                            <CardBody>
                                                                <CardText>Predicted Value: {this.state.results["Predicted Value"]}</CardText>
                                                                <CardText>Actual Value: {this.state.results["Actual Value"]}</CardText>
                                                            </CardBody>
                                                        </Card>
                                                        <br />
                                                        <Card>
                                                            <CardHeader><b>Training Results</b></CardHeader>
                                                            <CardBody>
                                                                <CardText>Accuracy Score: {this.state.results["Training Accuracy Score"]}</CardText>
                                                                <CardText>F1 Score: {this.state.results["Training F1 Score"]}</CardText>
                                                                <CardText>ROC UC Score: {this.state.results["Training ROC AUC Score"]}</CardText>
                                                            </CardBody>
                                                        </Card>
                                                        <br />
                                                        <Card>
                                                            <CardHeader><b>Testing Results</b></CardHeader>
                                                            <CardBody>
                                                                <CardText>Accuracy Score: {this.state.results["Testing Accuracy Score"]}</CardText>
                                                                <CardText>F1 Score: {this.state.results["Testing F1 Score"]}</CardText>
                                                                <CardText>ROC UC Score: {this.state.results["Testing ROC AUC Score"]}</CardText>
                                                            </CardBody>
                                                        </Card>
                                                    </>
                                                ) : (
                                                    <></>
                                                )}
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Row>
                            </Container>
                        </Row>
                    </TabPane>
                </TabContent>
            </div>
        );
    }
}

export default Home;




