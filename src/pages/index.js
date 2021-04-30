import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Me from './Me';
import Projects from './Projects';
import Contact from './Contact';


const Pages = ({ user }) => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Me user={user} />
                </Route>
                <Route path="/projects">
                    <Projects user={user} />
                </Route>
                <Route path="/contact">
                    <Contact user={user} />
                </Route>
            </Switch>
        </Router>
    );
};

export default Pages;