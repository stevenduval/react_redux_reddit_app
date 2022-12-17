import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchComments, isLoadingComments, selectPosts } from '../../app/redditDataSlice';
import { PostsCard } from './PostsCard';
import { PostDialog } from './Dialog/PostDialog';


export const Posts = (props) => {

    // deconstruct props
    const { data, index } = props;

    // setting local state for dialog components
    const [open, setOpen] = useState(false);
    const [dialogIndex, setDialogIndex] = useState(index);

    // reuseable reference to dispatch function
    const dispatch = useDispatch();

    // vars for storing data
    const loadingComments = useSelector(isLoadingComments);
    const rawData = useSelector(selectPosts);
    const dialogData = rawData[dialogIndex];

    // retrieve comments for post and set index of dialog
    const getComments = (index) => {
        const permalink = rawData[index].permalink;
        dispatch(fetchComments({index, permalink}));
        setDialogIndex(index);
    }

    // set index and get comments of next post
    const handleNext = (index) => {
        index =  index < rawData.length - 1 ? index + 1 : 0;
        getComments(index);
    }

    // set index and get comments of previous post
    const handlePrev = (index) => {
        index =  index > 0 ? index - 1 : rawData.length - 1;
        getComments(index);
    }

    // get comments for clicked on post and open dialog component
    const handleOpen = (index) => {
        getComments(index);
        setOpen(true);
    }

    // close dialog component
    const handleClose = () => {
        setOpen(false);
    }

    return (
        <>
            <PostsCard data={data} handleOpen={handleOpen} index={index} />
            <PostDialog handleClose={handleClose} open={open} data={dialogData} index={dialogIndex} loading={loadingComments} handleNext={handleNext} handlePrev={handlePrev} />
        </>

    );

}