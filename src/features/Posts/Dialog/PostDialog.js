import { PostDialogLoading } from './PostDialogLoading';
import { PostDialogContent } from './PostDialogContent';

import Dialog from '@mui/material/Dialog';
import CloseIcon from '@mui/icons-material/Close';


export const PostDialog = (props) => {

    const { handleClose, open, data, index, loading, handleNext, handlePrev } = props;

    return (
        <Dialog onClose={handleClose} open={open}>
            <CloseIcon className='icon' onClick={()=> { handleClose() }} fontSize='small' sx={{position: 'fixed', top: '1%', right: '1%', color: '#000', padding: '5px', background: '#FFF', borderRadius: '50%'}} />
            {loading ? (
                <PostDialogLoading />
            ) : (
                <PostDialogContent data={data} handleNext={handleNext} handlePrev={handlePrev} index={index} />
            )}
        </Dialog>
    );
}