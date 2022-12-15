import { Card, CardContent, CardMedia, Container, Grid, Link, Typography} from "@mui/material";

import { useSelector } from "react-redux";
import { selectPosts, selectCurrentPost, isLoadingComments} from "../../app/redditDataSlice";
import { useEffect, useState } from "react";

import Moment from "react-moment";
import { SinglePostLoading } from "./SinglePostLoading";

export const SinglePost = () => {

    const getData = useSelector(selectPosts);
    const currentPost = useSelector(selectCurrentPost);
    const loadingComments = useSelector(isLoadingComments);
    const currentPostData = getData[currentPost];
    const [data, setData] = useState("");

    useEffect(() => {
        if (currentPostData) {
        setData(currentPostData);
        }
    }, [currentPostData]);

    console.log(data);
   if (data.comments) {console.log(data.comments.map(comment => comment.author))};

    return(
        <Container sx={{ display: "flex", alignItems: "center", margin: '40px auto', justifyContent: 'center' }} maxWidth='xl'>
        { loadingComments ? (<SinglePostLoading />) : (
        
             <Grid item xs={12} >
             <Card
                 sx={{ height: '100%', display: 'flex', flexDirection: 'column' }} >
                 <CardMedia
                     component="img"
                     sx={{
                         maxHeight: '512px'
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
                     {data.comments && data.comments.map(comment => (
                        <Typography variant="subtitle2" sx={{mt: 2}}>
                        {comment.author}:  <br /> {comment.body}
                        </Typography>)
                        )}
                 </CardContent>
             </Card>
         </Grid>
            )}
        </Container>
    );
}