import {
  BLOG_VIDOE_REQUEST,
  BLOG_VIDOE_SUCCESS,
  BLOG_VIDOE_FAIL,


  BLOG_VIDOE_DETAILS_REQUEST,
  BLOG_VIDOE_DETAILS_SUCCESS,
  BLOG_VIDOE_DETAILS_FAIL,
  BLOG_VIDOE_DETAILS_RESET,


  VLOG_IMAGES_REQUEST,
  VLOG_IMAGES_SUCCESS,
  VLOG_IMAGES_FAIL,



} from "../constants/blogConstants";



  export const BlogCardReducer = (state = { cards: [] }, action) => {
    switch (action.type) {
      case BLOG_VIDOE_REQUEST:
        return { loading: true, cards: [] };
  
      case BLOG_VIDOE_SUCCESS:
        return {
          loading: false,
          cards: action.payload,
        };
  
      case BLOG_VIDOE_FAIL:
        return { loading: false, error: action.payload };
  
      default:
        return state;
    }
  };

  export const blogVidoeDetailsReducer = (
    state = {  loading: false ,blogVidoe: { } },
    action
  ) => {
    switch (action.type) {
      case BLOG_VIDOE_DETAILS_REQUEST:
        return { loading: true, ...state };
  
      case BLOG_VIDOE_DETAILS_SUCCESS:
        return { loading: false, blogVidoe: action.payload };
  
      case BLOG_VIDOE_DETAILS_FAIL:
        return { loading: false, error: action.payload };
  
      case BLOG_VIDOE_DETAILS_RESET:
        return { blogVidoe: {} };
  
      default:
        return state;
    }
  };



  export const vlogCardReducer = (state = { Vcards: [] }, action) => {
    switch (action.type) {
      case VLOG_IMAGES_REQUEST:
        return { loading: true, Vcards: [] };
  
      case VLOG_IMAGES_SUCCESS:
        return {
          loading: false,
          Vcards: action.payload,
        };
  
      case VLOG_IMAGES_FAIL:
        return { loading: false, error: action.payload };
  
      default:
        return state;
    }
  };