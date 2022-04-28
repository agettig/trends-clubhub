import {  Box, Button, Center, ChakraProvider, Heading, VStack } from "@chakra-ui/react"


const Welcome = () => {
    return (
        <div>
        {
            <ChakraProvider>
                {/* TODO Buttons: */}
                <Center>
                    <VStack spacing={8}>
                        <Heading mt="12" fontSize="60px">Welcome!</Heading>
                        <Box w="600px" borderWidth="1px" borderRadius="lg" p="4" textAlign="center">
                            Navigate through the website using the navigation bar on the top.
                        </Box>
                        {/* if (signedIn) */}
                        <Box w="600px" borderWidth="1px" borderRadius="lg" p="4" textAlign="center">
                            Create an account by signing up with Google. 
                            <Box mt="4">
                                <Button colorScheme="blue">Sign Up</Button>
                            </Box>
                        </Box>
                        <Box w="600px" borderWidth="1px" borderRadius="lg" p="4" textAlign="center">
                            Browse clubs by categories. 
                            <Box mt="4">
                                <Button colorScheme="blue">Something?</Button>
                            </Box>
                        </Box>
                        <Box w="600px" borderWidth="1px" borderRadius="lg" p="4" textAlign="center">
                            Search for clubs directly.
                            <Box mt="4">
                                <Button colorScheme="blue">Search?</Button>
                            </Box>
                        </Box>
                        <Box w="600px" borderWidth="1px" borderRadius="lg" p="4" textAlign="center">
                            Check out clubs you followed, their future events, and more!
                            <Box mt="4">
                                <Button colorScheme="blue">Something?</Button>
                            </Box>
                        </Box>
                    </VStack>
                </Center>
            </ChakraProvider>
        }
    </div>
    );
}

export default Welcome