import React, { useEffect, useState } from "react";
import { HeaderTabs } from "./Navbar2";
import { db } from "../firebase";
import { StatsRing } from "./StatsRing";
import { ref, onValue } from "firebase/database";
import { Center, Container, SimpleGrid, Text } from "@mantine/core";
import { Mood2 } from "./Mood2";
import { Graph2 } from "./Graph2";
// import { Graph } from "./Graph";
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
interface Graphdata {
  index: number;
  data: number;
}

export const Home = () => {
  const [HeartData, setHeartData] = useState<Graphdata>();
  const [HydrationData, setHydrationData] = useState([]);
  const [lastData, setLastData] = useState<LatestData>({
    "Emotional State": "Happy",
    "Hydration Status": 0.2,
    Heartbeat: 60,
  });

  useEffect(() => {
    const dbref = ref(db, "John");
    onValue(dbref, (snapshot) => {
      const data = snapshot.val();
      setLastData(data[data.length - 1]);
      // console.log(Array.from(data));
      const Heartdata = data.map((user: LatestData, index: number) => {
        if (user) return { index: index, data: user.Heartbeat };
      });
      setHeartData(Heartdata);
      const Hydreationdata = data.map((user: LatestData, index: number) => {
        if (user) return { index: index, data: user["Hydration Status"] };
      });
      setHydrationData(Hydreationdata);
    });
  }, []);
  // console.log(HeartData);
  // console.log(HydrationData);

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

      {HeartData && (
        <Container maw="600px" mt="10vh">
          <Graph2 data={HeartData} />
          <Center>
            <Text color="dimmed" size="md" transform="uppercase" weight={700}>
              HeartBeat
            </Text>
          </Center>
        </Container>
      )}

      {HydrationData && (
        <Container maw="600px" mt="10vh" mb="15vh">
          <Graph2 data={HydrationData} />
          <Center>
            <Text color="dimmed" size="md" transform="uppercase" weight={700}>
              Hydration
            </Text>
          </Center>
        </Container>
      )}
    </>
  );
};
