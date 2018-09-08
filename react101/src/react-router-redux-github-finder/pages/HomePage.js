import React from 'react'
import { Link } from 'react-router-dom'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class HomePage extends React.Component{
    constructor(props){
        super(props)

        this.onChangeUserId = this.onChangeUserId.bind(this)

        this.state = {
            githubUserId:''
        }
    }

    onChangeUserId(event){
        this.setState({
            githubUserId: event.target.value
        })
    }

    render(){
        return (
            <Card>
                <CardContent>
                    <TextField
                        style={{marginRight: '20px'}}
                        onChange={this.onChangeUserId}
                    />
                    <Link to={`/result/${this.state.githubUserId}`}>
                        <Button 
                            variant="outlined" 
                            color="primary"
                        >Submit</Button>
                    </Link>
                </CardContent>
            </Card>
        )
    }
}

export default HomePage