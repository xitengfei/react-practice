import React, { Component } from 'react';
import menuItems from '../config/leftMenu';
import MenuCreateTool from '../tools/MenuCreateTool'

class MenuComponent extends Component {
  render() {
    return (
        <MenuCreateTool menus={menuItems} mode="inline" defaultSelectedKeys={['1']}/>
    );
  }
}

export default MenuComponent;
