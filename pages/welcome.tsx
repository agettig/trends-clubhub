import {  Center, Container, Heading, Text } from "@chakra-ui/react"
import Layout from "../components/layout/Layout"

const TutorialPage = () => {
    return (
        <div>
            <Layout title="Tutorial">
                <Heading>Welcome!</Heading>
                <Text>Navigate through the website using the navigation bar on the top.</Text>
                <Text>Create an account by signing up with Google.</Text>
                <Text>Post an event by ...</Text>
            </Layout>
        </div>
    )
}

export default TutorialPage