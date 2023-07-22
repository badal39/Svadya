import{


  FEEDBACK_CREATE_REQUEST,
  FEEDBACK_CREATE_SUCCESS,
  FEEDBACK_CREATE_FAIL,
  FEEDBACK_CREATE_RESET,
} from '../constants/supportConstants';



export const feedbackCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case FEEDBACK_CREATE_REQUEST:
            return { loading: true }
  
        case FEEDBACK_CREATE_SUCCESS:
            return { loading: false, success: true, }
  
        case FEEDBACK_CREATE_FAIL:
            return { loading: false, error: action.payload }
  
        case FEEDBACK_CREATE_RESET:
            return {}
  
        default:
            return state
    }
  }
  