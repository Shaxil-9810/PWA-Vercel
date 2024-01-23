import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const DetailConfirmation = ({ proceedToNextStep, goToPrevStep }) => {
  const [edit, setEdit] = useState(false);
  const navigate = useNavigate();
  const handleEdit = () => {
    setEdit(!edit);
  };
  const values = {
    someDate: "2000-01-05",
  };
  return (
    <div className="z-10">
      <Box
        className="p-6 m-2 w-[23.5rem] lg:w-[38rem] lg:m-0 lg:p-8 lg:ml-24 md:w-auto md:p-6 md:m-0"
        sx={{
          borderRadius: "15px",
          backgroundColor: "white",
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
        <Grid container className="flex">
          <Grid item xs={4}>
            <div className="mt-8 ">
              <Typography className="mt-4 text-xl">Email: </Typography>
              <Typography className="mt-4 text-xl">Password:</Typography>
              <Typography className="mt-4 text-xl">Full Name:</Typography>

              <Typography className="mt-4 text-xl">DOB: </Typography>
              <Typography className="mt-4 text-xl">Gender: </Typography>
              <Typography className="mt-4 text-xl">Role:</Typography>

              <Typography className="mt-4 text-xl">Phone: </Typography>
              <Typography className="mt-4 text-xl">Address:</Typography>
            </div>
          </Grid>
          <Grid item xs={8}>
            <div className="mt-8 ">
              {edit ? (
                <TextField
                  disabled={true}
                  variant="standard"
                  className={`${edit ? "" : "mt-2"}`}
                  size="small"
                  fullWidth
                  defaultValue="James@abc.com"
                />
              ) : (
                <Typography className="mt-4 text-l">James@abc.com</Typography>
              )}

              {edit ? (
                <TextField
                  disabled={true}
                  variant="standard"
                  className={`${edit ? "mt-3" : "mt-2"}`}
                  size="small"
                  fullWidth
                  defaultValue="*********"
                />
              ) : (
                <Typography className="mt-4 text-l">*********</Typography>
              )}

              {edit ? (
                <TextField
                  variant="standard"
                  className={`${edit ? "mt-3" : "mt-2"}`}
                  size="small"
                  fullWidth
                  defaultValue="James Williams"
                />
              ) : (
                <Typography className={"mt-4 text-xl"}>
                  James Williams
                </Typography>
              )}

              {edit ? (
                <TextField
                  fullWidth
                  variant="standard"
                  name="someDate"
                  className="mt-3"
                  InputLabelProps={{ shrink: true, required: true }}
                  type="date"
                  defaultValue={values.someDate}
                />
              ) : (
                <Typography className="mt-4 text-xl">01/05/2000</Typography>
              )}
              {edit ? (
                <FormControl fullWidth className="mt-3">
                  <Select
                    variant="standard"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    defaultValue={10}
                    //value={age}

                    // onChange={handleChange}
                  >
                    <MenuItem value={10} default>
                      Customer
                    </MenuItem>
                    <MenuItem value={20}>CFO</MenuItem>
                    <MenuItem value={30}>Admin</MenuItem>
                  </Select>
                </FormControl>
              ) : (
                <Typography className="mt-4 text-xl">Male</Typography>
              )}
              {edit ? (
                <FormControl fullWidth className="mt-3">
                  <Select
                    variant="standard"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    defaultValue={10}
                    //value={age}

                    // onChange={handleChange}
                  >
                    <MenuItem value={10} default>
                      Internal RxTrail Consulting Team
                    </MenuItem>
                    <MenuItem value={20}>CFO</MenuItem>
                    <MenuItem value={30}>Admin</MenuItem>
                  </Select>
                </FormControl>
              ) : (
                <Typography className="mt-4 text-xl">
                  Internal RxTrail Consulting Team
                </Typography>
              )}
              {edit ? (
                <TextField
                  variant="standard"
                  className="mt-4 "
                  size="small"
                  fullWidth
                  defaultValue="+1 224 215767"
                />
              ) : (
                <Typography className="mt-4 text-xl">+1 224 215767</Typography>
              )}
              {edit ? (
                <TextField
                  variant="standard"
                  className="mt-4 "
                  size="small"
                  fullWidth
                  defaultValue="750 M Salt Lake City, 100 California, US"
                />
              ) : (
                <Typography className="mt-4 text-xl">
                  750 M Salt Lake City, 100 California, US
                </Typography>
              )}
            </div>
          </Grid>
        </Grid>

        <div>
          <Button
            variant="outlined"
            className="mt-4"
            size="large"
            onClick={handleEdit}
          >
            {edit ? "Cancel" : "Edit"}
          </Button>
          <Button
            variant="contained"
            className="bg-[#252A48]  mt-4 ml-2"
            size="large"
            //onClick={() => navigate("/login")}
          >
            {edit ? "Save & Submit" : "Submit"}
          </Button>
        </div>
      </Box>
    </div>
  );
};

export default DetailConfirmation;
