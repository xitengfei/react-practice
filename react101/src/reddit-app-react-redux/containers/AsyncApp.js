import React from 'react'
import { connect } from 'react-redux'

// import PropTypes from 'prop-types'
import {selectSubreddit, invalidateSubreddit, fetchPostsIfNeeded} from '../actions'

import Picker from '../components/Picker'
import Posts from '../components/Posts'


class AsyncApp extends React.Component {
    constructor(props){
        super(props)

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(subreddit){
        this.props.dispatch(selectSubreddit(subreddit))
    }

    componentDidMount() {
        // this.fetchPosts()
        const { dispatch, selectedSubreddit } = this.props
        dispatch(fetchPostsIfNeeded(selectedSubreddit))
    }

    render() {
        const {selectedSubreddit, posts, topics} = this.props
        return (
            <div>
                <Picker
                    value={selectedSubreddit}
                    options={topics}
                    onChange={this.handleChange}
                />
                <p>
                    <span>Last updated at xxx</span>.{' '}
                    <a href="#">Refresh</a>
                </p>
                <h2>Loading...</h2>
                <h2>Empty</h2>
                <div>
                    <Posts posts={posts} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { selectedSubreddit, postsBySubreddit, topics} = state
    const {
        items: posts
    } = postsBySubreddit[selectedSubreddit] || {
        items: []
    }
    return {
        selectedSubreddit,
        posts,
        topics
    }
}


export default connect( mapStateToProps )(AsyncApp)