import { combineReducers } from 'redux-immutable'
import ui from './ui/uiReducers'
import github from './data/githubReducers'

export default combineReducers({
    ui,
    github,
})