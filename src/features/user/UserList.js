import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { deleteUser } from "./userSlice";

const Userlist = () => {
  const dispatch = useDispatch();
  const users = useSelector(store => store.users);

  const handleRemoveUser = (id) => {
     dispatch(deleteUser( { id }));
  }


  const renderCard = () =>
    users.map((user) => {
      return (
        <div className="user-list-card py-3" key={user.id}>
          <div className="d-flex">
            <div className="content-block">
              <h5>{user.name}</h5>
              <p>{user.email}</p>
            </div>
            <div className="btn-block ps-3">
              <Link to={`edit-user/${user.id}`}><button className="btn btn-info">Edit</button></Link>
              <button className="btn btn-danger ms-2" onClick={() => handleRemoveUser(user.id)}>Delete</button>
            </div>
          </div>
        </div>
      );
    });

  return (
    <div className="row">
      <div className="ms-4">
          <Link to="/add-user"><Button children="Add User"/></Link>
      </div>
      <div className="main-list">
        {users.length ? renderCard() : <h6 className="text-center">No User</h6>}
      </div>
    </div>
  );
};

export default Userlist;
