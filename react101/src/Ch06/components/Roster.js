import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Player from './Player'
import FullRoster from './FullRoster'

const Roster = () => (
    <div className="roster">
        <h2>This is a roster page!</h2>
        <Switch>
            <Route exact path='/roster' component={FullRoster} />
            <Route path='/roster/:number' component={Player} />
        </Switch>
    </div>
)

export default Roster