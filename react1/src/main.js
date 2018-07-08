import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, HashRouter, Route, Link } from 'react-router-dom'

import MenusData from './config/MenusData'
import Header from './components/Header'
import Menu from './components/Menu'

import DashBorad from './pages/DashBorad'
import CustomerManage from './pages/CustomerManage'
import Customer from './pages/Customer'

class Layout extends Component{
	constructor(){
		super()
		this.state = {
			'menusData': MenusData
		}
	}

	render(){
		return(
			<div className="content-wrap">
				<Header />
				<div className="main">
					<div className="leftMenu">
						<Menu menusData={this.state.menusData} />
					</div>
					<div className="rightContent">
						{this.props.children}
					</div>
				</div>
			</div>
		)
	}
}


ReactDOM.render((
  <HashRouter>
  	<Layout>
  		<Route exact path="/" component={DashBorad} />
   		<Route exact path="/cutomer-manage" component={CustomerManage}/>
   		<Route path="/cutomer-manage/:type" component={Customer}/>
   	</Layout>
  </HashRouter>
), document.getElementById('root'))