
import { combineReducers } from 'redux'

const initialState = {
  fetching:false,
  error: null,
  data: null,
}
const status = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FETCHING':
      return {
        ...state,
        fetching:true
      }
    case 'FETCH_SUCCESSED':
      return {
        ...state,
        fetching:false,
        error:null,
        data:action.data
      }
    case 'FETCH_FAILED':
      console.log("fail")
      return {
        ...state,
        fetching:false,
        error:action.error,
        data:null
      }
    default:
      return state
  }
}

const userAuth = (state = { logged: false, logError: null }, action) => {
  switch (action.type) {
    case 'REGISTER_SUCCESS':
      console.log("REGISTER_SUCCESS")
      return { ...state, logged: true }
    case 'LOGIN_SUCCESS':
      console.log("LOGIN_SUCCESS")
      return { ...state, logged: true }
    case 'REGISTER_FAIL':
      return { ...state, logError: action.error }
    case 'LOG_OUT':
      localStorage.removeItem("auth_token")
      return { ...state, logged: false }
    case 'CHECK_LOGIN':
      return { ...state, logged: localStorage.getItem("auth_token")?.length>0 }
    default:
      return state
  }
}

export default combineReducers({
  status
})