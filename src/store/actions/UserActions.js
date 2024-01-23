import { createAsyncThunk } from "@reduxjs/toolkit";


export const signUp = createAsyncThunk("user/signUp", async (values) => {
  console.log("SIGN UP VALUES THUNK", values);
//   return await axios
//     .post("http://localhost:5000/api/user/register", {
//       username: values.username,
//       email: values.email,
//       password: values.password,
//       confirmPassword: values.password,
//     })
//     .then((res) => {
//       console.log("RESPONSE", res);
//       const modifiedResponse = {
//         ...res?.data,
//         success: true,
//       };
//       console.log(modifiedResponse);
//       return modifiedResponse;
//     })
//     .catch((err) => {
//       // console.log("ERROR", err.response.data);
//       const modifiedResponse = {
//         ...err.response?.data,
//         success: false,
//       };
//       console.log(modifiedResponse);
//       return modifiedResponse;
//     });
});

