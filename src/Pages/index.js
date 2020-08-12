import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Awards from './Awards';
import Me from './Me';
import Projects from './Projects';
import Work from './Work';
import Education from './Education';
import Volunteer from './Volunteer';

const Pages = ({user}) => {
    return(
        <Router>
            <Switch>
                <Route exact path="/">
                    <Me user={user} />
                </Route>
                <Route path="/projects">
                    <Projects user={user} />
                </Route>
                <Route path="/work">
                    <Work user={user} />
                </Route>
                <Route path="/education">
                    <Education user={user} />
                </Route>
                <Route path="/volunteer">
                    <Volunteer user={user} />
                </Route>
                <Route path="/awards">
                    <Awards user={user} />
                </Route>
            </Switch>
        </Router>
    );
};

export default Pages;
