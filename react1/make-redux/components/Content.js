import React, { Component } from "react";

import ThemeSwitch from './ThemeSwitch'

class Content extends Component {
  render (){
    return (
      <div>
      	<p>内容部分</p>
      	<ThemeSwitch />
      </div>
    );
  }
}

export default Content;