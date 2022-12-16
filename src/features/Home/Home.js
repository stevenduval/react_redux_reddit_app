import { selectPosts, fetchPosts, isLoadingPosts } from "../../app/redditDataSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Posts } from "../Posts/Posts";
import { PostsLoading } from "../Posts/PostsLoading";
import { Container, Grid } from "@mui/material";


export const Home = () => {
    // get data for posts
    const data = useSelector(selectPosts);
    const loadingPosts = useSelector(isLoadingPosts);
    // reuseable reference to dispatch function
    const dispatch = useDispatch();
    // used to fetch post data and will only refire if there is a change to dispatch
    useEffect(() => { dispatch(fetchPosts()) }, [dispatch]);

    return (
        <Container sx={{ display: "flex", alignItems: "center", margin: '40px auto' }} maxWidth='md'>
            <Grid container spacing={4}>
                {loadingPosts ? (
                    <PostsLoading />
                ) : (
                    data.map((item, index) => <Posts key={index} index={index} data={item} />))}
            </Grid>
        </Container>
    );
}