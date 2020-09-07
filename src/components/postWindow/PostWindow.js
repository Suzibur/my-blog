import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import Post from '../post/Post'
import { ContextData } from '../../App';
const PostWindow = () => {
    const posts = useContext(ContextData);
    return (
            <Grid container spacing={3}>
                {posts.map(post => <Post post={post}></Post>)}
            </Grid>
    );
};

export default PostWindow;