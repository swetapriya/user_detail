import { useQuery } from 'react-query'
import { useDispatch } from "react-redux";
import {GET_USER_DETAILS,SET_LOADING} from '../Redux/types'

export const useGetUserDetails = ()=>{
    const dispatch = useDispatch();
    return useQuery('userData', () =>
    fetch('https://jsonplaceholder.typicode.com/users').then(res =>
      res.json()
    ),
    {
      onSuccess:data=>{
        dispatch({ type: SET_LOADING, isLoading:false });     
        dispatch({ type: GET_USER_DETAILS, userDetails:data })},    
    }
  )
} 