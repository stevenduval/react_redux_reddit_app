import { Dialog, DialogContent, Grid, Link, Typography } from "@mui/material";
import Moment from "react-moment";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloseIcon from '@mui/icons-material/Close';
import { PostsModalLoading } from "./PostsModalLoading";

export const PostsModal = (props) => {

    const { handleClose, open, data, index, loading, handleNext, handlePrev } = props;

    return (
        <Dialog onClose={handleClose} open={open}>
        <CloseIcon className='icon' onClick={()=> { handleClose() }} fontSize="small" sx={{position: 'fixed', top: '1%', right: '1%', color: '#000', padding: '5px', background: '#FFF', borderRadius: '50%'}} />
        {loading ? (<PostsModalLoading />) : (
        <DialogContent sx={{overflow: 'hidden', width: '550px'}}>
        <ArrowBackIosNewIcon className='icon' onClick={()=> { handlePrev(index) }} fontSize="small" sx={{position: 'fixed', top: '45%', left: '32%', color: '#000', padding: '5px', background: '#FFF', borderRadius: '50%'}} />
        <ArrowForwardIosIcon className='icon' onClick={()=> { handleNext(index) }} fontSize="small" sx={{position: 'fixed', top: '45%', right: '32%', color: '#000', padding: '5px', background: '#FFF', borderRadius: '50%'}} />
        <Grid container spacing={2}>
            <Grid item xs={12} sx={{overflow: 'hidden'}}>
            <Typography id="modal-modal-title" variant="h6" component="h2" sx={{textAlign: 'center'}}>
                <LazyLoadImage src={data.url_overridden_by_dest} alt="Image Alt" style={{ objectFit: 'contain', height: 400, maxHeight: 400}}/>
            </Typography>
            <Typography gutterBottom variant="p" component="h2">
                {data.title}
            </Typography>
            <Typography variant="caption">
                Posted <Moment fromNow unix>{data.created_utc}</Moment> by:&nbsp;
                <Link href={`https://reddit.com/user/${data.author}`} rel="noopener" target="_blank" title="GitHub">{data.author}</Link>
            </Typography>
            </Grid>
            <Grid item xs={12} sx={{overflowY: 'auto', height: 150}}>
                {data.comments && data.comments.map((comment, index) => (
                <Typography variant="subtitle2" sx={{ mt: 2 }} key={index}>
                    {comment.author}:  <br /> {comment.body}
                </Typography>))}
            </Grid>
            </Grid>
            </DialogContent>
            )}
        </Dialog>
    );
}