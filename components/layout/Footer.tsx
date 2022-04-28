import { Box, Divider, Text } from "@chakra-ui/react"
import React from "react"

const Footer = () => (
  <Box as="footer" px={4}>
    <Divider my={4} />
    <Text fontSize="sm" color="subtle">
      Created by Harrison Chin (hc955), Ariela Gettig (aqg3),
      Peter Huo (yh384), and Raymond Lin (rl569)
    </Text>
  </Box>
)

export default Footer
