import { Card, CardMedia, CardContent, Grid, Link, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Moment from "react-moment";
import { fetchComments } from "../../app/redditDataSlice";

export const Posts = (props) => {

    const { data, index } = props;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = (index, permalink) => {
        dispatch(fetchComments({index, permalink}));
        navigate(`/comments/${data.id}`);
    }

    return (
        <Grid item xs={12} md={6} >
            <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }} onClick={() => handleClick(index, data.permalink) }>
                <CardMedia
                    component="img"
                    sx={{
                        maxHeight: '150px',
                    }}
                    image={data.url_overridden_by_dest}
                    alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h6" component="h2" noWrap={true}>
                        {data.title}
                    </Typography>
                    <Typography variant="caption">
                        Posted <Moment fromNow unix>{data.created_utc}</Moment> by:&nbsp;
                            <Link href={`https://reddit.com/user/${data.author}`} rel="noopener" target="_blank" title="GitHub">{data.author}</Link>
                        {/* {Math.floor(data.score)}
                      {data.num_comments} */}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
}