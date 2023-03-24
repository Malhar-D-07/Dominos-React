import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import OutlinedTextField from "../../reusable-components/InputFields/OutlinedTextField/OutlinedTextField";
import { Stack } from "@mui/system";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import { SignInUser } from "../../features/signIn/signInSlice";
import { ToastContainer } from "react-toastify";
import "./SignIn.scss";

export default function SignIn() {
  const showToaster = useSelector((store) => store.signIn.showToaster);

  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
    password_confirmation: "",
  });
  const dispatch = useDispatch();

  const onChange = (event) => {
    const updatedKey = event.target.name;
    const updatedValue = { [updatedKey]: event.target.value };
    setSignInData({ ...signInData, ...updatedValue });
  };

  const onSubmit = (event) => {
    dispatch(SignInUser(signInData));
  };

  return (
    <div className="sign-in-page-wrapper">
      <ToastContainer position="bottom-right" />
      <div className="sign-in-page-wrapper">
        <p>SignIn</p>
        <div className="form-wrapper">
          <form className="sign-in-form">
            <Stack spacing={2}>
              <OutlinedTextField
                name="email"
                label="Email"
                type="email"
                id="email"
                onChange={onChange}
              />
              <OutlinedTextField
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={onChange}
              />
              <OutlinedTextField
                name="password_confirmation"
                label="Password Confirmation"
                type="password"
                id="password_confirmation"
                onChange={onChange}
              />
              <Button variant="contained" onClick={onSubmit}>
                Submit
              </Button>
            </Stack>
          </form>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
