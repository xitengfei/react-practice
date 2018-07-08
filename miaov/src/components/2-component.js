import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    render(){
        console.log(this.props);
        let {firstName, lastName, fn} = this.props;
        let t = fn();

        return(
            <div>
                <p>My Name is {`${firstName}, ${lastName}`}</p>
                <p>{`${t}`}</p>
                <p>Magic Number: { Math.random() }</p>
                <button>Change Magic Number</button>
            </div>
        )
    }
}

ReactDOM.render(
    <div>
        <button>Click Me</button>
        {/* 组件标签开头大写 */}
        {/* 组件标签里定义的属性叫做props */}
        <App
            firstName="Fronk"
            lastName="Holy"
            fn={()=>{ return new Date(); }}
        />
    </div>,
    document.getElementById('root')
);