import { combineReducers } from 'redux'

import catsReducer from './Cats';

const rootReducer = combineReducers({
    cats: catsReducer,
})

export default rootReducer