import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

export default function Header() {
    return (
        <Box
            bg={"#6B46C1"}
            color={"white"}
            textAlign={{ base: "left", md: "left", lg: "center" }}
            pt={"55px"}
            pb={'160px'}
            pl={'15px'}
            
        >
            <Heading>Simple pricing for your business</Heading>
            <Text pt={"20px"}>
                Plans that are carefully crafted to suit your business.
            </Text>
        </Box>
    );
}
