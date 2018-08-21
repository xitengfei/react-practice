import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from 'antd/lib/button';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button type="primary">Button</Button>
      </div>
    );
  }
}

export default App;


ReactDOM.render(<App />, document.getElementById('root'));