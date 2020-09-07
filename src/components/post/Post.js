import Grid from '@material-ui/core/Grid';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { red } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

export default function RecipeReviewCard(props) {
    const classes = useStyles();
    const { title, body, id} = props.post;
    return (
        <Grid item>
            <Card className={classes.root}>
                <CardContent>
                    <h3>{title.toUpperCase()}</h3>
                    <p>{body.slice(0, 80)}...</p>
                    <Button href={id} variant="contained" color="primary">Read More</Button>
                </CardContent>
            </Card>
        </Grid>
    );
}
