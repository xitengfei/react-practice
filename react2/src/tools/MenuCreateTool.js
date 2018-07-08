import React, { Component } from "react";
import { Route, Link } from 'react-router-dom'
import { Menu, Icon } from 'antd';

const { SubMenu } = Menu;

class MenuCreateTool extends Component {
	static defautlProps = {
		'menus':[]
	}

	generateMenu(menus){
		let vdom = []
		let index = 0
		for(let menu of menus){
			if(menu.submenu){
				vdom.push(
					<SubMenu key={index} title={<span><Icon type="{menu.icon}" />{menu.text}</span>}>
						{this.generateMenu(menu.submenu)}
					</SubMenu>
				)
			}else{
				vdom.push(
					<Menu.Item key={index}>
						<Link to={menu.href}><Icon type={menu.icon} />{menu.text}</Link>
					</Menu.Item>
				)
			}
			index++
		}
		
		return vdom
	}

  	render (){
    	return (
    	<Menu {...this.props}>
        	{this.generateMenu(this.props.menus)}
        </Menu>
   		)
    }
}

export default MenuCreateTool;