import React from 'react'
import { Provider } from 'react-redux'
import AsyncApp from './AsyncApp'
import configStore from '../store/configStore'
import '../style/RedditApp.css'

const store = configStore()

export default class Root extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AsyncApp />
            </Provider>
        )
    }
}