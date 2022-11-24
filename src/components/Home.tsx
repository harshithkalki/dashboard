import React from "react";
import { HeaderTabs } from "./Navbar2";
import app from "../firebase";
import { getAnalytics } from "firebase/analytics";
// import { HeaderResponsive } from "./navbar";

export const Home = () => {
  // const analytics = getAnalytics(app);
  // console.log(analytics);
  return (
    <>
      {/* <HeaderResponsive links={[]} /> */}
      <HeaderTabs tabs={[]} user={{ name: "kalki", image: null }} />
    </>
  );
};
