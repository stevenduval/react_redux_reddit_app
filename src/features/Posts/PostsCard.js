import {Card, CardContent, Link, Typography} from '@mui/material';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import Moment from 'react-moment';


export const PostsCard = (props) => {

    // destructure props
    const {data, handleOpen, index} = props ;

    return (
        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', cursor: 'pointer' }} onClick={() => handleOpen(index) } title='click to open post'>
            <LazyLoadImage src={data.url_overridden_by_dest} alt='Image Alt' style={{maxHeight: '175px', objectFit: 'cover'}}/>
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant='h6' component='h2' noWrap={true}>
                    {data.title}
                </Typography>
                <Typography variant='caption'>
                    Posted <Moment fromNow unix>{data.created_utc}</Moment> by:&nbsp;
                    <Link href={`https://reddit.com/user/${data.author}`} rel='noopener' target='_blank' title='view author on reddit'>{data.author}</Link>
                </Typography>
            </CardContent>
        </Card>
    );

}