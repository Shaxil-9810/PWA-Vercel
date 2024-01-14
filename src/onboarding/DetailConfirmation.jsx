import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";

const DetailConfirmation = ({ proceedToNextStep }) => {
  return (
    <div className="">
      <Box
        sx={{
          width: "28rem",
          height: "100%",
          marginLeft: "6rem",
          borderRadius: "15px",
          backgroundColor: "white",
          padding: "2rem",
        }}
      >
        <div>
          <Typography className="text-4xl text-[#252A48] font-bold">
            Confirm your Details
          </Typography>
          <Typography className="mt-2">
            Please confirm your basic info below
          </Typography>
        </div>
        <div className="mt-8 ">
          <Typography className="mt-4 text-xl">
            Full Name:&nbsp;&nbsp; &nbsp; &nbsp; James William
          </Typography>
          <Typography className="mt-4 text-xl">
            Email:&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;james@abc.com
          </Typography>
          <Typography className="mt-4 text-xl">
            Password: (Your given password)
          </Typography>
          <Typography className="mt-4 text-xl">DOB: 01/05/2000</Typography>
          <Typography className="mt-4 text-xl">Gender: Male</Typography>
          <Typography className="mt-4 text-xl">
            Role: Internal RxTrail Consulting Team
          </Typography>
          <Typography className="mt-4 text-xl">Phone: +1 224 215767</Typography>
          <Typography className="mt-4 text-xl">
            Address: 750 M Salt Lake City, 100 California, US
          </Typography>
        </div>
        <div>
          <Button
            variant="contained"
            className="bg-[#252A48]  mt-4"
            size="large"
            onClick={proceedToNextStep}
          >
            Submit
          </Button>
        </div>
      </Box>
    </div>
  );
};

export default DetailConfirmation;
