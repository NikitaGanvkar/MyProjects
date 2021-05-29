import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderLeader({ leader }) {
        return (
            <div key={leader.id} className="col-12 mt-5">
                <Media tag="li">
                    <Media left middle >
                        <Media object src={leader.image} alt={leader.name} />
                    </Media>
                    <Media body className="ml-5">
                        <Media heading>{leader.name}</Media>
                        <Media>{leader.designation}</Media><br />
                        <p>{leader.description}</p>
                    </Media>
                </Media>
            </div>
        );
}

function About(props) {
    const leaders = props.leaders.map((leader) => {
        return (
            <RenderLeader leader={ leader } />
        );
    });
    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>About Us</h3>
                    <hr />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12 col-md-6">
                    <h2>Our History</h2>
                    <p>Started in 2010, The Restaurant quickly established itself as a culinary icon par excellence in the city.</p>
                    <p>The restaurant traces its humble beginnings to <em>The Frying Pan</em>, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.</p>
                </div>
                <div className="col-12 col-md-5">
                    <Card>
                        <CardHeader className="bg-primary text-white">Facts At a Glance</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-6">Started</dt>
                                <dd className="col-6">3 Mar. 2011</dd>
                                <dt className="col-6">Major Stake Holder</dt>
                                <dd className="col-6">Foods Inc.</dd>
                                <dt className="col-6">Last Year's Turnover</dt>
                                <dd className="col-6">$3,345,666</dd>
                                <dt className="col-6">Employees</dt>
                                <dd className="col-6">50</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12">
                    <Card>
                        <CardBody className="bg-faded">
                            <blockquote className="blockquote">
                                <p className="mb-0">You better cut the pizza in four pieces because
                                    I'm not hungry enough to eat six.</p>
                                <footer className="blockquote-footer">W. Peter,
                                <cite title="Source Title">W. Peter,
                                    Famous Food Critic, Food Magazine, 2014</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h2>Corporate Leadership</h2>
                    {leaders}
                </div>
            </div>
        </div>
    );
}

export default About;    