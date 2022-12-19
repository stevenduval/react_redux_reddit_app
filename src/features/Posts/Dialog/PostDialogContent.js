import { DialogContent, Grid, Link, Typography } from '@mui/material';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import Moment from 'react-moment';


export const PostDialogContent = (props) => {

    // destructure props
    const { data, handleNext, handlePrev, index } = props;

    return (
        <DialogContent sx={{ overflow: 'hidden', width: '550px' }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sx={{ overflow: 'hidden' }}>
                    <div className='image-container'>
                        <LazyLoadImage src={data.url_overridden_by_dest} alt='Image Alt' style={{ objectFit: 'contain', height: 400, maxHeight: 400, width: '100%' }} />
                        <ArrowBackIosNewIcon className={`icon prev`} onClick={() => { handlePrev(index) }} fontSize='small' />
                        <ArrowForwardIosIcon className={`icon next`} onClick={() => { handleNext(index) }} fontSize='small' />
                    </div>
                    <Typography gutterBottom variant='h6' component='h2'>
                        {data.title}
                    </Typography>
                    <Typography variant='caption'>
                        Posted <Moment fromNow unix>{data.created_utc}</Moment> by:&nbsp;
                        <Link href={`https://reddit.com/user/${data.author}`} rel='noopener' target='_blank' title='GitHub'>{data.author}</Link>
                    </Typography>
                </Grid>
                <Grid item xs={12} className='comments' sx={{ overflowY: 'auto', height: 150 }}>
                    {data.comments && data.comments.map((comment, index) => (
                        <Typography variant='subtitle2' sx={{ mt: 2 }} key={index}>
                            {comment.author}:  <br /> {comment.body}
                        </Typography>
                    ))}
                </Grid>
            </Grid>
        </DialogContent>
    );

}