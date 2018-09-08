import React from 'react'
import {Link} from 'react-router-dom'

// Meterial UI
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
      maxWidth: 800,
      margin: "0 auto",
    },
    media: {
        height: 140,
        width: 200,
        margin: 20,
        borderRadius: 12,
    },
};

const ResultPage = (props) => {
    const { classes, data } = props

    const userId = props.match.params.userId
    if( userId && userId !== data.get('login')){
        props.onGetGithub(userId)
    }

    return (
        <Card className={classes.card}>
            <CardMedia
                className={classes.media}
                image={data.get('avatar_url')}
                title={data.get('name')}
            />
            <CardContent>
                <Typography gutterBottom variant="headline" component="h2">
                    {data.get('name')}
                </Typography>
                <Typography component="p">{data.get('bio')}</Typography>
                <Typography component="p">Followers : {data.get('followers')}</Typography>
                <Typography component="p">Following : {data.get('following')}</Typography>
            </CardContent>
            <CardActions>
                <Link to="/">
                    <Button variant="contained" color="secondary">Home</Button>
                </Link>
            </CardActions>
        </Card>
    )
}

export default withStyles(styles)(ResultPage)