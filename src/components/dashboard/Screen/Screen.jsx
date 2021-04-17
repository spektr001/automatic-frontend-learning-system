import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { SelectionScreen } from './SelectionScreen/SelectionScreen'


export default function ScreenRouteMap() {
    return (
        <Router>
            <Switch>
                <Route path="/" component={SelectionScreen} />
            </Switch>
        </Router>
    )
}