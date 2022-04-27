import { Heading, Text } from "@chakra-ui/react"
import Gallery from "../components/clubs/gallery"
import Layout from "../components/layout/Layout"

const ClubsPage = () => (
  <Layout title="Clubs">
    <Heading my="4">
      Clubs
      <Gallery></Gallery>
    </Heading>

  </Layout >
)

export default ClubsPage
