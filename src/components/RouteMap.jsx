import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { introducePage } from './introducePage/introducePage'


export default function RouteMap() {
    return (
        <Router>
            <Switch>
                {/* <Route path="/dashboard" component={Dashboard} /> */}
                <Route path="/" component={introducePage} />
            </Switch>
        </Router>
    )
}