import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import colorLogo from "../../public/images/rxtrailLogoColor.png";
import largeCircle from "../../public/images/largeCircle.png";
import smallCircle from "../../public/images/smallCircle.png";
import semiCircle from "../../public/images/semiCircle.png";
import rx from "../../public/images/Rx.png";
import BasicInfo1 from "./BasicInfo1";
import BasicInfo2 from "./BasicInfo2";
import RoleArea from "./RoleArea";
import DetailConfirmation from "./DetailConfirmation";

const InfoDetailsLayout = () => {
  const [detailsStepNumber, setDetailsStepNumber] = useState(1);

  const proceedToNextStep = () => {
    setDetailsStepNumber((prev) => prev + 1);
  };
  return (
    <div className="">
      <Grid container className="flex lg:flex-row md:flex-col sm:flex-col ">
        <Grid
          item
          lg={6}
          xl={6}
          className="xl:h-screen lg:h-1/2 md:h-1/2 sm:h-1/2"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            className=""
            style={{
              height: "100%",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <img
              src={colorLogo}
              height={"100px"}
              width={"200px"}
              className="ml-20"
            ></img>

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
        </Grid>
        <Grid
          item
          lg={6}
          xl={6}
          className="xl:h-screen lg:h-1/2 md:h-1/2 sm:h-1/2"
          style={{
            backgroundColor: "#7860F7",
            width: "100%",
            display: "flex",
            alignItems: "center",
            position: "relative",
          }}
        >
          {detailsStepNumber === 1 ? (
            <BasicInfo1 proceedToNextStep={proceedToNextStep} />
          ) : detailsStepNumber === 2 ? (
            <BasicInfo2 proceedToNextStep={proceedToNextStep} />
          ) :detailsStepNumber === 3 ? (
            <RoleArea proceedToNextStep={proceedToNextStep} />
          ) :detailsStepNumber === 4 ? (
            <DetailConfirmation proceedToNextStep={proceedToNextStep} />
          ) :
          null}
          <div style={{ position: "absolute", top: "57%", left: "50%" }}>
            <img src={semiCircle}></img>
          </div>
          <div
            style={{
              position: "absolute",
              top: "70%",
              left: "57%",
              padding: "2rem",
            }}
          >
            <img src={rx}></img>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default InfoDetailsLayout;
