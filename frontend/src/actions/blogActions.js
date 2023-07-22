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

    VLOG_LIKE_REQUEST,
    VLOG_LIKE_SUCCESS,
    VLOG_LIKE_FAIL,
    VLOG_LIKE_RESET,

    

  
  } from "../constants/blogConstants";

  import {

    API_PREFIX
  
  } from "../constants/apiPrifixConstant"

  import axios from "axios";


  export const BlogCard = (upto) => async (dispatch) => {
    try {
      dispatch({ type: BLOG_VIDOE_REQUEST });
  
      const { data } = await axios.get(`/api/story/blogs/vidoes/${upto}`);
  
      dispatch({
        type: BLOG_VIDOE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: BLOG_VIDOE_FAIL,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.message //detail
            : error.message,
      });
    }
  };

  export const listblogVidoeDetails = (id) => async (dispatch) => {
    try {
      dispatch({ type: BLOG_VIDOE_DETAILS_REQUEST });
  
      const { data } = await axios.get(`/api/story/blogs/vidoe/${id}`);
  
      dispatch({
        type: BLOG_VIDOE_DETAILS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: BLOG_VIDOE_DETAILS_FAIL,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };



  export const vlogCards = () => async (dispatch) => {
    try {
      dispatch({ type: VLOG_IMAGES_REQUEST });
  
      const { data } = await axios.get(API_PREFIX+process.env.REACT_APP_API_VLOG_IMAGES);
  
      dispatch({
        type: VLOG_IMAGES_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: VLOG_IMAGES_FAIL,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.message //detail
            : error.message,
      });
    }
  };



  export const addLike = (id) => async (dispatch, getState) => {
    try {
      dispatch({
        type: VLOG_LIKE_REQUEST,
      });
  
      const {
        userLogin: { userInfo },
      
      } = getState();
  
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
  
      const { data } = await axios.put(`http://localhost:8000/api/story/blogs/imgs/${id}/`,config);
  
      dispatch({
        type: VLOG_LIKE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: VLOG_LIKE_FAIL,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };
  