import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePageContainer from './pages/HomePageContainer'
import ResultPageContainer from './pages/ResultPageContainer'

// Meterial UI
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Main = (props) => (
    <div className="App">
        <AppBar position="static" color="primary">
            <Toolbar>
                <Typography variant="title" color="inherit">Github Finder</Typography>
            </Toolbar>
        </AppBar>
        <main style={{marginTop: '20px'}} >
            <Switch>
                <Route exact path='/' component={HomePageContainer}/>
                <Route path='/result/:userId' component={ResultPageContainer}/>
            </Switch>
        </main>            
    </div>
)

export default Main