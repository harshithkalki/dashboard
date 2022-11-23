import React from "react";
// import { HeaderTabs } from "./components/Navbar2";
import { HeaderResponsive } from "./components/navbar";

function App() {
  return (
    <div className="App">
      <HeaderResponsive
        links={[
          { link: "home", label: "home" },
          { link: "/home", label: "Profile" },
          { link: "/login", label: "logout" },
        ]}
      />
      {/* <HeaderTabs tabs={[]} user={{ name: "kalki", image: null }} /> */}
    </div>
  );
}

export default App;
