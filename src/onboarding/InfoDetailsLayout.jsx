import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import colorLogo from "../../public/images/rxtrailLogoColor.png";
import largeCircle from "../../public/images/largeCircle.png";
import smallCircle from "../../public/images/smallCircle.png";
import semiCircle from "../../public/images/semiCircle.png";
import rx from "../../public/images/Rx.png";
import BasicInfo1 from "./SignUpForm";
import BasicInfo2 from "./UserDetails";
import RoleArea from "./RoleArea";
import DetailConfirmation from "./DetailConfirmation";
import ContactDetails from "./ContactDetails";

const InfoDetailsLayout = () => {
  const [detailsStepNumber, setDetailsStepNumber] = useState(2);

  const goToPrevStep = () => {
    // alert("back")
    setDetailsStepNumber((prev) => prev - 1);
  };

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
              <Typography
                className="pl-20 pt-4 pr-20 text-[#252A48]"
                variant="h6"
              >
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
          {detailsStepNumber === 2 ? (
            <BasicInfo2
              proceedToNextStep={proceedToNextStep}
              goToPrevStep={goToPrevStep}
            />
          ) : detailsStepNumber === 3 ? (
            <ContactDetails
              proceedToNextStep={proceedToNextStep}
              goToPrevStep={goToPrevStep}
            />
          ) : detailsStepNumber === 4 ? (
            <RoleArea
              proceedToNextStep={proceedToNextStep}
              goToPrevStep={goToPrevStep}
            />
          ) : detailsStepNumber === 5 ? (
            <DetailConfirmation
              proceedToNextStep={proceedToNextStep}
              goToPrevStep={goToPrevStep}
            />
          ) : null}
          <div
            className="absolute top-[81%] left-[50%] lg:top-[57%] md:top-[] lg:left-[50%]  "
            // style={{ position: "absolute", top: "57%", left: "50%" }}
          >
            <img src={semiCircle}></img>
          </div>
          <div className="absolute p-8 top-[84%] left-[55%] lg:top-[68%] md:top-[75%] lg:left-[55%] lg:p-8 ">
            <img src={rx}></img>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default InfoDetailsLayout;
