import React from "react";
import { Outlet } from "react-router-dom";
import OutlinedTextField from "../../reusable-components/InputFields/OutlinedTextField/OutlinedTextField";
import { Stack } from "@mui/system";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";

export default function EmailConfirmation() {
  const showToaster = useSelector((store) => store.signIn.showToaster);

  const [resendEmailData, setResendEmailData] = useState({
    email: "",
  });
  const dispatch = useDispatch();

  const onChange = (event) => {
    const updatedKey = event.target.name;
    const updatedValue = { [updatedKey]: event.target.value };
    setResendEmailData({ ...resendEmailData, ...updatedValue });
  };

  const onSubmit = (event) => {
    dispatch(SignInUser(resendEmailData));
  };

  return (
    <div className="resend-email-outer-page-wrapper">
      <ToastContainer position="bottom-right" />
      <div className="resend-email-page-wrapper">
        <p>Enter your email for resending confirmation</p>
        <div className="form-wrapper">
          <form className="email-resending-form">
            <Stack spacing={2}>
              <OutlinedTextField
                name="email"
                label="Email"
                type="email"
                id="email"
                onChange={onChange}
              />
              <Button variant="contained" onClick={onSubmit}>
                Resend
              </Button>
            </Stack>
          </form>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
