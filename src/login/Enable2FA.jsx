import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { IconButton, InputAdornment } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { MuiOtpInput } from "mui-one-time-password-input";
import { useNavigate } from "react-router-dom";

const Enable2FA = ({ proceedToNextStep }) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [otp, setOtp] = React.useState("");
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (newValue) => {
    setOtp(newValue);
  };
  return (
    <div className="z-10">
      <Box
        className="p-6 m-2 w-auto lg:w-[38rem] lg:m-0 lg:p-8 lg:ml-24 md:w-auto md:p-6 md:m-0"
        sx={{
          borderRadius: "15px",
          backgroundColor: "white",
        }}
      >
        <Typography className="text-4xl text-[#252A48] font-bold">
          Enable 2FA
        </Typography>
        <div className="flex flex-col sm:flex-col lg:flex-row justify-betwe">
          <div className="w-full lg:w-3/5">
            <Typography className="text-[#252A48] font-light mt-4">
              1. You will need an authenticator mobile app to complete this
              process, such as:<br></br>{" "}
              <span style={{ color: "#7860F7", fontWeight: "bold" }}>
                Google Authenticator
              </span>{" "}
              <br></br>
              <span style={{ color: "#7860F7", fontWeight: "bold" }}>
                {" "}
                Microsoft Authenticator
              </span>
              <br></br>
              <span style={{ color: "#7860F7", fontWeight: "bold" }}>
                {" "}
                Duo Mobile
              </span>
            </Typography>
          </div>
          <div className=" lg:w-2/5 overflow-hidden h-20 w-20 lg:h-40 lg:w-40 p-2">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/QR_Code_Example.svg/1200px-QR_Code_Example.svg.png"></img>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="w-full">
            <Typography className="text-[#252A48] font-light mt-4">
              2. Scan the QR code with your authenticator
            </Typography>
            <Typography className="text-[#252A48] font-light text-[14px]">
              If you can’t scan the code, you can enter this secret key into
              your authentictaor App
            </Typography>
            <TextField
              placeholder="NJRS-SDFS-SDFE-1247"
              className="mt-3"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      // onClick={handleTogglePasswordVisibility}
                      edge="end"
                    >
                      <ContentCopyIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </div>
        </div>
        <div className="w-3/4 ">
          <div className="">
            <Typography className="text-[#252A48] font-light mt-4">
              3. After scanning the QR code above, enter the six-digit code
              generated by your authenticator
            </Typography>

            <MuiOtpInput
              className="mt-4"
              value={otp}
              onChange={handleChange}
              length={6}
            />
          </div>
        </div>
        <div className="flex">
          <div className="">
            <Button
              variant="contained"
              className="bg-[#252A48] mt-4"
              size="large"
              onClick={() => navigate("/login/auth")}
            >
              Verify Now
            </Button>
          </div>
          <div className="pl-1">
            <Button
              variant="outlined"
              className=" mt-4"
              size="large"
              onClick={() => navigate("/on-boarding")}
            >
              Cancel
            </Button>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default Enable2FA;
