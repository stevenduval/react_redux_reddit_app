import { PostDialogLoading } from './PostDialogLoading';
import { PostDialogContent } from './PostDialogContent';

import Dialog from '@mui/material/Dialog';
import CloseIcon from '@mui/icons-material/Close';
import { useMediaQuery, useTheme } from '@mui/material';
import { useSwipeable } from 'react-swipeable';


export const PostDialog = (props) => {

    // destructure props
    const { handleClose, open, data, index, loading, handleNext, handlePrev } = props;

    // bring in theme so we can set full screen ability on dialog component
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    // events for swipe actions for touchscreen/mobile
    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => handleNext(index),
        onSwipedRight: () => handlePrev(index),
        onTap: () => handleClose()
      });

    return (
        <Dialog {...swipeHandlers} onClose={handleClose} open={open} fullScreen={fullScreen} >
            <CloseIcon className={`icon close`} onClick={()=> { handleClose() }} fontSize='small' />
            {loading ? (
                <PostDialogLoading />
            ) : (
                <PostDialogContent data={data} handleNext={handleNext} handlePrev={handlePrev} index={index} />
            )}
        </Dialog>
    );
}