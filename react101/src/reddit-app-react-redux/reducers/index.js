import { combineReducers } from 'redux'
import {
    REQUEST_POSTS,
    RECEIVE_POSTS,
    SELECT_SUBREDDIT,
    INVALIDATE_SUBREDDIT
} from '../actions'

let selectedSubreddit = (state = 'frontend', action) => {
    switch ( action.type ) {
        case SELECT_SUBREDDIT:
            return action.subreddit 
        default:
            return state
    }
}

let posts = (state = { items: [] }, action) => {
    switch(action.type){
        case RECEIVE_POSTS:
            return Object.assign({}, state, {
                items: action.posts
            })
        default:
            return state
    }
}

let postsBySubreddit = (state = {}, action) => {
    switch( action.type ){
        case REQUEST_POSTS:
        case RECEIVE_POSTS:
        case INVALIDATE_SUBREDDIT:
            return Object.assign({}, state, {[action.subreddit]: posts(state[action.subreddit], action)})
        default:
            return state
    }
}

let topics = (state = ['frontend', 'mysql', 'vuejs'], action) => {
    return state
}

const rootReducer = combineReducers({
    selectedSubreddit,
    postsBySubreddit,
    topics
})

export default rootReducer