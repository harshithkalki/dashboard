import React from "react";
import { HeaderTabs } from "./Navbar2";
import app from "../firebase";
import { getAnalytics } from "firebase/analytics";
import { StatsRing } from "./StatsRing";
// import { HeaderResponsive } from "./navbar";

export const Home = () => {
  // const analytics = getAnalytics(app);
  // console.log(analytics);
  return (
    <>
      {/* <HeaderResponsive links={[]} /> */}
      <HeaderTabs tabs={[]} user={{ name: "kalki", image: null }} />
      <div
        style={{
          display: "block",
          width: "60vw",
          margin: "auto",
          marginTop: "5vh",
          alignItems: "center",
        }}
      >
        <StatsRing
          data={[
            {
              label: "Heartbeat",
              stats: "70",
              progress: 65,
              color: "teal",
              icon: "heart",
            },
            {
              label: "Hydration",
              stats: "0.6",
              progress: 65,
              color: "blue",
              icon: "water",
            },
          ]}
        />
      </div>
    </>
  );
};
