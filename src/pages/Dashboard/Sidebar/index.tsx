import React, { useState } from "react";
import { Box, Divider, HStack, Text } from "@chakra-ui/react";
import OutlineButton from "../../../components/Button/outline";

export default function Sidebar({ topic, children }) {
  return (
    <Box width="40%" minWidth="200px" maxWidth="500px" color="grey" border="1px solid #EBEBEB">
      <Box display="flex" flexDirection="column" sx={{ height: "60px" }} padding="12px" justifyContent="space-around">
        <Text fontWeight="bold" fontSize="16px" lineHeight="20px" color="837F9D">
          {topic}
        </Text>
      </Box>
      <Divider />

      <Box
        height="75vh"
        overflow="auto"
        css={{
          "&::-webkit-scrollbar": {
            width: "4px",
          },
          "&::-webkit-scrollbar-track": {
            width: "6px",
          },
          "&::-webkit-scrollbar-thumb": {
            // eslint-disable-next-line quotes
            borderRadius: "24px",
          },
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
