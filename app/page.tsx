"use client";
import { ChakraProvider } from "@chakra-ui/react";
import Bottom from "./Bottom";
import Header from "./Header";
import Middle from "./Middle";

export default function Home() {
    return (
        <>
            <ChakraProvider>
                <Header />
                <Middle />
                <Bottom />
            </ChakraProvider>
        </>
    );
}
