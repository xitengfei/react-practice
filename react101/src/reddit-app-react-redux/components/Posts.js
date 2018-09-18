import React from 'react'
import PropTypes from 'prop-types'

const Posts = ({posts}) => {
    return (
        <ul>
            {posts.map((post, i) => (
                <li key={i}>
                    <h3>{post.title}</h3>
                    <div>
                        <p>{post.selftext}</p>
                    </div>
                </li>
            ))}
        </ul>
    )
}

Posts.propTypes = {
    posts: PropTypes.array.isRequired
}

export default Posts