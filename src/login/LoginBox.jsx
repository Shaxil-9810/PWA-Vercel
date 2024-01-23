import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const LoginBox = ({ proceedToNextStep }) => {
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
            Login to your account
          </Typography>
        </div>
        <div className="mt-8">
          <TextField fullWidth placeholder="Email Address" className="mt-3" />
          <TextField
            fullWidth
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="mt-3"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
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
        </div>
        <div className="flex">
          <div className="">
            <Button
              variant="contained"
              className="bg-[#252A48] mt-4"
              size="large"
              onClick={() => navigate("/login/enable-2fa")}
            >
              Login
            </Button>
          </div>
          <div className="pl-1">
            <Button
              variant="outlined"
              className=" mt-4"
              size="large"
              onClick={() => navigate("/on-boarding")}
            >
              Signup
            </Button>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default LoginBox;
