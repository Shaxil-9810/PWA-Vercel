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
import { signupSchema } from "../Yup";
import { useDispatch } from "react-redux";
import { signUp } from "../store/actions/UserActions";
import { MuiOtpInput } from "mui-one-time-password-input";
const initialValues = {
  // firstName: "",
  // lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const OtpConfirmation = ({ proceedToNextStep, goToPrevStep }) => {
    const [otp, setOtp] = React.useState("");

    const handleChange = (newValue) => {
      setOtp(newValue);
    };

  return (
    <div className="z-10">
      <Box
        className="p-6 m-2 w-[22rem] lg:w-[32rem] lg:m-0 lg:p-8 lg:ml-24 md:w-[24rem]   "
        sx={{
          borderRadius: "15px",
          backgroundColor: "white",
        }}
      >
        <div>
          <Typography className="text-4xl text-[#252A48] font-bold">
            Verification Code
          </Typography>
          <Typography className="mt-2">
            We have sent a code on your email. Please confirm
          </Typography>
        </div>
        <div>
          <MuiOtpInput
            className="mt-4"
            value={otp}
            onChange={handleChange}
            length={6}
          />
        </div>
        <div>
        <Button
            variant="outlined"
            className="mt-4"
            size="large"
            onClick={goToPrevStep}
          >
            BACK
          </Button>
          <Button
            variant="contained"
            className="bg-[#252A48] mt-4 ml-2"
            size="large"
            //disabled={!Formik.isValid || !Formik.dirty}
            onClick={proceedToNextStep}
            //
          >
            Confirm
          </Button>
        </div>
      </Box>
    </div>
  );
};

export default OtpConfirmation;
