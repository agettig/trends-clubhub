
import { Heading, Text, Box, Divider, Container } from "@chakra-ui/react"
import Gallery from "../components/clubs/gallery"
import Layout from "../components/layout/Layout"
import { ClubComponent } from "../types"


const data: ClubComponent[] = [
  {
    category: "Sports",
    clubs: [
      { clubName: "Big Red Football", clubId: 1 },
      { clubName: "Big Red Volleyball", clubId: 2 },
      { clubName: "Womens Soccer", clubId: 3 },
      { clubName: "Club Tennis", clubId: 4 }
    ]
  },
  {
    category: "Project Teams",
    clubs: [
      { clubName: "Design Tech Initiative", clubId: 5 },
      { clubName: "Engineers Without Borders", clubId: 6 },
      { clubName: "Cornell Elective Vehicles", clubId: 7 },
      { clubName: "Engineering World Health", clubId: 8 }
    ]
  },
]
const ClubsPage = () => (
  <Layout title="Clubs">
    <Heading size={"xl"} textAlign="center">
      Clubs
    </Heading>
    <Divider />
    <Gallery components={data} />
  </Layout >
)

export default ClubsPage

