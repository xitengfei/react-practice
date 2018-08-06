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
        console.log(this.props.children);
        return(
            <div>
                <div>AbCdEfG - {this.state.name}</div>
                <h2>Children:</h2>
                <div>{this.props.children}</div>
            </div>
        )
    }
}

ReactDOM.render(
    <div>
        <App>
            <a href="baidu.com">baidu</a>
        </App>
        <App>
            123456
        </App>
    </div>,
    document.getElementById('root')
);