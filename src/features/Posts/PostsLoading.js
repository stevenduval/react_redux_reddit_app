import { Card, CardContent, Grid, Skeleton } from '@mui/material';

export const PostsLoading = () => {

    // generate 6 fake posts to show items are being loaded
    const posts = [1, 2, 3, 4, 5, 6];

    return (
        posts.map((post, index) => (
            <Grid item xs={12} md={6} key={index}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }} >
                    <CardContent sx={{ flexGrow: 1 }}>
                        <Skeleton animation='wave' variant='rectangular' height={165} width={'100%'} />
                        <Skeleton animation='wave' variant='rectangular' height={62} width={'100%'} sx={{ mt: 3 }}/>
                    </CardContent>
                </Card>
            </Grid>
        ))
    );
    
}