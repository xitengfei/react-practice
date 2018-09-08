import { connect } from 'react-redux'
import ResultPage from './ResultPage'

import { getGithub } from '../actions/githubActions'

const mapStateToProps = (state, ownProps) => {
    return {
        data: state.getIn(['github', 'data']),
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onGetGithub: (userId) => {
            return dispatch(getGithub(userId))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultPage)