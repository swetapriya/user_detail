import { legacy_createStore as createStore, combineReducers} from 'redux'
import {SET_MODAL, GET_USER_DETAILS, SELECTED_USER, SET_LOADING} from './types'

const initalState1 = {
  userDetails:[],
  isModalOpen:false,
  selectedUserDetails:{},
  isLoading:true
};

function reducer1(state = initalState1, action) {
  switch (action.type) {
    case GET_USER_DETAILS:
      return { ...state, userDetails:action.userDetails };
      case SET_MODAL:
        return { ...state, isModalOpen:action.isModalOpen };
        case SELECTED_USER:
          return {...state, selectedUserDetails:action.user};
          case SET_LOADING:
          return {...state, isLoading:action.isLoading}
    default:
      return state;
  }
}

export const store = createStore(combineReducers({ reducer1 }));
