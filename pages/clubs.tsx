
import { Heading, Text, Box, Divider, Container } from "@chakra-ui/react"
import Gallery from "../components/clubs/gallery"
import Layout from "../components/layout/Layout"
import { ClubComponent } from "../types"




const ClubsPage = () => (
  <Layout title="Clubs">
    <Heading size={"xl"} textAlign="center">
      Clubs
    </Heading>
    <Divider />
    <Box maxWidth='80%' margin='auto'>
      <Gallery />
    </Box>
  </Layout >
)

export default ClubsPage

