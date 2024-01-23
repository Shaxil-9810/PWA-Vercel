import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useFormik } from "formik";
import React, { useState } from "react";
import { companySchema, signupSchema } from "../Yup";
import { useDispatch } from "react-redux";
import { signUp } from "../store/actions/UserActions";
const initialValues = {
  companyName: "",
  companyAddress: "",
  companyPhone: "",
  companyWebsite: "",
};
const usaStates = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];
const zipCodesByCity = {
  Birmingham: "35201",
  Montgomery: "36101",
  Mobile: "36601",
  Anchorage: "99501",
  Fairbanks: "99701",
  Juneau: "99801",
  Phoenix: "85001",
  Tucson: "85701",
  Mesa: "85201",
  "Little Rock": "72201",
  "Fort Smith": "72901",
  Fayetteville: "72701",
  "Los Angeles": "90001",
  "San Francisco": "94102",
  "San Diego": "92101",
  Denver: "80202",
  "Colorado Springs": "80901",
  Aurora: "80010",
  Bridgeport: "06601",
  "New Haven": "06501",
  Hartford: "06101",
  Wilmington: "19801",
  Dover: "19901",
  Newark: "07101",
  Miami: "33101",
  Tampa: "33601",
  Orlando: "32801",
  Atlanta: "30301",
  Savannah: "31401",
  Augusta: "30901",
  Honolulu: "96801",
  Maui: "96701",
  Kauai: "96701",
  Boise: "83701",
  Nampa: "83601",
  Meridian: "83642",
  Chicago: "60601",
  Springfield: "62701",
  Peoria: "61601",
  Indianapolis: "46201",
  "Fort Wayne": "46801",
  Evansville: "47701",
  "Des Moines": "50301",
  "Cedar Rapids": "52401",
  Davenport: "52801",
  Wichita: "67201",
  "Overland Park": "66201",
  "Kansas City": "66101",
  Louisville: "40201",
  Lexington: "40502",
  "Bowling Green": "42101",
  "New Orleans": "70112",
  "Baton Rouge": "70801",
  Shreveport: "71101",
  Portland: "97201",
  Eugene: "97401",
  Salem: "97301",
  Philadelphia: "19102",
  Pittsburgh: "15201",
  Allentown: "18101",
  Providence: "02901",
  Warwick: "02886",
  Cranston: "02910",
  Charleston: "25301",
  Columbia: "29201",
  Greenville: "29601",
  "Sioux Falls": "57101",
  "Rapid City": "57701",
  Aberdeen: "57401",
  Nashville: "37201",
  Memphis: "38103",
  Knoxville: "37901",
  Houston: "77001",
  Dallas: "75201",
  Austin: "73301",
  "Salt Lake City": "84101",
  "West Valley City": "84119",
  Provo: "84601",
  Burlington: "05401",
  Essex: "05452",
  Rutland: "05701",
  "Virginia Beach": "23450",
  Norfolk: "23502",
  Richmond: "23218",
  Seattle: "98101",
  Spokane: "99201",
  Tacoma: "98401",

  Huntington: "25701",
  Morgantown: "26501",
  Milwaukee: "53201",
  Madison: "53703",
  "Green Bay": "54301",
  Cheyenne: "82001",
  Casper: "82601",
  Laramie: "82070",
  // ... (add more cities and zip codes as needed)
};

// Create an object to map states to cities
const citiesByState = {
  Alabama: ["Birmingham", "Montgomery", "Mobile"],
  Alaska: ["Anchorage", "Fairbanks", "Juneau"],
  Arizona: ["Phoenix", "Tucson", "Mesa"],
  Arkansas: ["Little Rock", "Fort Smith", "Fayetteville"],
  California: ["Los Angeles", "San Francisco", "San Diego"],
  Colorado: ["Denver", "Colorado Springs", "Aurora"],
  Connecticut: ["Bridgeport", "New Haven", "Hartford"],
  Delaware: ["Wilmington", "Dover", "Newark"],
  Florida: ["Miami", "Tampa", "Orlando"],
  Georgia: ["Atlanta", "Savannah", "Augusta"],
  Hawaii: ["Honolulu", "Maui", "Kauai"],
  Idaho: ["Boise", "Nampa", "Meridian"],
  Illinois: ["Chicago", "Springfield", "Peoria"],
  Indiana: ["Indianapolis", "Fort Wayne", "Evansville"],
  Iowa: ["Des Moines", "Cedar Rapids", "Davenport"],
  Kansas: ["Wichita", "Overland Park", "Kansas City"],
  Kentucky: ["Louisville", "Lexington", "Bowling Green"],
  Louisiana: ["New Orleans", "Baton Rouge", "Shreveport"],
  Maine: ["Portland", "Lewiston", "Bangor"],
  Maryland: ["Baltimore", "Annapolis", "Frederick"],
  Massachusetts: ["Boston", "Worcester", "Springfield"],
  Michigan: ["Detroit", "Grand Rapids", "Lansing"],
  Minnesota: ["Minneapolis", "Saint Paul", "Rochester"],
  Mississippi: ["Jackson", "Gulfport", "Hattiesburg"],
  Missouri: ["Kansas City", "St. Louis", "Springfield"],
  Montana: ["Billings", "Missoula", "Great Falls"],
  Nebraska: ["Omaha", "Lincoln", "Bellevue"],
  Nevada: ["Las Vegas", "Henderson", "Reno"],
  "New Hampshire": ["Manchester", "Nashua", "Concord"],
  "New Jersey": ["Newark", "Jersey City", "Paterson"],
  "New Mexico": ["Albuquerque", "Las Cruces", "Santa Fe"],
  "New York": ["New York City", "Buffalo", "Rochester"],
  "North Carolina": ["Charlotte", "Raleigh", "Greensboro"],
  "North Dakota": ["Fargo", "Bismarck", "Grand Forks"],
  Ohio: ["Columbus", "Cleveland", "Cincinnati"],
  Oklahoma: ["Oklahoma City", "Tulsa", "Norman"],
  Oregon: ["Portland", "Eugene", "Salem"],
  Pennsylvania: ["Philadelphia", "Pittsburgh", "Allentown"],
  "Rhode Island": ["Providence", "Warwick", "Cranston"],
  "South Carolina": ["Charleston", "Columbia", "Greenville"],
  "South Dakota": ["Sioux Falls", "Rapid City", "Aberdeen"],
  Tennessee: ["Nashville", "Memphis", "Knoxville"],
  Texas: ["Houston", "Dallas", "Austin"],
  Utah: ["Salt Lake City", "West Valley City", "Provo"],
  Vermont: ["Burlington", "Essex", "Rutland"],
  Virginia: ["Virginia Beach", "Norfolk", "Richmond"],
  Washington: ["Seattle", "Spokane", "Tacoma"],
  "West Virginia": ["Charleston", "Huntington", "Morgantown"],
  Wisconsin: ["Milwaukee", "Madison", "Green Bay"],
  Wyoming: ["Cheyenne", "Casper", "Laramie"],
  "Puerto Rico": ["San Juan", "Bayamon", "Ponce"],
  Guam: ["Hagåtña", "Tamuning", "Mangilao"],
  "U.S. Virgin Islands": ["Charlotte Amalie", "Christiansted", "Frederiksted"],
  "Northern Mariana Islands": ["Saipan", "Garapan", "San Roque"],
  "American Samoa": ["Pago Pago", "Tafuna", "Nuuuli"],
};

const CitySelect = ({
  selectedState,
  selectedCity,
  onCityChange,
  onStateChange,
  selectedZipCode,
  onZipCodeChange,
}) => {
  const handleStateChange = (event) => {
    const newState = event.target.value;
    onStateChange(newState);
    onCityChange(""); // Reset city when state changes
    onZipCodeChange(""); // Reset zip code when state changes
  };

  const handleCityChange = (event) => {
    const newCity = event.target.value;
    onCityChange(newCity);
    onZipCodeChange(zipCodesByCity[newCity] || ""); // Set zip code based on city
  };
  console.log(selectedZipCode);
  return (
    <>
      <FormControl fullWidth className="mt-3">
        <InputLabel id="demo-simple-select-label">State</InputLabel>
        <Select
          className=""
          fullWidth
          label="State"
          value={selectedState}
          onChange={handleStateChange}
        >
          <MenuItem disabled>Please Select your state</MenuItem>
          {usaStates.map((state) => (
            <MenuItem key={state} value={state}>
              {state}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth className="mt-3">
        <InputLabel id="demo-simple-select-label">City</InputLabel>
        <Select
          fullWidth
          label="City"
          value={selectedCity}
          onChange={handleCityChange}
          disabled={!selectedState}
        >
          {citiesByState[selectedState] &&
            citiesByState[selectedState].map((city) => (
              <MenuItem key={city} value={city}>
                {city}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
      <TextField
        className="mt-3"
        fullWidth
        label="Zip Code"
        value={selectedZipCode}
        onChange={(e) => onZipCodeChange(e.target.value)}
        disabled={!selectedCity}
      />
    </>
  );
};

const InputDetails = ({ proceedToNextStep, goToPrevStep, role }) => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [confirmShowPassword, setConfirmShowPassword] = useState(false);
  const [selectedState, setSelectedState] = React.useState("");
  const [selectedCity, setSelectedCity] = React.useState("");
  const [selectedZipCode, setSelectedZipCode] = React.useState("");

  const handleStateChange = (state) => {
    setSelectedState(state);
  };

  const handleCityChange = (city) => {
    setSelectedCity(city);
  };
  const handleZipCodeChange = (zipCode) => {
    setSelectedZipCode(zipCode);
  };
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleToggleConfirmPasswordVisibility = () => {
    setConfirmShowPassword(!confirmShowPassword);
  };

  const Formik = useFormik({
    initialValues: { initialValues },
    validationSchema: companySchema,

    onSubmit: async (values) => {
      console.log(values);
      dispatch(signUp(values.email));
      proceedToNextStep();
    },
  });

  return (
    <div className="z-10">
      <Box
        className="p-6 m-2 h-[40rem]  w-[22rem] lg:h-auto lg:w-[48rem] lg:m-0 lg:p-8 lg:ml-24 md:w-[24rem]  "
        sx={{
          borderRadius: "15px",
          backgroundColor: "white",
        }}
      >
        <div>
          <Typography className="text-4xl text-[#252A48] font-bold ml-2">
            Corporate Information
          </Typography>
          <Typography className="mt-2 ml-2">
            At the Core: Exploring Organizational Dynamics
          </Typography>
        </div>
        <div className="h-[30rem] lg:h-auto overflow-auto">
          <div className="flex flex-col lg:flex-row  ">
            <div className="mt-4 p-2 lg:w-1/2">
              <TextField
                label="Company Name"
                fullWidth
                placeholder="Company Name"
                className="mt-3"
                name="companyName"
                defaultValue={Formik.values.companyName}
                onChange={Formik.handleChange}
                onBlur={Formik.handleBlur}
                error={Formik.errors.companyName && Formik.touched.companyName}
                helperText={
                  Formik.errors.companyName && Formik.touched.companyName
                    ? Formik.errors.companyName
                    : null
                }
              />
              <TextField
                label="Company Phone"
                fullWidth
                placeholder="Company Phone"
                className="mt-3"
                name="companyPhone"
                defaultValue={Formik.values.companyPhone}
                onChange={Formik.handleChange}
                onBlur={Formik.handleBlur}
                error={
                  Formik.errors.companyPhone && Formik.touched.companyPhone
                }
                helperText={
                  Formik.errors.companyPhone && Formik.touched.companyPhone
                    ? Formik.errors.companyPhone
                    : null
                }
              />
              <TextField
                label="Company Address"
                fullWidth
                placeholder="Company Address"
                className="mt-3"
                name="companyAddress"
                defaultValue={Formik.values.companyAddress}
                onChange={Formik.handleChange}
                onBlur={Formik.handleBlur}
                error={
                  Formik.errors.companyAddress && Formik.touched.companyAddress
                }
                helperText={
                  Formik.errors.companyAddress && Formik.touched.companyAddress
                    ? Formik.errors.companyAddress
                    : null
                }
              />
              <TextField
                label="Company Website Link"
                fullWidth
                placeholder="Company Website Link"
                className="mt-3"
                name="companyWebsite"
                defaultValue={Formik.values.companyWebsite}
                onChange={Formik.handleChange}
                onBlur={Formik.handleBlur}
                error={
                  Formik.errors.companyWebsite && Formik.touched.companyWebsite
                }
                helperText={
                  Formik.errors.companyWebsite && Formik.touched.companyWebsite
                    ? Formik.errors.companyWebsite
                    : null
                }
              />
            </div>
            <div className="mt-4 p-2 lg:w-1/2">
              <>
                <CitySelect
                  selectedState={selectedState}
                  selectedCity={selectedCity}
                  selectedZipCode={selectedZipCode}
                  onStateChange={handleStateChange}
                  onZipCodeChange={handleZipCodeChange}
                  onCityChange={handleCityChange}
                />
                <FormControl fullWidth className="mt-3">
                  <InputLabel id="demo-simple-select-label">Role</InputLabel>
                  <Select
                    name="role"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    //value={age}
                    label="Role"
                    onChange={Formik.handleChange}
                    onBlur={Formik.handleBlur}
                    error={
                      Formik.errors.companyWebsite &&
                      Formik.touched.companyWebsite
                    }
                    helperText={
                      Formik.errors.companyWebsite &&
                      Formik.touched.companyWebsite
                        ? Formik.errors.companyWebsite
                        : null
                    }
                  >
                    <MenuItem value={10}>Admin</MenuItem>
                    <MenuItem value={20}>CFO</MenuItem>
                    <MenuItem value={30}>Owner</MenuItem>
                    <MenuItem value={30}>Customer</MenuItem>
                  </Select>
                </FormControl>
              </>
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
              disabled={!Formik.isValid || !Formik.dirty}
              onClick={Formik.handleSubmit}
              //
            >
              Proceed
            </Button>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default InputDetails;
