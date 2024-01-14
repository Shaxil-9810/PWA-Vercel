import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import React from "react";

const BasicInfo2 = ({proceedToNextStep}) => {
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
            Basic Info
          </Typography>
          <Typography className="mt-2">
            Please add your basic info below
          </Typography>
        </div>
        <div className="mt-8">
          <TextField fullWidth placeholder="Date of Birth"></TextField>
          <FormControl fullWidth className="mt-3">
            <InputLabel id="demo-simple-select-label">Select Gender</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              //value={age}
              label="Select Gender"
             // onChange={handleChange}
            >
              <MenuItem value={"male"}>Male</MenuItem>
              <MenuItem value={"female"}>Female</MenuItem>

            </Select>
          </FormControl>
          <TextField fullWidth placeholder="Phone" className="mt-3"></TextField>
          <TextField
            fullWidth
            placeholder="Address"
            className="mt-3"
          ></TextField>
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

export default BasicInfo2;
