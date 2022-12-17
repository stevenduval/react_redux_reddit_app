import { DialogContent, Skeleton } from '@mui/material';

export const PostDialogLoading = () => {

    return (
        <DialogContent sx={{overflow: 'hidden', width: '550px'}}>
            <Skeleton animation='wave' variant='rectangular' height={400} width={'100%'} />
            <Skeleton animation='wave' variant='rectangular' height={75} width={'100%'} sx={{mt: 2}} />
            <Skeleton animation='wave' variant='rectangular' height={115} width={'100%'} sx={{mt: 2}} />
        </DialogContent>
    );

}