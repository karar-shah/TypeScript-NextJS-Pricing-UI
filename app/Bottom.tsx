import { Box, Flex, HStack, Text, Icon } from "@chakra-ui/react";
import React from "react";
import Feat1 from "./icons/Feat1";
import Feat2 from "./icons/Feat2";
import Feat3 from "./icons/Feat3";

export default function Bottom() {
    return (
        <>
            <Box
                pt={"20"}
                width={"906px"}
                px="50px"
                mx={{ base: "10px", lg: "auto" }}
            >
                <Flex direction={{ base: "column", md: "column", lg: "row" }}>
                    <HStack mb="20px" pr={"20px"} pb={"10px"}>
                        <Icon as={Feat1} />
                        <Text fontWeight={"700"} fontSize={"17px"} maxW={"220"}>
                            30 days money back Guarantee
                        </Text>
                    </HStack>
                    <HStack mb="20px" pr={"20px"} pb={"10px"}>
                        <Icon as={Feat2} />
                        <Text fontWeight={"700"} fontSize={"17px"} maxW={"220"}>
                            No setup fees 100% hassle-free
                        </Text>
                    </HStack>
                    <HStack mb="20px">
                        <Icon as={Feat3} />
                        <Text fontWeight={"700"} fontSize={"17px"} maxW={"220"}>
                            No monthly subscription Pay once and for all
                        </Text>
                    </HStack>
                </Flex>
            </Box>
        </>
    );
}
