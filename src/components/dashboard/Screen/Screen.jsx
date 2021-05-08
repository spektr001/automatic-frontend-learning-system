import React, { useState } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { SelectionScreen } from './SelectionScreen/SelectionScreen'
import { BeginingScreen } from './BeginingScreen/BeginingScreen'
import { LessonOne } from './HTMLessons/LessonOne'
import { CircularProgress } from '@material-ui/core'

export default function ScreenRouteMap() {

   /*  const [loading, setLoading] = useState(false)

    const updateState = (newValue) => { setLoading(newValue) }

    if (loading) {
        return <CircularProgress /> } */


    return (
        <>
        <Router>
            <Switch>
                <Route path="/dashboard/HTML/lesson1" component={LessonOne} />  
                <Route path="/dashboard/begining" component={BeginingScreen} />
                <Route path="/" component={SelectionScreen} />
            </Switch>
        </Router>
        </>
    )
}