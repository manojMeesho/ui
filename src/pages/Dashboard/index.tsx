import { Box, HStack, Input, Spacer, Text, useColorModeValue } from "@chakra-ui/react";
import { AccordianArea } from "../../components/Accordian";
import { Player } from "./AudioPlayer";
import Filter from "./Filter";
import Sidebar from "./Sidebar";
import Summary from "./Summary";
import Trans from "./Transcript";

export default function Dashboard() {
  return (
    <Box bg={useColorModeValue("white", "gray.900")} height="calc(100vh - 65px)" display="flex" flexDirection="column">
      <HStack p={3}>
        <Text fontWeight="bold" fontSize="14px" lineHeight="20px" color="tomato">
          rVideo.mp3
        </Text>
        <Spacer />
        <Input type="text" placeholder="Search for transript" />
      </HStack>
      <Box display="flex" flexDirection="row" height="650px">
        <Sidebar topic="Analysis">
          <AccordianArea title="Sentiments">
            <Filter />
          </AccordianArea>
          <AccordianArea title="Speaker analysis">
            <h3>Sentiments are here: asd</h3>
          </AccordianArea>
          <AccordianArea title="Topic match">
            <h3>Sentiments are here: asd</h3>
          </AccordianArea>
        </Sidebar>
        <Sidebar topic="Summary">
          <Summary />
        </Sidebar>
        <Sidebar topic="Transcript">
          <Trans />
        </Sidebar>

        {/* <AddEditRequest /> */}
      </Box>
      <Player />
    </Box>
  );
}
