import { Card, CardContent, Grid, Skeleton } from "@mui/material";

export const SinglePostLoading = () => {
   
    return (<Grid container item xs={12} >
            <Card sx={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column' }} >
                <CardContent sx={{ flexGrow: 1 }}>
                <Skeleton variant="rectangular" height={512} width={'100%'}/>
                <br />
                <Skeleton variant="rectangular" height={25} width={'100%'}/>
                <br />
                <Skeleton variant="rectangular" height={25} width={'100%'}/>
                </CardContent>
            </Card>
        </Grid>
    );
}