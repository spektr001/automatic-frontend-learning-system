import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { Dashboard } from './dashboard/Dashboard'
import { IntroducePage } from './introducePage/IntroducePage'

export default function RouteMap() {
    return (
        <Router>
            <Switch>
                <Route path={localStorage.name !== "" ? "/" : "/dashboard"} component={Dashboard} />
                <Route path="/" component={IntroducePage} />
            </Switch>
        </Router>
    )
}