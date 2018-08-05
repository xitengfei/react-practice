import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Comment extends Component{
	static propTypes = {
		comment: PropTypes.object.isRequired,
		onDeleteComment: PropTypes.func,
		index: PropTypes.number
	}

	construct(){
		this.state = {
			timeString:''
		}
	}

	componentWillMount(){
		this._updateTimeString()
		this._timer = setInterval(
			this._updateTimeString.bind(this),
			5000
		);
	}
	componentWillUnmount(){
		clearInterval(this._timer)
	}

	_updateTimeString(){
		let comment = this.props.comment;
		comment.createdTime = comment.createdTime && !isNaN(comment.createdTime)?comment.createdTime : 0;
		const duration = Math.round((+Date.now() - comment.createdTime)/1000);
		let timeString;
		if(duration > 3600 * 24 * 30 * 3){
			timeString = '大于3个月以前';
		}else if(duration > 3600 * 24 * 30){
			timeString = Math.round(duration/3600/24/30)+' 个月前';
		}else if(duration > 3600 * 24){
			timeString = Math.round(duration/3600/24)+' 天前';
		}else if(duration > 3600){
			timeString = Math.round(duration/3600)+' 小时前';
		}else if(duration > 60){
			timeString = Math.round(duration/60)+' 分钟前';
		}else{
			timeString = Math.max(duration, 1)+' 秒前'
		}
		this.setState({timeString:timeString});
	}

	handleDelete(){
		if(this.props.onDeleteComment){
			this.props.onDeleteComment(this.props.index)
		}
	}

	render(){
		return(
			<div className="comment">
				<div className="comment-username">
					<span>{this.props.comment.username}</span>
				</div>
				<p>{this.props.comment.content}</p>
				<span className="comment-createdtime">
					{this.state.timeString}
				</span>
				<span className='comment-delete' onClick={this.handleDelete.bind(this)}>
          			删除
        		</span>
			</div>
		)
	}
}

export default Comment