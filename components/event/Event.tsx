import {  Box, Button, ButtonSpinner, Center, ChakraProvider, Heading, VStack, Text, Stack } from "@chakra-ui/react"
import AddForm from "./AddForm";

const temp: string = "temp"

const Event = () => {
    return (
        <div>
            {
                <Center>
                    <VStack spacing="3">
                        <Heading fontSize="50px">EventName</Heading>
                        <Text>Description: Description</Text>
                        <Text>Club: ClubName</Text>
                        <Text>Date: Date</Text>
                        <AddForm />
                    </VStack>
                </Center>
            }
        </div>
    );
}

export default Event