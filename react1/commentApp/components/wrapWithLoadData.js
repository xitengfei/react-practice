import React, {Component} from 'react'

export default (WrappedComponent, name) => {
	class LocalStorageActions extends Component{
		constructor(){
			super()
			this.state = {data:null}
		}

		saveData(value){
			try{
				localStorage.setItem(name, JSON.stringify(value));
			}catch(err){
				console.error('can not convert to json string!');
				localStorage.setItem(name, value);
			}
		}

		componentWillMount(){
			this._loadData(name);
		}

		_loadData(key){
			let data = localStorage.getItem(key);
			try{
				this.setState({data: JSON.parse(data)})
			}catch(err){
				console.error('get bad json string!');
				this.setState({data: data})
			}
		}

		render(){
			return <WrappedComponent
				data={this.state.data} 
				saveData={this.saveData.bind(this)}
				{...this.props}
				/>
		}
	}
	return LocalStorageActions
}