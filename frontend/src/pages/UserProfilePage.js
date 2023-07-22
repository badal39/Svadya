import React, { useState, useEffect } from 'react'
import '../css/user_profile.css'
import '../css/App.css'





import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants'

import { Link} from 'react-router-dom'
import {getUserDetails,updateUserProfile} from '../actions/userActions'
import { useDispatch, useSelector } from 'react-redux'


import {Row,Col,Container,Card,ListGroup, Button, ListGroupItem,Form} from 'react-bootstrap'


function UserProfilePage({history}) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pwd, setPwd] = useState('')
    const [confirmpwd, setConfirmPwd] = useState('')
    const [msg, setMsg] = useState('')
    const [a, setA] = useState(1)




    const dispatch = useDispatch()

    const userDetails = useSelector(state => state.userDetails)
    const { error, loading, user } = userDetails

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin  

    const userUpdateProfile = useSelector(state => state.userUpdateProfile)
    const { success } = userUpdateProfile


    useEffect(() => {
        if (userInfo.IsuserLogin==false) {
            history.push('/login?redirect=profile')

        } else {
            if (!user || !user.name || success) {
                dispatch({ type: USER_UPDATE_PROFILE_RESET })

                dispatch(getUserDetails('profile'))
              

            } else {
                setName(user.name)
                setEmail(user.email)
            }
        }

      
                 

    }, [dispatch, history, userInfo, user,success])


    const submitHandler = (e) => {
        e.preventDefault()
    
        if(pwd != confirmpwd){
            setMsg('Password Not Match')
        }
        else {
            dispatch(updateUserProfile({
                'id': user._id,
                'name': name,
                'email': email,
                'password': pwd
            }))

        setA(1)        
        }
    
    
    }




    return (
        <Container className="my-5 ">
            <Row >

            <Col  md={3} className="py-0">
            <ListGroup variant='flush'>
                        <ListGroup.Item   className=" user_profile_detail" >
                        <strong>  <h3 style={{color:'rgb(145,221,191)'}}>Profile</h3></strong>
                        <Link to="/profile" className="profile__menu__text"  >

                         <p>{userInfo.name}</p>
                         </Link>

                      </ListGroup.Item>
                      <ListGroup.Item className="user_profile_detail" >
                      <strong>  <h3>Orders</h3></strong>
                      <Link to="/order" className="profile__menu__text">

                         <p>Order & Returns</p>
                         </Link>      

                      </ListGroup.Item>
               
            </ListGroup>
             
            </Col>
            <Col  md={9} className="my-2 ">
             
             {a===0 ? <Card  className="bg__secondary" style={{border:'transparent '}}>
                     <Card.Body  >
                     <ListGroup variant='flush'>
                         <ListGroup.Item className="bg__secondary border__bottom" >
                               <Row className="justify-content-center ">
                                    <h5> Edit Profile Details</h5>
                                 </Row>
                         </ListGroup.Item>
                         <Form className="mx-5 my-5" onSubmit={submitHandler}>
                      <Form.Group controlId="name">
                              <Form.Label>Name</Form.Label>
                              <Form.Control 
                               required
                               type="name" 
                               placeholder="Enter name"
                               value={name}
                               onChange={(e) => setName(e.target.value)} />
                              
                       </Form.Group>

                       <Form.Group controlId="email">
                              <Form.Label>Email address</Form.Label>
                              <Form.Control
                                
                                type="email"
                                value={email}
                                placeholder="Enter email"
                                 onChange={(e) => setEmail(e.target.value)} />
                              <Form.Text className="font-weight-light" >
                                We'll never share your email with anyone else.
                              </Form.Text>
                       </Form.Group>
                       <Form.Group controlId="Password">
                               <Form.Label>Password</Form.Label>
                               <Form.Control
                               type="password" 
                                placeholder="Password" 
                               onChange={(e) => setPwd(e.target.value)} />
                       </Form.Group>
                       <Form.Group controlId="PasswordConfirm">
                               <Form.Label>Password</Form.Label>
                               <Form.Control 
                               type="password" 
                               className={msg && "is-invalid"}
                               value={confirmpwd} placeholder="Confirm Password" 
                               onChange={(e) => setConfirmPwd(e.target.value)} />
                               {msg &&  <div className="invalid-feedback">{msg}</div>
}
                       </Form.Group>
                       <Row className="justify-content-center mx-5">
                                   <Button className="btn-block mx-5 my-3" variant="info" type="submit">
                                              Update Me.
                                    </Button>
                          </Row>
                </Form>
            
                     </ListGroup>

                     </Card.Body>
            
            </Card> 
            : 
            <Card  className="bg__secondary" style={{border:'transparent '}}>                  
                 <Card.Body  >
                     <ListGroup variant='flush'>
                         <ListGroup.Item className="bg__secondary border__bottom" >
                               <Row className="justify-content-center py-3">
                                    <h5>Profile Details</h5>
                                 </Row>
                         </ListGroup.Item>
                         <Row className="justify-content-center mx-5 my-2 py-2">
                          <Col md={3}></Col>
                          <Col md={3}>
                            <h6>Full Name </h6>
                          </Col>
                          <Col><h6>{name}</h6></Col>
                          </Row> 

                          <Row className="justify-content-center mx-5 my-2 py-2">
                          <Col md={3}></Col>
                          <Col md={3}>
                            <h6>Email </h6>
                          </Col>
                          <Col><h6>{email}</h6></Col>
                          </Row> 

                          <Row className="justify-content-center mx-5">
                                   <Button  className="btn-block mx-5 my-3" variant="info" onClick ={(e) => setA(0)} >
                                              Edit.
                                    </Button>
                          </Row>
                    </ListGroup>  
                         
                  </Card.Body>
            </Card>}
            </Col>
            

            </Row>
            
        </Container>
    )
}

export default UserProfilePage 