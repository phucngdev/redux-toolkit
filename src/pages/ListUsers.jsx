import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findAll } from "../services/users.service";

const ListUsers = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.data);
  console.log(users);
  const loadData = () => {
    dispatch(findAll());
  };
  useEffect(() => {
    loadData();
  }, []);
  const handleDelete = (id) => {};
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Username</th>
            <th>Gender</th>
            <th colSpan={2}>Options</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.gender}</td>
              <td>
                <button>edit</button>
              </td>
              <td>
                <button onClick={() => handleDelete(user.id)}>delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ListUsers;
