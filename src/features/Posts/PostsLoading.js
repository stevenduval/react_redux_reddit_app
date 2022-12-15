import { Card, CardContent, Grid, Skeleton } from "@mui/material";

export const PostsLoading = () => {
    const posts = [1, 2, 3, 4, 5, 6];
    return (
        posts.map((post, index) => {
           return ( <Grid item xs={12} md={6} key={index}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }} >
                <CardContent sx={{ flexGrow: 1 }}>
                <Skeleton variant="rectangular" height={175} width={'100%'}/>
                <br />
                <Skeleton variant="rectangular" height={25} width={'100%'}/>
                <br />
                <Skeleton variant="rectangular" height={25} width={'100%'}/>
                </CardContent>
            </Card>
        </Grid>)
        })
    );
}