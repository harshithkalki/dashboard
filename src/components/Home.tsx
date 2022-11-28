import React, { useEffect, useState } from "react";
import { HeaderTabs } from "./Navbar2";
import { db } from "../firebase";
import { StatsRing } from "./StatsRing";
import { ref, onValue } from "firebase/database";
import { Container, SimpleGrid } from "@mantine/core";
import { Mood2 } from "./Mood2";
interface LatestData {
  "Emotional State":
    | "Happy"
    | "Sad"
    | "Anger"
    | "Disgust"
    | "Fear"
    | "Mixed"
    | "Neutral"
    | "Surprise";
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

      <Container style={{ marginTop: "6vh" }}>
        <SimpleGrid cols={1} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
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
                progress: (lastData?.["Hydration Status"] / 1.029) * 100,
                color: "blue",
                icon: "water",
              },
            ]}
          />
          <Mood2 mood={lastData?.["Emotional State"]} />
        </SimpleGrid>
      </Container>
    </>
  );
};
