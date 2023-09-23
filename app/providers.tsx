"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Fonts from "./Fonts";

const theme = extendTheme({
  fonts: {
    heading: `'Spoqa','Open Sans', sans-serif`,
    body: `'Spoqa','Raleway', sans-serif`,
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <Fonts />
        {children}
      </ChakraProvider>
    </CacheProvider>
  );
}
