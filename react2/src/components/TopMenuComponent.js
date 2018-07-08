import React, { Component } from 'react'
import menuItems from '../config/topMenu'
import MenuCreateTool from '../tools/MenuCreateTool'

class TopMenuComponent extends Component {
  render() {
    return (
        <MenuCreateTool menus={menuItems} theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}/>
    );
  }
}

export default TopMenuComponent
