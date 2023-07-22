import axios from "axios";
import {

    FEEDBACK_CREATE_REQUEST,
    FEEDBACK_CREATE_SUCCESS,
    FEEDBACK_CREATE_FAIL,
    FEEDBACK_CREATE_RESET,

} from "../constants/supportConstants"

import {

    API_PREFIX
  
  } from "../constants/apiPrifixConstant"
  
  

export const createFeedBack = (issatisfied,comment) => async (dispatch) => {
    try {
        dispatch({
            type: FEEDBACK_CREATE_REQUEST
        })
  
        
  
        const config = {
            headers: {
                'Content-type': 'application/json',
               
            }
        }
  
        const { data } = await axios.post(
            API_PREFIX+process.env.REACT_APP_API_FEEDBACK,
            {issatisfied:issatisfied,comment:comment},
            
            config
        )
        dispatch({
            type: FEEDBACK_CREATE_SUCCESS,
            payload: data,
        })
  
  
  
    } catch (error) {
        dispatch({
            type: FEEDBACK_CREATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
  }
  