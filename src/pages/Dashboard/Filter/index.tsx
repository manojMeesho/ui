import { Badge, Box } from "@chakra-ui/react";
import React from "react";
import JSON from "../../../assets/file.json";

const countAna = () => {
  return JSON.sentiment_analysis_results.reduce((acc, data) => {
    if (acc[data.sentiment]) {
      acc[data.sentiment] += 1;
    } else {
      acc[data.sentiment] = 1;
    }
    return acc;
  }, {} as any);
};
const senColor = { POSITIVE: "green", NEGATIVE: "tomato", NEUTRAL: "#6e75ff" };
export default function Filter() {
  const sentiment = countAna();
  const l = JSON.sentiment_analysis_results.length;
  return (
    <Box>
      {Object.keys(sentiment).map((key) => {
        return (
          <Badge color={senColor[key]} p={4} borderRadius="5px" m={1}>
            {key}
            {"  "}
            {Math.floor((sentiment[key] / l) * 100)}%
          </Badge>
        );
      })}
    </Box>
  );
}
