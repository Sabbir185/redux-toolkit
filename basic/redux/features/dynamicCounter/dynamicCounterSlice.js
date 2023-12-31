const { createSlice } = require("@reduxjs/toolkit");
const {counterActions} = require('../counter/counterSlice')

const initialState = {
    count: 0
}

const dynamicCounterSlice = createSlice({
    name: 'dynamicCounter',
    initialState,
    reducers: {
        increment: (state, action) => {
            state.count += action.payload;
        },
        decrement: (state, action) => {
            state.count -= action.payload;
        }
    },

    // if we need extra middleware so that we can perform multiple task at a same time
    // hard code
    // extraReducers: {
    //     ['counter/increment']: (state, action) => {
    //         state.count += 1;
    //     }
    // }

    // recommended way for extra reducer
    // dynamic approach
    extraReducers: (builder) => {
        builder.addCase(counterActions.increment, (state, action) => {
            state.count += 1;
        })
    }

})

module.exports = dynamicCounterSlice.reducer;
module.exports.dynamicCounterActions = dynamicCounterSlice.actions;

