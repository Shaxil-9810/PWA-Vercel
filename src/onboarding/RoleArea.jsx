import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const RoleArea = ({ proceedToNextStep, goToPrevStep }) => {
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
            Select Role and Area
          </Typography>
          <Typography className="mt-2">
            Please select your role and location
          </Typography>
        </div>
        <div className="mt-4">
        
          <FormControl fullWidth className="mt-3">
            <InputLabel id="demo-simple-select-label">Your Location</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              //value={age}
              label="Your Location"
              // onChange={handleChange}
            >
              <MenuItem value={10}>Kentucky</MenuItem>
              <MenuItem value={20}>Texas</MenuItem>
              <MenuItem value={30}>Detroit</MenuItem>
            </Select>
          </FormControl>
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
            onClick={proceedToNextStep}
          >
            Next
          </Button>
        </div>
      </Box>
    </div>
  );
};

export default RoleArea;
