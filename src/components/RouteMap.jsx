import React from 'react'
import { Redirect } from 'react-router-dom'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { Dashboard } from './dashboard/Dashboard'
import { IntroducePage } from './introducePage/IntroducePage'

export default function RouteMap() {
    return (
        <Router>
            <Switch>
                <Route path="/dashboard" component={Dashboard} />
                <Route 
                path="/" 
                exact
                render={() => {
                    if (localStorage.name != "" && localStorage.name != undefined) {
                      return <Redirect to="/dashboard" />;
                    }
            
                    return <IntroducePage />;
                  }} 
                />
            </Switch>
        </Router>
    )
}