import React, { useState } from "react";
import TextFields from "../../components/TextFields";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "./userSlice";
import { v4 as uuidv4 } from 'uuid';

const AddUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: ""
  });

  const handleAddUser = () => {
    setValues({ name: "", email: "" });
    dispatch(addUser({
      id: uuidv4(),
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
       <Button onClick={handleAddUser}>Submit</Button>
    </div>
  );
};

export default AddUser;
