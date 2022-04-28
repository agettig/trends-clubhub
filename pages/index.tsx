import { Heading, Text } from "@chakra-ui/react"
import Layout from "../components/layout/Layout"
import Navbar from "../components/layout/Navbar"

const IndexPage = () => (
  <Layout title="Home">
    <Navbar />
    <Heading my="4">
      ClubHub
    </Heading>

  </Layout >
)

export default IndexPage
