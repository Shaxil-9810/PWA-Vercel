import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const UserAuth = ({ proceedToNextStep }) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="">
      <Box
        className="p-6 m-2 lg:w-[28rem] lg:m-0 lg:p-8 lg:ml-24 md:w-auto md:p-6 md:m-0"
        sx={{
          borderRadius: "15px",
          backgroundColor: "white",
        }}
      >
        <div>
          <Typography className="text-4xl text-[#252A48] font-bold">
            User Authentication
          </Typography>
          <Typography className="text-[#252A48] font-light">
            Enter your security code below
          </Typography>
        </div>
        <div className="mt-8">
          <TextField fullWidth placeholder="Security code" className="mt-3" />
        </div>
        <div className="flex">
          <div className="">
            <Button
              variant="contained"
              className="bg-[#252A48] mt-4"
              size="large"
              onClick={proceedToNextStep}
            >
              Continue
            </Button>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default UserAuth;
