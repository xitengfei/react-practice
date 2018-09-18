import React from 'react'
import { connect } from 'react-redux'

import PropTypes from 'prop-types'
import {selectSubreddit, invalidateSubreddit, fetchPostsIfNeeded} from '../actions'

import Picker from '../components/Picker'
import Posts from '../components/Posts'


class AsyncApp extends React.Component {
    constructor(props){
        super(props)

        this.handleChange = this.handleChange.bind(this)
        this.handleRefreshClick = this.handleRefreshClick.bind(this)
    }

    handleChange(subreddit){
        this.props.dispatch(selectSubreddit(subreddit))
    }

    handleRefreshClick(e){
        e.preventDefault()

        const {dispatch, selectedSubreddit} = this.props
        dispatch(invalidateSubreddit(selectedSubreddit))
        dispatch(fetchPostsIfNeeded(selectedSubreddit))
    }

    componentDidMount(){
        const { dispatch, selectedSubreddit } = this.props
        dispatch(fetchPostsIfNeeded(selectedSubreddit))
    }

    componentWillReceiveProps(nextProps){
        if ( nextProps.selectedSubreddit !== this.props.selectedSubreddit ) {
            const { dispatch, selectedSubreddit } = nextProps
            dispatch(fetchPostsIfNeeded(selectedSubreddit))
        }
    }

    render() {
        const {selectedSubreddit, posts, isFetching, lastUpdated, topics} = this.props
        return (
            <div>
                <Picker
                    value={selectedSubreddit}
                    options={topics}
                    onChange={this.handleChange}
                />
                <p>
                    { lastUpdated && (
                        <span>Last updated at {new Date(lastUpdated).toLocaleString()}.</span>
                    )} 
                    &nbsp;&nbsp;&nbsp;
                    { !isFetching && 
                        <a 
                            href="#"
                            onClick={this.handleRefreshClick}
                        >Refresh</a> 
                    }
                </p>
                
                {isFetching && <h2>Loading...</h2>}
                
                {!isFetching && posts.length === 0 &&
                    <h2>Empty</h2>
                }
                <div>
                    <Posts posts={posts} />
                </div>
            </div>
        )
    }
}

AsyncApp.propTypes = {
    selectedSubreddit: PropTypes.string.isRequired,
    posts: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number,
    dispatch: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    const { selectedSubreddit, postsBySubreddit, topics} = state
    const { items: posts, isFetching, lastUpdated } = postsBySubreddit[selectedSubreddit] || { items: [], isFetching:true }
    return {
        selectedSubreddit,
        posts,
        isFetching,
        lastUpdated,
        topics
    }
}

export default connect( mapStateToProps )(AsyncApp)