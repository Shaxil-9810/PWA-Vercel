import React from "react";
import brandLogo from "../../public/images/RxTrailLogo.png";
import { Box, Button, Grid, Typography } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Box1Image from "../../public/images/Box1.png";
import Box2Image from "../../public/images/Box2.png";
import Box3Image from "../../public/images/Box3.png";
import { useNavigate } from "react-router-dom";

const GettingStarted = () => {
  const navigate = useNavigate();
  const handleNavigatetoOnboarding=()=>{
    navigate("/sign-up");
  }
  return (
    <div className="h-screen">
      <div className="flex justify-center ">
        <img src={brandLogo} height={"20px"} width={"200px"} style={{marginTop:"4rem"}}></img>
      </div>
      <div className="flex justify-center mt-14">
        <Typography fontWeight={"bold"} color={"white"} fontSize={"2rem"}>
          Getting Started
        </Typography>
      </div>
      <div className="flex justify-center text-center  mt-2  ">
        <Typography fontWeight={"light"} color={"white"} fontSize={"1.5rem"}>
          Our primary purpose is to drive efficiency and progress in healthcare
          by advancing the business of pharmacy.
        </Typography>
      </div>
      <div className="flex md:flex-row sm:flex-col justify-center lg:items-center md:items-center sm:items-center mt-10 m-4">
        <Grid
          container
          spacing={0}
          className="flex justify-center lg:justify-center sm:justify-center md:justify-center lg:items-center md:items-center"
        >
          <Grid
            item
            xs={12}
            md={12}
            lg={4}
            xl={4}
            className="flex items-center lg:justify-end md:justify-center sm:justify-center mt-2"
          >
            <Box
              sx={{
                border: "4.3px solid white",
                width: "26rem",
                height: "23rem",
                borderRadius: "1.09419rem",

              }}
            >
              <div className="flex justify-center pt-10">
                <img src={Box1Image}></img>
              </div>
              <div className="flex flex-col justify-center items-center text-center mt-6">
                <Typography
                  className="text-white"
                  variant="h5"
                  fontWeight="bold"
                >
                  Lorem Ipsum
                </Typography>
                <Typography className="text-white px-4" variant="h6">
                  Our primary purpose is to drive efficiency and progress in
                  healthcare by advancing the business of pharmacy.
                </Typography>
              </div>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={12}
            lg={4}
            xl={4}
            className="flex items-center justify-center mt-2"
          >
            <Box
              sx={{
                border: "4.3px solid white",
                width: "26rem",
                height: "23rem",
                borderRadius: "1.09419rem",
              }}
            >
              <div className="flex justify-center pt-10">
                <img src={Box2Image}></img>
              </div>
              <div className="flex flex-col justify-center items-center text-center mt-6">
                <Typography
                  className="text-white"
                  variant="h5"
                  fontWeight="bold"
                >
                  Lorem Ipsum
                </Typography>
                <Typography className="text-white px-4" variant="h6">
                  Our primary purpose is to drive efficiency and progress in
                  healthcare by advancing the business of pharmacy.
                </Typography>
              </div>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={12}
            lg={4}
            xl={4}
            className=" flex items-center lg:justify-start md:justify-center sm:justify-center mt-2"
          >
            <Box
              sx={{
                border: "4.3px solid white",
                width: "26rem",
                height: "23rem",
                borderRadius: "1.09419rem",
              }}
            >
              <div className="flex justify-center pt-10">
                <img src={Box3Image}></img>
              </div>
              <div className="flex flex-col justify-center items-center text-center mt-6">
                <Typography
                  className="text-white"
                  variant="h5"
                  fontWeight="bold"
                >
                  Lorem Ipsum
                </Typography>
                <Typography className="text-white px-4" variant="h6">
                  Our primary purpose is to drive efficiency and progress in
                  healthcare by advancing the business of pharmacy.
                </Typography>
              </div>
            </Box>
          </Grid>
        </Grid>
      </div>{" "}
      <div className="flex justify-around mt-8 pb-4">
        <Button
          variant="contained"
          className="bg-white"
          size="large"
          onClick={handleNavigatetoOnboarding}
          sx={{
            backgroundColor: "white",
            color: "black",
            borderRadius: "10px",
            fontWeight: "700",
          }}
          endIcon={<KeyboardArrowRightIcon />}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default GettingStarted;
