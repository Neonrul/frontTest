import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import goodsReducer from '../Store/goodsReducer'

const appReducers = combineReducers({
        goodsReducer: goodsReducer
    }),

    store = createStore(appReducers, applyMiddleware(thunkMiddleware))

window.__store = store

export default store