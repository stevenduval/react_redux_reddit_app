import { Card, CardContent, Grid, Link, Typography } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useState } from "react";
import { PostsModal } from "./PostsModal";
import Moment from "react-moment";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments, isLoadingComments, selectPosts } from "../../app/redditDataSlice";

export const Posts = (props) => {

    const { data, index } = props;

    const [open, setOpen] = useState(false);
    const [modalIndex, setModalIndex] = useState(index);
    const dispatch = useDispatch();

    const loadingComments = useSelector(isLoadingComments);
    const rawData = useSelector(selectPosts);
    const modalData = rawData[modalIndex];


    const getComments = (index) => {
        const permalink = rawData[index].permalink;
        dispatch(fetchComments({index, permalink}));
        setModalIndex(index);
    }

    const handleNext = (index) => {
        index =  index < rawData.length - 1 ? index + 1 : 0;
        getComments(index);
    }

    const handlePrev = (index) => {
        index =  index > 0 ? index - 1 : rawData.length - 1;
        getComments(index);
    }
    
    const handleOpen = (index) => {
        getComments(index);
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }


    return (
        <Grid item xs={12} md={6} >
            <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }} onClick={() => handleOpen(index) }>
                <LazyLoadImage src={data.url_overridden_by_dest} alt="Image Alt" style={{maxHeight: '175px', objectFit: 'cover'}}/>
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h6" component="h2" noWrap={true}>
                        {data.title}
                    </Typography>
                    <Typography variant="caption">
                        Posted <Moment fromNow unix>{data.created_utc}</Moment> by:&nbsp;
                        <Link href={`https://reddit.com/user/${data.author}`} rel="noopener" target="_blank" title="GitHub">{data.author}</Link>
                        {/* <br />
                        This post has {data.comments} comment(s). */}
                    </Typography>
                </CardContent>
            </Card>
            <PostsModal handleClose={handleClose} open={open} data={modalData} index={modalIndex} loading={loadingComments} handleNext={handleNext} handlePrev={handlePrev} />
        </Grid>
    );
}