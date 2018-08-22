import React from 'react'
import { Route } from 'react-router-dom'
import Sider from './Sider'
import Home from './Home'
import About from './About'
import Repos from './Repos'

const App = (props) => (
    <div className="App">
        <Sider />
        <main>
            <Route exact path="/" component={Home} />
            <Route path="/repos/:name" component={Repos} />
            <Route path="/about" component={About} />
        </main>
    </div>
)

export default App