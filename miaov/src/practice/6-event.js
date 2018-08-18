import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name:'slack'
        }
    }

    onClick = (ev) => {
        ev.preventDefault();
        console.log(ev.type)
        console.log(ev.target)
        
        let type = ev.type

        setTimeout(()=>{
            console.log(type)
        })
    }

    render(){
        return(
            <div>
                <button
                    onClick={this.onClick}
                >click</button>
                <br/>
                <a
                    onClick={this.onClick}
                    href="baidu.com"
                >Link</a>
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


// 事件
// 事件对象
//     这个事件对象是react合成的
//     在回调函数里面传入一个参数接收
//     在函数运行完的时候，会把对象回收
//
// 事件
//     驼峰写法：onClick, onChange
//     react 标准化过，已经不需要处理兼容性问题