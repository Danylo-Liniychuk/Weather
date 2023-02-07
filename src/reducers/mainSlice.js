import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    currentPage: 'Weather',
    cities: [{name: "Madrid", time: '10:23', temp: '31'},
             {name: "Madrid", time: '10:23', temp: '31'},
             {name: "Madrid", time: '10:23', temp: '31'},
             {name: "Madrid", time: '10:23', temp: '31'},
             {name: "Madrid", time: '10:23', temp: '31'}],
}


const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers : {
        changeCurrentPage : (state, action) => {
            state.currentPage = action.payload;
        }
    }
})

const {actions, reducer} = mainSlice;

export default reducer;

export const {changeCurrentPage} =  actions;
