import React, { Component } from "react"

import MenuItems from "./MenuItems"

class Menu extends Component {
  constructor(props){
    super(props)
    this.state = {
      'menus': props.menusData?props.menusData:[]
    }
  }

  render (){
    return (
      <div className="left-menu">
        <MenuItems menus={this.state.menus} />
      </div>
    );
  }
}

export default Menu;