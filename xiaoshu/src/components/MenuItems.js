import React, { Component } from "react";
import { Route, Link } from 'react-router-dom'

class MenuItems extends Component {
	static defautlProps = {
		'menus':[]
	}

	generateMenu(menus){
		let vdom = []
		let index = 0
		for(let menu of menus){
			if(menu.submenu){
				vdom.push(
					<li key={index}>
						<Link to={menu.href}>{menu.text}</Link>
						<ul className="submenu">
							{this.generateMenu(menu.submenu)}
						</ul>
					</li>
				)
			}else{
				vdom.push(
					<li key={index}>
						<Link to={menu.href}>{menu.text}</Link>
					</li>
				)
			}
			index++
		}
		
		return vdom
	}

  	render (){
    	return (
   			<div>{this.generateMenu(this.props.menus)}</div>
   		)
    }
}

export default MenuItems;