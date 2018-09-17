import React from 'react'
import fetch from 'cross-fetch'

// import PropTypes from 'prop-types'
import Picker from '../components/Picker'
import Posts from '../components/Posts'


export default class AsyncApp extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            subreddit:'frontend',
            posts: [],
        }

        this.onSelectSubreddit = this.onSelectSubreddit.bind(this)
    }

    onSelectSubreddit(subreddit){
        this.setState({
            subreddit: subreddit,
            posts: [],
        })
        this.fetchPosts(subreddit)
    }

    fetchPosts(subreddit){
        let self = this
        fetch('https://www.reddit.com/r/frontend.json').then((response)=>{
            if( 200 !== response.status || !response.ok ){
                console.log(response)
            }
            return response.json()
        }).then(json => {
            console.log(json)
            let posts = json.data.children.map(child => child.data)
            let newState = Object.assign({},this.state,{
                posts: posts
            })
            self.setState(newState)
        })
    }

    componentDidMount() {
        this.fetchPosts()
    }

    render() {
        return (
            <div>
                <Picker
                    value={this.state.subreddit}
                    options={['frontend', 'reactjs']}
                    onChange={this.onSelectSubreddit}
                />
                <p>
                    <span>Last updated at xxx</span>.{' '}
                    <a href="#">Refresh</a>
                </p>
                <h2>Loading...</h2>
                <h2>Empty</h2>
                <div>
                    <Posts posts={this.state.posts} />
                </div>
            </div>
        )
    }
}