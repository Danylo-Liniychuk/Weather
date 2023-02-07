import {configureStore} from '@reduxjs/toolkit';
import main from '../reducers/mainSlice';

const store = configureStore({
    reducer: main,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production'
});

export default store;

