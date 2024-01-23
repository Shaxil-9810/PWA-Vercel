import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useFormik } from "formik";
import React, { useState } from "react";
import {  signupSchema } from "../Yup";
import { useDispatch } from "react-redux";
import { signUp } from "../store/actions/UserActions";
const initialValues = {
  // firstName: "",
  // lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUpForm = ({ proceedToNextStep, goToPrevStep }) => {
  const dispatch = useDispatch()
  const [showPassword, setShowPassword] = useState(false);
  const [confirmShowPassword, setConfirmShowPassword] = useState(false);


  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleToggleConfirmPasswordVisibility = () => {
    setConfirmShowPassword(!confirmShowPassword);
  };
  const Formik = useFormik({
    initialValues: { initialValues },
    validationSchema: signupSchema,

    onSubmit: async (values) => {
      console.log(values)
      dispatch(signUp(values.email))
      proceedToNextStep()
    },
  });

  return (
    <div className="z-10">
      <Box
        className="p-6 m-2 w-[22rem] lg:w-[28rem] lg:m-0 lg:p-8 lg:ml-24 md:w-[24rem]   "
        sx={{
          borderRadius: "15px",
          backgroundColor: "white",
        }}
      >
        <div>
          <Typography className="text-4xl text-[#252A48] font-bold">
           Sign Up
          </Typography>
          <Typography className="mt-2">
            Getting Started
          </Typography>
        </div>
        <div className="mt-4">
          {/* <TextField
            fullWidth
            placeholder="First Name"
            className="mt-3"
            name="firstName"
            defaultValue={Formik.values.firstName}
            onChange={Formik.handleChange}
            onBlur={Formik.handleBlur}
            error={Formik.errors.firstName && Formik.touched.firstName}
            helperText={
              Formik.errors.firstName && Formik.touched.firstName
                ? Formik.errors.firstName
                : null
            }
          />
          <TextField
            fullWidth
            placeholder="Last Name"
            className="mt-3"
            name="lastName"
            defaultValue={Formik.values.lastName}
            onChange={Formik.handleChange}
            onBlur={Formik.handleBlur}
            error={Formik.errors.lastName && Formik.touched.lastName}
            helperText={
              Formik.errors.lastName && Formik.touched.lastName
                ? Formik.errors.lastName
                : null
            }
          /> */}
          <TextField
          label="Email"
            fullWidth
            placeholder="Email Address"
            className="mt-3"
            name="email"
            defaultValue={Formik.values.email}
            onChange={Formik.handleChange}
            onBlur={Formik.handleBlur}
            error={Formik.errors.email && Formik.touched.email}
            helperText={
              Formik.errors.email && Formik.touched.email
                ? Formik.errors.email
                : null
            }
          />

          <TextField
            fullWidth
            label="Password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="mt-3"
            name="password"
            defaultValue={Formik.values.password}
            onChange={Formik.handleChange}
            onBlur={Formik.handleBlur}
            error={Formik.errors.password && Formik.touched.password}
            helperText={
              Formik.errors.password && Formik.touched.password
                ? Formik.errors.password
                : null
            }
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" className="cursor-pointer">
                  <IconButton
                    onClick={handleTogglePasswordVisibility}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <TextField
          label="Confirm Password"
            fullWidth
            type={confirmShowPassword ? "text" : "password"}
            placeholder="Confirm Password"
            className="mt-3"
            name="confirmPassword"
            defaultValue={Formik.values.confirmPassword}
            onChange={Formik.handleChange}
            onBlur={Formik.handleBlur}
            error={
              Formik.errors.confirmPassword && Formik.touched.confirmPassword
            }
            helperText={
              Formik.errors.confirmPassword && Formik.touched.confirmPassword
                ? Formik.errors.confirmPassword
                : null
            }
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" className="cursor-pointer">
                  <IconButton
                    onClick={handleToggleConfirmPasswordVisibility}
                    edge="end"
                  >
                    {confirmShowPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div>
          <Button
            variant="contained"
            className="bg-[#252A48] mt-4 "
            size="large"
            disabled={!Formik.isValid || !Formik.dirty}
            onClick={Formik.handleSubmit}
            //
          >
            Sign Up
          </Button>
        </div>
      </Box>
    </div>
  );
};

export default SignUpForm;
