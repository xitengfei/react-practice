import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component{

    //构造函数， react 会把props当作参数传过来
    constructor(props){
        // 因为这个类继承了Component类，所以要先调用一下 super
        // 把 props 传进去， 否则下面的this.props就是undefined
        super(props)

        // console.log(this.props)

        this.state = {
            magic: Math.random()
        }

        this.magicNumChange = this.magicNumChange.bind(this)
    }

    magicNumChange(){

        // 更改 state
        // 调用这个接口后，state会更新，render会执行
        this.setState({
            magic: Math.random()
        })
    }

    render(){

        let {firstName, lastName} = this.props;
        let {magic} = this.state;

        return(
            <div>
                <p>My Name is {firstName}, {lastName}</p>
                <p>Magic Number: { magic + 1 }</p>
                <button
                    onClick={this.magicNumChange}
                >Change Magic Number</button>
            </div>
        )
    }
}

class Sun extends Component{
    render(){
        return(
            <div>Bye (╯▽╰ )好香~~</div>
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
        <App
            firstName="Brlan"
            lastName="Holy"
        />
        <Sun />
    </div>,
    document.getElementById('root')
);

// react 的工作方式
// 1. 先得到virtualDOM, 接着把virtualDOM插入到界面
// 2. 如果要更新视图, 使用setState, 会更新组件的状态，
// render方法再次执行，会得到一份新的virtualDOM

// 更新之后， 会得到一份新的virtualDOM(整个应用的virtualDOM),
// 接下来，react 会比较两份新的virtualDOM, 找到变化的部分，重新渲染相应的部分
