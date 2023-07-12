import { Badge, Box, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { FiUser } from "react-icons/fi";
import JSON from "../../../assets/file.json";

const UserD = ({ name, summary, time }) => {
  return (
    <Box p={2}>
      <HStack display="flex" pb={2}>
        <FiUser fontSize={20} color="purple" fontWeight="bold" />
        <Badge fontWeight="400">{name}</Badge>
        <Text fontWeight="400" fontSize="14px" color="tomato">
          ({time})
        </Text>
      </HStack>
      <Text pl={6} fontSize="14px" color="black">
        {summary}
      </Text>
    </Box>
  );
};

function millisToMinutesAndSeconds(millis) {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}
export default function Trans() {
  return (
    <div>
      {JSON.utterances.map((transcript) => {
        return (
          <UserD
            name={`speaker ${transcript.speaker}`}
            summary={transcript.text}
            time={millisToMinutesAndSeconds(transcript.start)}
          />
        );
      })}
    </div>
  );
}
