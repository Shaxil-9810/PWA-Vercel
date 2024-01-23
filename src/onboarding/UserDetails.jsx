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
import { useFormik } from "formik";
import { onBoardingSchema, signupSchema } from "../Yup";

const initialValues = {
  firstName: "",
  lastName: "",
  phone: "",
  address: "",
};
const BasicInfo2 = ({ proceedToNextStep, goToPrevStep, role }) => {
  const Formik = useFormik({
    initialValues: { initialValues },
    validationSchema: onBoardingSchema,

    onSubmit: async (values) => {
      console.log(values);
      dispatch(signUp(values.email));
      proceedToNextStep();
    },
  });
  return (
    <div className="z-10">
      <Box
        className="p-6 m-2 w-[22rem] lg:w-[48rem] lg:m-0 lg:p-8 lg:ml-24 md:w-[24rem]   "
        sx={{
          borderRadius: "15px",
          backgroundColor: "white",
        }}
      >
        <div>
          <Typography className="text-4xl text-[#252A48] font-bold ml-2">
            {role === "user"
              ? "Getting to Know You Better."
              : "More About Your Organization"}
          </Typography>
          <Typography className="mt-2 ml-2">
            {role === "user"
              ? "Unlocking the Layers: Getting to Know You Better"
              : ""}
          </Typography>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="mt-4 p-2 lg:w-1/2">
            <TextField
              label="First Name"
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
              label="Phone"
              fullWidth
              placeholder="Phone"
              className="mt-3"
              name="phone"
              defaultValue={Formik.values.phone}
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
              error={Formik.errors.phone && Formik.touched.phone}
              helperText={
                Formik.errors.phone && Formik.touched.phone
                  ? Formik.errors.phone
                  : null
              }
            />
            {/* <FormControl fullWidth className="mt-3">
              <InputLabel id="role-label">Role</InputLabel>
              <Select
                labelId="role-label"
                label="Role"
                id="role"
                name="role"
                value={Formik.values.role}
                onChange={Formik.handleChange}
                onBlur={Formik.handleBlur}
                error={Formik.errors.role && Formik.touched.role}
                renderValue={(selected) => selected || "Select Role"}
              >
                <MenuItem value="" disabled>
                  Select Role
                </MenuItem>
                <MenuItem value="admin">Admin</MenuItem>
                <MenuItem value="user">User</MenuItem>

              </Select>
            </FormControl> */}
          </div>
          <div className="mt-4 p-2 lg:w-1/2">
            <TextField
              label="Last Name"
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
            />


            <TextField
              label="Address"
              fullWidth
              placeholder="Address"
              className="mt-3"
              name="address"
              defaultValue={Formik.values.address}
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
              error={Formik.errors.address && Formik.touched.address}
              helperText={
                Formik.errors.address && Formik.touched.address
                  ? Formik.errors.address
                  : null
              }
            />
          </div>
        </div>

        <div>
          <Button
            variant="outlined"
            className="mt-4 ml-2"
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
            // disabled={!Formik.isValid || !Formik.dirty}
            // onClick={Formik.handleSubmit}
            //
          >
            Proceed
          </Button>
        </div>
      </Box>
    </div>
  );
};

export default BasicInfo2;
