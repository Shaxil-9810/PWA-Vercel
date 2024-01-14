import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import React from "react";

const RoleArea = ({proceedToNextStep}) => {
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
            Select Role and Area
          </Typography>
          <Typography className="mt-2">
            Please add your basic info below
          </Typography>
        </div>
        <div className="mt-8">
        <FormControl fullWidth className="mt-3">
            <InputLabel id="demo-simple-select-label">User Role</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              //value={age}
              label="User Role"
             // onChange={handleChange}
            >
              <MenuItem value={10}>Test 1</MenuItem>
              <MenuItem value={20}>Test 2</MenuItem>
              <MenuItem value={30}>Test 3</MenuItem>
            </Select>
          </FormControl>
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
            variant="contained"
            className="bg-[#252A48]  mt-4"
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
