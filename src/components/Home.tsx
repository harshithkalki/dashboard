import React, { useEffect, useState } from "react";
import { HeaderTabs } from "./Navbar2";
import { db } from "../firebase";
import { StatsRing } from "./StatsRing";
import { ref, onValue } from "firebase/database";
import { Mood } from "./Mood";
import { Center } from "@mantine/core";
import { Mood2 } from "./Mood2";
// import { HeaderResponsive } from "./navbar";

interface LatestData {
  "Emotional State": "Happy" | "Sad" | "Anger";
  Heartbeat: number;
  "Hydration Status": number;
}

export const Home = () => {
  const [userData, setUserData] = useState([]);
  const [lastData, setLastData] = useState<LatestData>({
    "Emotional State": "Happy",
    "Hydration Status": 0.2,
    Heartbeat: 60,
  });
  useEffect(() => {
    const dbref = ref(db, "John");
    onValue(dbref, (snapshot) => {
      snapshot.val();
      const data = snapshot.val();

      console.log(snapshot.val());
      setUserData(data);
      setLastData(data[data.length - 1]);
      // console.log(data[data.length - 1].Heartbeat);
    });
  }, []);

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
              stats: `${lastData?.Heartbeat}`,
              progress: (lastData?.Heartbeat / 180) * 100,
              color: "teal",
              icon: "heart",
            },
            {
              label: "Hydration",
              stats: `${lastData?.["Hydration Status"]}`,
              progress: lastData?.["Hydration Status"] * 100,
              color: "blue",
              icon: "water",
            },
          ]}
        />
      </div>
      <Center style={{ marginTop: "10vh" }}>
        <Mood mood={lastData?.["Emotional State"]} />
      </Center>
      <Center style={{ marginTop: "10vh" }}>
        <Mood2 mood={lastData?.["Emotional State"]} />
      </Center>
    </>
  );
};
