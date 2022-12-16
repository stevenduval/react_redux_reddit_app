import { DialogContent, Grid, Skeleton, Typography } from "@mui/material";

export const PostsModalLoading = () => {
    return (
        <DialogContent sx={{overflow: 'hidden', width: '550px'}}>
        <Grid container spacing={2}>
            <Grid item xs={12} sx={{overflow: 'hidden'}}>
            <Typography id="modal-modal-title" variant="h6" component="h2" sx={{textAlign: 'center'}}>
                <Skeleton variant="rectangular" height={400} width={'100%'}/>
            </Typography>
            <Typography gutterBottom variant="p" component="h2" sx={{ mt: 2 }}>
                <Skeleton variant="rectangular" height={75} width={'100%'}/>
            </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="subtitle2">
                <Skeleton variant="rectangular" height={100} width={'100%'}/>
                </Typography>
            </Grid>
            </Grid>
            </DialogContent>
    );
}