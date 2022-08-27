import { createStore, combineReducers, applyMiddleware } from 'redux'
import shop from './shop/reducer'
import user from './user/reducer'
import thunk from 'redux-thunk'

const reducers = combineReducers({
  shop,
  user
})

const store = createStore(reducers, applyMiddleware(thunk))
export default store