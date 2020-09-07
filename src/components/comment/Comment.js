import React from 'react';
import './Comment.css'
import Grid from '@material-ui/core/Grid';

const Comment = (props) => {
    const { email, body} = props.comment;
    return (
        <Grid item xs={4}>
            <div className="cmnt-box">
                <p className="email"><strong>Email address:</strong> {email}</p>
                <p className="cmnt"><strong>Comment:</strong> {body}.</p>
            </div>
        </Grid>
    );
};

export default Comment;