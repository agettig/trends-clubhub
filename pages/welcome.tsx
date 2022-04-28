import {  Center, Circle, Container, Heading, Square, Text } from "@chakra-ui/react"
import Layout from "../components/layout/Layout"

const TutorialPage = () => {
    return (
        <div>
            <Layout title="Tutorial">
                <Center>
                    <Heading my="4">Welcome!</Heading>
                </Center>
                <Circle my="4">Navigate through the website using the navigation bar on the top.</Circle>
                <Center my="4">Create an account by signing up with Google.</Center>
                <Center my="4">Post an event by ...</Center>
            </Layout>
        </div>
    )
}

export default TutorialPage