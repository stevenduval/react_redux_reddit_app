import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchPosts = createAsyncThunk(
    'posts/loadPosts',
    async () => {
        const response = await fetch('https://www.reddit.com/r/streetphotography/new.json');
        const json = await response.json();
        return json.data.children.map(post => post.data);
    }
)

export const fetchComments = createAsyncThunk(
    'posts/loadComments',
    async (data) => {
        const { index, permalink } = data;
        const response = await fetch(`https://www.reddit.com/${permalink}.json`);
        const json = await response.json();
        return {id: index, data: json[1].data.children.map(comments => comments.data)};
    }
)

const initialState = {
    posts: [],
    postsError: false,
    postsIsLoading: false,
    commentsError: false,
    commentsIsLoading: false
  };

export const redditDataSlice = createSlice({
    name: 'redditData',
    initialState,
    extraReducers: (builder) => {
        // to fetch posts
        builder.addCase(fetchPosts.pending, (state, action) => {
            state.postsIsLoading = true;
            state.postsError = false;
        })
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.posts = action.payload;
            state.postsLength = action.payload.length - 1;
            state.postsIsLoading  = false;
            state.postsError = false;
        })
        builder.addCase(fetchPosts.rejected, (state, action) => {
            state.postsIsLoading = false;
            state.postsError = true;
        })
        // to fetch comments
        builder.addCase(fetchComments.pending, (state, action) => {
            state.commentsIsLoading = true;
            state.commentsError = false;
        })
        builder.addCase(fetchComments.fulfilled, (state, action) => {
            state.posts[action.payload.id].comments = action.payload.data;
            state.commentsIsLoading  = false;
            state.commentsError = false;
        })
        builder.addCase(fetchComments.rejected, (state, action) => {
            state.commentsIsLoading = false;
            state.commentsError = true;
        })
    },
})

export const selectPosts = (state) => state.redditData.posts;
export const isLoadingPosts = (state) => state.redditData.postsIsLoading;
export const isErrorPosts = (state) => state.redditData.postsError;

export const isLoadingComments = (state) => state.redditData.commentsIsLoading;
export const isErrorComments= (state) => state.redditData.commentsError;

export default redditDataSlice.reducer;