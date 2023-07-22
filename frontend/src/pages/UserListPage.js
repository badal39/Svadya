import React, { useState, useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button, Row, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { listUsers, deleteUser } from "../actions/userActions";

function UserListPage({ history }) {
  const dispatch = useDispatch();

  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userDelete = useSelector(state => state.userDelete)
  const { success: successDelete } = userDelete

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listUsers());
    } else {
      history.push("/login");
    }
  }, [dispatch, history, successDelete, userInfo]);
  
  const deleteHandler = (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
        dispatch(deleteUser(id))
    }
}
  return (
    <Container>
      <h1>Users</h1>
      {loading ? (
        <h6>loading</h6>
      ) : error ? (
        <h6>{error}</h6>
      ) : (
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>ADMIN</th>
              <th>Delete user</th>

              <th></th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <Row className="justify-content-center">
                    {user.isAdmin ? (
                      <img src="https://img.icons8.com/fluent-systems-filled/18/26e07f/double-tick.png" />
                    ) : (
                      <img src="https://img.icons8.com/fluent-systems-filled/18/fa314a/double-tick.png" />
                    )}
                  </Row>
                </td>

                <td>
                  <Row className="justify-content-center">
                  <Button variant="light" size="sm" onClick={() => deleteHandler(user._id)}>
                  <img src="https://img.icons8.com/fluent/18/26e07f/delete-trash.png"/>
    </Button>
    </Row>

                
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
  
  </Container>
  
  );
}

export default UserListPage;
