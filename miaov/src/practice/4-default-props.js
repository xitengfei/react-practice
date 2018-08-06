import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name:'slack'
        }
    }

    // 给属性声明默认值
    // 只有prop是undefined的时候会使用默认值
    static defaultProps = {
        a:'Ha',
        b:'Hb',
        c:'Hc',
        d:'Hd',
    }

    render(){
        let {a,b,c,d} = this.props
        return(
            <div>
                <ul>
                    <li>{a}</li>
                    <li>{b}</li>
                    <li>{c}</li>
                    <li>{d}</li>
                </ul>
            </div>
        )
    }
}

ReactDOM.render(
    <div>
        <App
            a='1'
            b={true}
            c={undefined}
        ></App>
    </div>,
    document.getElementById('root')
);