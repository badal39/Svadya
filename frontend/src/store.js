import {createStore,combineReducers,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {productListReducer
    ,productDetailsReducer,
    productDeleteReducer,
    productCreateReducer,
    productUpdateReducer,
    productReviewCreateReducer,
} from './reducers/productReducers'

import {cartReducer} from './reducers/cartReducers'

import {extraReducer} from './reducers/extraReducers'

import {BlogCardReducer,blogVidoeDetailsReducer,vlogCardReducer} from './reducers/blogReducers'

import {feedbackCreateReducer} from './reducers/supportReducers'

import {userLoginReducer,
    userRegisterReducer,
    userDetailsReducer,
    userUpdateProfileReducer,
    userListReducer,
    userDeleteReducer,
} from './reducers/userReducers'


import {

    orderCreateReducer,
    orderDetailsReducer,
    orderPayReducer,
    orderListMyReducer,
    orderListReducer,
    orderDeliverReducer,



} from './reducers/orderReducers'






const reducer = combineReducers({

    productList:productListReducer,
    productDetails:productDetailsReducer,
    productDelete : productDeleteReducer,
    productCreate : productCreateReducer,
    productUpdate : productUpdateReducer,
    productReviewCreate : productReviewCreateReducer,


    cart:cartReducer,
    userLogin:userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userList : userListReducer,
    userDelete : userDeleteReducer,


    orderCreate : orderCreateReducer,
    orderDetails : orderDetailsReducer,
    orderPay : orderPayReducer,
    orderListMy :orderListMyReducer,
    orderList : orderListReducer,
    orderDeliver : orderDeliverReducer,

    BlogCard : BlogCardReducer,
    blogVidoeDetails : blogVidoeDetailsReducer,
    vlogCard:vlogCardReducer,

    feedback : feedbackCreateReducer,

    extra : extraReducer
})

const cartItemsFromStorage = localStorage.getItem('cartItems') ?
     JSON.parse(localStorage.getItem('cartItems')) : []



const userInfoFromStorage = localStorage.getItem('userInfo') ?
     JSON.parse(localStorage.getItem('userInfo')) : {IsuserLogin:false}



const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ?
JSON.parse(localStorage.getItem('shippingAddress')) : {}



const initialState = {

    cart:{
        cartItems : cartItemsFromStorage,
        shippingAddress: shippingAddressFromStorage,

    },
    
    userLogin:{
        userInfo : userInfoFromStorage
    }

}

const middleware = [thunk]


const store = createStore(reducer,initialState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store