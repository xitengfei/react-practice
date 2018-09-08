import { connect } from 'react-redux'
import HomePage from './HomePage'

// import {
//     getGithub
// } from '../actions'


const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        // onSubmitUserId: (userId) => () => (
        //     dispatch(getGithub(userId))
        // ),
    }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    const { userId } = ownProps
    const { onSubmitUserId } = dispatchProps
    return Object.assign({}, stateProps, dispatchProps, ownProps, {
        onSubmitUserId: onSubmitUserId(userId)
    })
}

const HomePageContainer = connect(mapStateToProps, mapDispatchToProps)(HomePage)

export default HomePageContainer