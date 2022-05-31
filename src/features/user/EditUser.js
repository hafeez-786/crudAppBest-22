import React, { useState } from "react";
import TextFields from "../../components/TextFields";
import Button from "../../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editUser } from "./userSlice";

const EditUser = () => {
    const params = useParams();
    const dispatch = useDispatch()
    const users = useSelector(store => store.users);
    const navigate = useNavigate();
    const existingUser = users.filter(user => user.id == params.id);
    const { name, email } = existingUser[0];

    const [values, setValues] = useState({
      name,
      email
    });
  
    const handleEditUser = () => {
      setValues({ name: "", email: "" });
      dispatch(editUser({
        id: params.id,
        name: values.name,
        email: values.email
      }));
      navigate("/")
    }
  
    return (
      <div className="mt-4 form-block">
         <TextFields 
          label="Name"
          value={values.name}
          inputProps={{ type: "text", placeholder: "John Doe"}}
          onChange={(e) => setValues({ ...values, name: e.target.value })}
         />
  
         <TextFields 
          label="Email"
          value={values.email}
          inputProps={{ type: "text", placeholder: "john@example.com"}}
          onChange={(e) => setValues({ ...values, email: e.target.value })}
         />
         <Button onClick={handleEditUser}>Update</Button>
      </div>
    );
}

export default EditUser