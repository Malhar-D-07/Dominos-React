import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../services/base";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  loading: false,
  data: {},
  error: "",
  showToaster: false,
};

const resendConfirmationInitialState = {
  loading: false,
  data: {},
  error: "",
  showToaster: false,
};

// response.data =>
//   data:{
//     "is_successful": "true"
//   }
//-------------------
// response.status: 200

export const SignInUser = createAsyncThunk("signin/SignInUser", (data) => {
  return axios
    .post("user/signup", { user: data })
    .then((response) =>
      toast.success("Please check your email for confirmation instructions.")
    )
    .catch((error) => toast.error("Unprocessible entity"));
});

export const signInSlice = createSlice({
  name: "signin",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(SignInUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(SignInUser.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
      state.showToaster = true;
    });
    builder.addCase(SignInUser.rejected, (state, action) => {
      state.loading = false;
      state.data = {};
      state.error = action.error.message;
    });
  },
});

export const ResendEmailConfirmationToUser = createAsyncThunk(
  "resendEmail/ResendEmailConfirmationToUser",
  (data, token) => {
    return axios
      .post("confirmations", { user: data, confirmation_token: token })
      .then((response) =>
        toast.success("Please check your email for confirmation instructions.")
      )
      .catch((error) => toast.error("Unprocessible entity"));
  }
);

export const ResendEmailSlice = createSlice({
  name: "resendEmail",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(ResendEmailConfirmationToUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      ResendEmailConfirmationToUser.fulfilled,
      (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = "";
        state.showToaster = true;
      }
    );
    builder.addCase(ResendEmailConfirmationToUser.rejected, (state, action) => {
      state.loading = false;
      state.data = {};
      state.error = action.error.message;
    });
  },
});
export default signInSlice.reducer;
