import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import colorLogo from "../../public/images/rxtrailLogoColor.png";
import largeCircle from "../../public/images/largeCircle.png";
import smallCircle from "../../public/images/smallCircle.png";
import semiCircle from "../../public/images/semiCircle.png";
import rx from "../../public/images/Rx.png";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginBox from "./LoginBox";
import UserAuth from "./UserAuth";
import Enable2FA from "./Enable2FA";
import ProtectedRoute from "../RouteProtection/ProtectedRoute";

const LoginLayout = () => {
  const [detailsStepNumber, setDetailsStepNumber] = useState(1);

  const proceedToNextStep = () => {
    setDetailsStepNumber((prev) => prev + 1);
  };
  return (
    <div className="">
      <Grid container className="h-screen flex">
        <Grid
          className="flex-col"
          item
          lg={6}
          xl={6}
          xs={12}
          style={{
            display: "flex",
            // height: "100%",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            className="flex flex-row lg:flex-col "
            style={{
              height: "100%",
              width: "100%",
              //   display: "flex",
              //   flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div className="">
              <img
                src={colorLogo}
                height={"100px"}
                width={"200px"}
                className="ml-0 p-4 lg:ml-20 lg:p-0"
              ></img>
            </div>

            <div className="hidden lg:block">
              <Typography
                variant="h5"
                className="pl-20 pt-10 text-[#252A48]"
                fontWeight={"bold"}
              >
                Getting Started !
              </Typography>
              <Typography className="pl-20 pt-4 text-[#252A48]" variant="h6">
                Our primary purpose is to drive efficiency and progress in
                healthcare by advancing the business of pharmacy.
              </Typography>
              <div className="flex pl-20 pt-4">
                <img className="m-1" src={smallCircle}></img>
                <img className="m-1" src={largeCircle}></img>
                <img className="m-1" src={largeCircle}></img>
              </div>
            </div>
          </div>
        </Grid>
        <Grid
          item
          lg={6}
          xl={6}
          sm={12}
          style={{
            backgroundColor: "#7860F7",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            position: "relative",
          }}
        >
          <Routes>
            <Route path="/" element={<LoginBox />} />
            <Route
              path="/auth"
              element={
                <ProtectedRoute>
                  <UserAuth />
                </ProtectedRoute>
              }
            />
            <Route
              path="/enable-2fa"
              element={
                <ProtectedRoute>
                  <Enable2FA />
                </ProtectedRoute>
              }
            />
          </Routes>

          {/* //   <BasicInfo2 proceedToNextStep={proceedToNextStep} />
          // ) : detailsStepNumber === 3 ? (
          //   <RoleArea proceedToNextStep={proceedToNextStep} />
          // ) : detailsStepNumber === 4 ? (
          //   <DetailConfirmation proceedToNextStep={proceedToNextStep} />
          // ) */}
          <div
            className="absolute top-[81%] left-[50%] lg:top-[57%] lg:left-[50%]  "
            // style={{ position: "absolute", top: "57%", left: "50%" }}
          >
            <img src={semiCircle}></img>
          </div>
          <div className="absolute p-8 top-[84%] left-[55%] lg:top-[68%] lg:left-[55%] lg:p-8 ">
            <img src={rx}></img>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default LoginLayout;

