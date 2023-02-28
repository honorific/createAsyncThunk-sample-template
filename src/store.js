import { configureStore } from "@reduxjs/toolkit";
import reducers  from './features/reducers';
import { devToolsEnhancer } from 'redux-devtools-extension'

const store = configureStore({
    reducer: reducers ,
    devTools: false ,
    enhancers: [devToolsEnhancer({ realtime: true })],
    //middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store;