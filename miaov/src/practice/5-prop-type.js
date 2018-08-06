import React from 'react';
import ReactDOM from 'react-dom';
import PT from 'prop-types'

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name:'slack'
        }
    }
    render(){
        let {a,b,c,d} = this.props
        return(
            <div>
                <ul>
                    <li>a是字符串</li>
                    <li>b是数字</li>
                    <li>c是函数</li>
                </ul>
            </div>
        )
    }
}

App.propTypes = {
    
}

ReactDOM.render(
    <div>
        <App></App>
    </div>,
    document.getElementById('root')
);