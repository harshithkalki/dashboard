import {
  Center,
  Group,
  Paper,
  RingProgress,
  SimpleGrid,
  Text,
} from "@mantine/core";
import { IconMoodAngry, IconMoodSad, IconMoodSmileBeam } from "@tabler/icons";

interface props {
  mood: "Happy" | "Sad" | "Anger";
}
const color = {
  Happy: "green",
  Anger: "red",
  Sad: "#FFEA00",
};
const icons = {
  Happy: IconMoodSmileBeam,
  Anger: IconMoodAngry,
  Sad: IconMoodSad,
};

export function Mood2({ mood }: props) {
  const Icon = icons?.[mood];
  return (
    <SimpleGrid cols={2} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
      <Paper>
        <Group>
          <RingProgress
            label={
              <Text size="xs" align="center">
                <Center>
                  <Icon size={35} stroke={2} />
                </Center>
              </Text>
            }
            roundCaps
            sections={[{ value: 100, color: color?.[mood] }]}
          />
          <div>
            <Text color="dimmed" size="xs" transform="uppercase" weight={700}>
              {"Emotional State"}
            </Text>
            <Text weight={700} size="xl">
              {mood}
            </Text>
          </div>
        </Group>
      </Paper>
    </SimpleGrid>
  );
}
