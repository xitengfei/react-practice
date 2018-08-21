import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery'

class GithubUser extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            username:'Mark',
            avatarUrl:'',
            githubUrl:'',
        }
    }

    componentDidMount = () => {
        jQuery.get(this.props.source, (result) => {
            console.log(result)
            const data = result
            this.setState({
                username: data.name,
                avatarUrl: data.avatar_url,
                githubUrl: data.html_url,
            })
        })
    }

    render(){
        return(
            <div>
                <h3>{this.state.username}</h3>
                <img src={this.state.avatarUrl} />
                <br/>
                <a href={this.state.githubUrl}>Github Link</a>.
            </div>
        )
    }
}

const App = () => (
    <div className="App">
        <GithubUser source="https://api.github.com/users/torvalds" />
    </div>
)

ReactDOM.render(
    <div>
        <App></App>
    </div>,
    document.getElementById('root')
);