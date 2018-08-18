import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name:'slack'
        }
    }
    render(){

        return(
            <div>AbCdEfG - {this.state.name}</div>
        )
    }
}

ReactDOM.render(
    <div>
        <App></App>
    </div>,
    document.getElementById('root')
);