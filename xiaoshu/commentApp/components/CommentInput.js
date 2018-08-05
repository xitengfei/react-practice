import React, {Component} from 'react'
import PropTypes from 'prop-types'

import wrapWithLoadData from './wrapWithLoadData'

class CommentInput extends Component{
	static propTypes = {
		onSubmit:PropTypes.func,
		data:PropTypes.any,
		saveData:PropTypes.func.isRequired
	}

	constructor(props){
		super(props)
		this.state = {
			username: props.data ? props.data : '',
			content:''
		}
	}
	componentDidMount(){
		this.textarea.focus()
	}

	handleUserNameChange(event){
		this.setState({
			username:event.target.value
		})
	}
	handleUserNameBlur(event){
		this.props.saveData(event.target.value)
	}
	handleContentChange(event){
		this.setState({
			content:event.target.value
		})
	}
	handleSubmit(event){
		if(this.props.onSubmit){
			this.props.onSubmit({
				username:this.state.username,
				content:this.state.content,
				createdTime: +new Date() //use "+" so it return a number
			})
		}
		this.setState({content:''})
	}

	render(){
		return(
			<div className="comment-input">
				<div className="comment-field">
					<span className="comment-field-name">用户名：</span>
					<div className="comment-field-input">
						<input 
							value={this.state.username} 
							onBlur={this.handleUserNameBlur.bind(this)} 
							onChange={this.handleUserNameChange.bind(this)} />
					</div>
				</div>
				<div className="comment-field">
					<span className="comment-field-name">评论内容：</span>
					<div className="comment-field-input">
						<textarea 
							value={this.state.content} 
							ref={(textarea)=> this.textarea = textarea} 
							onChange={this.handleContentChange.bind(this)} />
					</div>
				</div>
				<div className="comment-field-button">
					<button onClick={this.handleSubmit.bind(this)}>发布</button>
				</div>
			</div>
		)
	}
}

CommentInput = wrapWithLoadData(CommentInput)
export default CommentInput