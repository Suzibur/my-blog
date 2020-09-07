import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { useParams } from 'react-router-dom';
import Comment from '../comment/Comment'
import './FullPost.css'
const FullPost = () => {
    const { id } = useParams();
    const [post, setPost] = useState([]);
    const [comments, setComments] = useState([])
    useEffect(() => {
        const postUrl = `https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(postUrl)
            .then(res => res.json())
            .then(data => setPost(data));
        const cmntUrl = `https://jsonplaceholder.typicode.com/posts/${id}/comments`;
        fetch(cmntUrl)
            .then(res => res.json())
            .then(data => setComments(data));
    })
    const { title, body } = post;
    return (
        <div>
            <p className="title">{title}.</p>
            <p className="blog">{body}. Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam similique soluta distinctio saepe! Quibusdam numquam qui cupiditate alias error ab consectetur quidem ipsam minima voluptatem, illo officia! Iusto, cumque quibusdam!
                    Aspernatur assumenda accusantium, unde pariatur reprehenderit sit qui beatae et ullam cupiditate soluta quaerat sunt a alias magni ratione eos architecto deleniti autem? Sapiente provident ab fuga. Ullam, deserunt autem.
                    Ad debitis aspernatur repellat ratione, autem commodi iure neque itaque officiis id. Quod quos labore totam, odio voluptas in, veritatis accusantium minus quidem hic non natus, distinctio porro animi repudiandae?
                    Minima magnam, consectetur blanditiis placeat odio voluptate cumque eveniet, iusto debitis, dolore delectus autem porro saepe quis similique dignissimos ipsa obcaecati unde mollitia nesciunt necessitatibus. Quis similique aliquid vitae accusamus.
                    Aliquam aliquid tempora atque voluptatum tempore delectus saepe odio officia laudantium sunt temporibus reiciendis repudiandae assumenda repellat, nobis incidunt cupiditate doloribus, natus rem omnis molestiae deserunt quasi dolor. Cupiditate, quo.</p>

            <p style={{ textAlign: 'center', fontSize: '42px', color: '#3f51b5' }}>Comments</p>
            <Grid container spacing={2}>
                {comments.map(comment => <Comment comment={comment}></Comment>)}
            </Grid>
        </div>
    );
};

export default FullPost;