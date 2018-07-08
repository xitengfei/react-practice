import React, { Component } from 'react';
import '../css/Game.css'

class Square extends Component {
	constructor(props){
		super(props);
		this.state = {
			value: null,
		}
	}
	render() {
		return (
			<button className="square" onClick={()=> this.setState({value:'X'})} >
			{this.state.value}
			</button>
		);
	}
}

class Board extends Component{
	constructor(props){
		super(props);
		this.state = {
			squares: Array(9).fill(null),
		};
	}

	renderSquare(i) {
		return <Square value={i} />;
	}

	render() {
		const status = "Next Player: X";
		return (
			<div>
				<div className="status">{status}</div>
				<div className="board-row">
					{this.renderSquare(0)}
					{this.renderSquare(1)}
					{this.renderSquare(2)}
				</div>
				<div className="board-row">
					{this.renderSquare(3)}
					{this.renderSquare(4)}
					{this.renderSquare(5)}
				</div>
				<div className="board-row">
					{this.renderSquare(6)}
					{this.renderSquare(7)}
					{this.renderSquare(8)}
				</div>
			</div>
		);
	}
}

class Game extends Component{
	render() {
		return (
			<div className="game">
				<div className="game-board">
					<Board />
				</div>
				<div className="game-info">
					<div>{/*status*/}</div>
					<ol>{/*TO DO*/}</ol>
				</div>
			</div>
		);
	}
}

export default Game;