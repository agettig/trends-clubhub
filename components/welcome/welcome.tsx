import {  Box, Button, ButtonSpinner, Center, ChakraProvider, Heading, VStack } from "@chakra-ui/react"
import NextLink from "next/link";

type BoxData = {
    description: string,
    buttonName: string,
    buttonPath: string
};

const boxData: BoxData[] = [
    {
        description: "Navigate through the website using the navigation bar on the top.",
        buttonName: "",
        buttonPath: ""
    },
    {
        description: "Log in or create an account by signing up with Google.",
        buttonName: "Log In",
        buttonPath: "/login"
    },
    {
        description: "Browse clubs by categories.",
        buttonName: "Browse",
        buttonPath: "/clubs"
    },
    {
        description: "Search for clubs directly.",
        buttonName: "Search",
        buttonPath: "" // TODO
    },
    {
        description: "Check out clubs you followed, their future events, and more!",
        buttonName: "Profile",
        buttonPath: "" // TODO   
    }
]

const BoxAndButton = ( {description, buttonName, buttonPath }: BoxData) => {
    return (
        <Box w="600px" borderWidth="1px" borderRadius="lg" p="4" textAlign="center">
            {description}
            { (buttonPath || buttonName)  &&
                <Box mt="4">
                    <NextLink key={buttonPath} href={buttonPath} passHref>
                        <Button colorScheme="blue">{buttonName}</Button>
                    </NextLink>
                </Box>
            }
        </Box>
    )
}

const Welcome = () => {
    return (
        <div>
            {
                <Center>
                    <VStack spacing={8}>
                        <Heading mt="12" fontSize="60px">Welcome!</Heading>
                        {
                            boxData.map((data) => 
                            <BoxAndButton key={data.buttonPath} {...data} />)
                        }
                    </VStack>
                </Center>
            }
        </div>
    );
}

export default Welcome