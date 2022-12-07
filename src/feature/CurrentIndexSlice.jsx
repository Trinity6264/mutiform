import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    currentIndex: 1,
}

const indexSlice = createSlice({
    name: 'index',
    initialState,
    reducers: {
        // this will increase the state if is less than 4
        toNextIndex: (state, action) => {
            if (state.currentIndex === 4) return;
            state.currentIndex+=1;
            return state
        },
        // this will decrease the state if is greater than 1
        toPreviousIndex: (state, action) => {
            if (state.currentIndex === 1) return;
             state.currentIndex-= 1;
             return state
        },
    }
})


// select the current index from the store
export const selectCurrentIndex = (state) => state.index.currentIndex;

export const { toNextIndex, toPreviousIndex } = indexSlice.actions;
export default indexSlice.reducer;  