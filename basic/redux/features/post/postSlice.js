const {createAsyncThunk, createSlice} = require('@reduxjs/toolkit');

// our initial state
const initialState = {
    loading: false,
    error: '',
    posts: []
}


// create async thunk
const fetchPosts = createAsyncThunk('posts/fetchPosts', async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
    const posts = await response.json();
    return posts;
})


const postSlice = createSlice({
    name: 'posts',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state, action) => {
            state.loading = true;
            state.error = '';
            state.posts = [];
        })
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.loading = false;
            state.error = '';
            state.posts = action.payload;
        })
        builder.addCase(fetchPosts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.posts = [];
        })
    }
});

module.exports = postSlice.reducer;
module.exports.fetchPosts = fetchPosts;

