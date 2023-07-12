import { Badge, Box, Text } from "@chakra-ui/react";
import JSON from "../../../assets/file.json";

function Sumary({ text }) {
  return (
    <Box p={2}>
      <Text pl={6} fontSize="14px" color="black">
        {text}
      </Text>
    </Box>
  );
}
const colors = [
  "tomato",
  "blue",
  "purple",
  "green",
  "teal",
  "grey",
  "slateBlue",
  "Violet",
  "MediumSeaGreen",
];
export default function Summary() {
  return (
    <Box p={2} overflow="scroll" height="600px">
      <Box>
        <Text>Highlight</Text>
        <Box p={2}>
          {JSON.auto_highlights_result.results.map((sum, index) => {
            return (
              <Badge color={colors[index % colors.length]} m={1}>
                {sum.text}
              </Badge>
            );
          })}
        </Box>
      </Box>
      <Box>
        <Text>Ai Summary</Text>
        {JSON.summary.split("\n").map((sum, index) => {
          return <Sumary text={sum.replaceAll("-", `${index + 1}. `)} />;
        })}
      </Box>
    </Box>
  );
}
