import React, {Component} from 'react'
import PropTypes from 'prop-types'

import wrapWithLoadData from './wrapWithLoadData'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

class CommentApp extends Component{
	static propTypes = {
		data:PropTypes.any,
		saveData:PropTypes.func.isRequired
	}

	constructor(props){
		super(props)
		this.state = {
			comments:props.data
		}
	}

	handleComment(comment){
		console.log(comment);
		if (!comment) return
	    if (!comment.username) return alert('请输入用户名')
	    if (!comment.content) return alert('请输入评论内容')
	    const comments = this.state.comments;
		comments.push(comment);
		this.setState({comments:comments});
		this.props.saveData(comments);
	}
	handleDeleteComment(index){
		const comments = this.state.comments;
		comments.splice(index, 1)
		this.setState({comments})
		this.props.saveData(comments)
	}
	render(){
		return(
			<div className="wrapper">
				<CommentInput onSubmit={this.handleComment.bind(this)} />
				<CommentList 
					comments={this.state.comments} 
					onDeleteComment={this.handleDeleteComment.bind(this)} />
			</div>
		)
	};
}

CommentApp = wrapWithLoadData(CommentApp, 'comments')
export default CommentApp