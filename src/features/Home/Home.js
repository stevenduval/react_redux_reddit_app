import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Posts } from '../Posts/Posts';
import { PostsLoading } from '../Posts/PostsLoading';
import { selectPosts, fetchPosts, isLoadingPosts } from '../../app/redditDataSlice';

import { Container, Grid } from '@mui/material';


export const Home = () => {

    // reuseable reference to dispatch function
    const dispatch = useDispatch();
    // get posts data
    const data = useSelector(selectPosts);
    // get status of posts
    const loadingPosts = useSelector(isLoadingPosts);
    // used to fetch post data and will only refire if there is a change to dispatch
    useEffect(() => { dispatch(fetchPosts()) }, [dispatch]);

    return (
        <Container sx={{ display: 'flex', alignItems: 'center', margin: '40px auto' }} maxWidth='md'>
            <Grid container spacing={4}>
                {loadingPosts ? (
                    <PostsLoading />
                ) : (
                    data.map((item, index) => 
                    <Grid item xs={12} md={6} key={index} >
                        <Posts index={index} data={item} />
                    </Grid>
                    )
                )}
            </Grid>
        </Container>
    );
}