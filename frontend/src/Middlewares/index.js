import thunk from 'redux-thunk'
import { applyMiddleware } from 'redux'
import LoggerMiddleware from './LoggerMiddleware'

export default applyMiddleware(
  thunk,
  LoggerMiddleware
)