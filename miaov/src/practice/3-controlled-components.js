import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    constructor(props){
        super(props)
        
        this.state = {
            name:'slack'
        }

        this.onInputChange = this.onInputChange.bind(this)
    }

    onInputChange(ev){
        // let {inputVal} = this.state
        let v = ev.target.value.split('').filter(str=>str === '7').join("")

        console.log(v)

        this.setState({
            inputVal: v
        })
    }

    render(){

        let {inputVal} = this.state;

        return(
            <div>
                AbC
                <br />
                <input 
                    type="text"
                    value={inputVal}
                    onChange={this.onInputChange}
                />
            </div>
        )
    }
}

ReactDOM.render(
    <div>
        <App></App>
    </div>,
    document.getElementById('root')
);

// 组件受控和不受控
// 受控：
//     组件的状态受react控制，（大多时候接受state和props的控制）
// 不受控:
//     某些组件例如input，状态的变化可能是组件本身具有的功能
//     让这类组件受控很简单，给一个value的属性就可以了，这个时候react就接管了这个组件