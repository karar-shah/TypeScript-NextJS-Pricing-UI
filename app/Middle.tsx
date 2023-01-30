import React from "react";
import {
    Heading,
    Box,
    Text,
    Flex,
    Button,
    HStack,
    Icon,
} from "@chakra-ui/react";
import TickIcon from "./icons/TickIcon";

export default function Middle() {
    return (
        <>
            {/* Main Box */}
            <Box
                mx={{ base: "20px",  lg: "auto" }}
                maxW={"920"}
                bg={"white"}
                mt={"-110px"}
                borderRadius={"16px"}
                overflow={"hidden"}
                boxShadow={
                    " 0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04);"
                }
            >
                <Flex direction={{ base: "column", md: "column", lg: "row" }}>
                    {/* Left Box bg={"#e0dbeb"} */}
                    <Box textAlign={"center"} p={"48px"} bg={"#f1e9ff"}>
                        <Text fontSize={"23px"} fontWeight={"bold"}>
                            Premium PRO
                        </Text>
                        <Heading>$329</Heading>
                        <Text pt={"7px"}>billed just once</Text>
                        <Button
                            bg={"#805AD5"}
                            color={"white"}
                            w={"250px"}
                            h={"45px"}
                            mt={"15px"}
                        >
                            <Text>Get Started</Text>
                        </Button>
                    </Box>

                    {/* Right Box */}
                    <Box p={"40px"} bg={"white"}>
                        <Text>
                            Access these features when you get this pricing
                            package for your business.
                        </Text>
                        <HStack pt={"20px"}>
                            <Icon as={TickIcon} />
                            <Text>International calling and messaging API</Text>
                        </HStack>
                        <HStack pt={"15px"}>
                            <Icon as={TickIcon} />
                            <Text>Additional phone numbers</Text>
                        </HStack>
                        <HStack pt={"15px"}>
                            <Icon as={TickIcon} />
                            <Text>Automated messages via Zapier</Text>
                        </HStack>
                        <HStack pt={"15px"}>
                            <Icon as={TickIcon} />
                            <Text>24/7 support and consulting</Text>
                        </HStack>
                    </Box>
                </Flex>
            </Box>
        </>
    );
}
