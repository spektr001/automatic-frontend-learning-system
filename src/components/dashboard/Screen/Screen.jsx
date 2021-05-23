import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { SelectionScreen } from './SelectionScreen/SelectionScreen'
import { BeginingScreen } from './BeginingScreen/BeginingScreen'
import { LessonOne } from './HTMLessons/LessonOne'
import { LessonTwo } from './HTMLessons/LessonTwo'
import { LessonThree } from './HTMLessons/LessonThree'
import { LessonFour } from './HTMLessons/LessonFour'

export default function ScreenRouteMap() {

    return (
        <>
            <Router>
                <Switch>
                    <Route path="/dashboard/HTML/lesson4" component={LessonFour} />
                    <Route path="/dashboard/HTML/lesson3" component={LessonThree} />
                    <Route path="/dashboard/HTML/lesson2" component={LessonTwo} />
                    <Route path="/dashboard/HTML/lesson1" component={LessonOne} />
                    <Route path="/dashboard/begining" component={BeginingScreen} />
                    <Route path="/" component={SelectionScreen} />
                </Switch>
            </Router>
        </>
    )
}