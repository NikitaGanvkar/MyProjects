import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
class InputForm extends Component {
    constructor(props) {
        super(props)

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.props.onInputChange(e)
    }

    handleSubmit(e) {
        this.props.onFormSubmit(e)
        e.preventDefault()
    }

    defaultIfEmpty = value => {
        return value === "" ? "" : value;
    };
    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Container>
                    <FormGroup >
                        <Label for="exampleEmail"><b>Passenger ID: </b></Label>
                        <Input type="number" name="p_id" id="p_id" placeholder="optimal range: 1-900"
                            onChange={this.handleChange} value={this.defaultIfEmpty(this.props.p_id)} />
                    </FormGroup>
                    <br />
                    <Row>
                        <Col>
                            <FormGroup tag="fieldset">
                                <Label><b>Passenger Class:</b> </Label>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="pclass" value="1"
                                            onChange={this.handleChange} />{' '} First Class
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="pclass" value="2"
                                            onChange={this.handleChange} />{' '} Second Class
                                     </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="pclass" value="3"
                                            onChange={this.handleChange} />{' '}  Third Class
                                    </Label>
                                </FormGroup>
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup tag="fieldset">
                                <Label><b>Embarked At:</b> </Label>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="embarked" value="S"
                                            onChange={this.handleChange} />{' '} Southhampton
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="embarked" value="C"
                                            onChange={this.handleChange} />{' '} Cherbourg
                                 </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="embarked" value="Q"
                                            onChange={this.handleChange} />{' '} Queenstown
                                 </Label>
                                </FormGroup>
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup tag="fieldset">
                                <Label><b>Sex:</b> </Label>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="sex" value="M"
                                            onChange={this.handleChange} />{' '} Male
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="sex" value="F"
                                            onChange={this.handleChange} />{' '} Female
                                    </Label>
                                </FormGroup>
                            </FormGroup></Col>
                    </Row>
                    <br />
                    <FormGroup>
                        <Label for="age"><b>Age:</b>  </Label>
                        <Input type="number" name="age" id="age" placeholder="optimal range: 1-90"
                            onChange={this.handleChange} value={this.defaultIfEmpty(this.props.age)} />
                    </FormGroup>
                    <br />
                    <Row>
                        <Col>
                            <FormGroup>
                                <Label for="sibsp"><b>No. of Siblings/Spouses Onboard:</b> </Label>
                                <Input type="number" name="sibsp" id="sibsp" placeholder="optimal range:  1-10"
                                    onChange={this.handleChange} value={this.defaultIfEmpty(this.props.sibsp)} />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="parch"><b>No. of Parents/Children Onboard:</b> </Label>
                                <Input type="number" name="parch" id="parch" placeholder="optimal range:  1-10"
                                    onChange={this.handleChange} value={this.defaultIfEmpty(this.props.parch)} />
                            </FormGroup>
                        </Col>
                    </Row>
                    <br />
                    <FormGroup>
                        <Label for="fare"><b>Fare:</b> </Label>
                        <Input type="number" name="fare" id="fare" placeholder="optimal range:  0-550"
                            onChange={this.handleChange} value={this.defaultIfEmpty(this.props.fare)} />
                    </FormGroup>
                    <br />
                    <Button>Submit</Button>
                </Container>
            </Form>
        );
    }
}

export default InputForm;