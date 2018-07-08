import React, {Component} from 'react'
import { Route, Link } from 'react-router-dom'

class CustomerManage extends Component{
  render (){
  	console.log(this.props.match);
  	let match = this.props.match;
    return (
      <div>
        <h1>CustomerManage</h1>
		<Link to={`${match.url}/general`}>general</Link>
        <Link to={`${match.url}/vip`}>vip</Link>
      </div>
    );
  }
}

export default CustomerManage;