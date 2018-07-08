import React, { Component } from "react";

class Header extends Component {
    static contextTypes = {
        store: PropTypes.object
    }
    render (){
        return (
            <header>
                <h1 style={{ color: this.state.themeColor }>华夏在线管理系统</h1>
            </header>
        );
    }
}

export default Header;