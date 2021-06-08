import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import EDA from './EDA';

class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                <div>
                    <Switch>
                        <Route exact path="/"> <Home /> </Route>
                        <Route exact path="/eda"> <EDA /> </Route>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default Main;