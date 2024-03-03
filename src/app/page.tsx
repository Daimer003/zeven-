'use client'
import { useState, useEffect } from "react";
import Loader from "@/components/loader/loader";
import Header from "@/components/sections/header";
import SectionFive from "@/components/sections/sectionFive";
import SectionFour from "@/components/sections/sectionFour";
import SectionSix from "@/components/sections/sectionSix";
import SectionThree from "@/components/sections/sectionThree";
import SectionTwo from "@/components/sections/sectionTwo";
import Navbar from "@/components/shared/navbar/navbar";
import {
  Container,
  Box,
} from "@chakra-ui/react";
import SectionSeven from "@/components/sections/sectionSeven ";
import SectionEight from "@/components/sections/sectionEight";
import SectionNine from "@/components/sections/sectionNine";
import SectionTen from "@/components/sections/sectionTen";
import Footer from "@/components/shared/footer";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simula una carga asincrónica (puedes reemplazar esto con tu propia lógica de carga)
    const fakeAsyncFunction = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setLoading(false);
    };

    fakeAsyncFunction();
  }, []);

  return (
    <Box
      display="flex"
      flexDir="column"
      justifyContent="center"
      width="100%"
    >
      <Box
        display="flex"
        flexDir="column"
        width="100%"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        boxSizing="border-box"
      >
        {
          loading ?
            <Loader /> :
            <>
              <Box
                width="100%"
                maxW="1196px"
                padding="0 20px"
                boxSizing="border-box"
              >
                <Navbar />
                <Header />
                <SectionTwo />
                <SectionThree />
                <SectionFour />

                <Box
                  display="flex"
                  width="100%"
                  height="auto"
                  flexDir="column"
                  position="relative"
                >
                  <Box
                    display="flex"
                    content=""
                    width="2000px"
                    height="100%"
                    position="absolute"
                    right={{ base: "-100px", md: "-90%" }}
                    top="0px"
                  >
                    <Box
                      width="100%"
                      height="100%"
                      bgGradient='radial-gradient(circle, #01b2acc2 0%, rgba(255,255,255,0) 48%)'
                    />

                  </Box>
                  <SectionFive />
                  <SectionSix />
                </Box>

                <SectionSeven />
                <SectionEight />
                <SectionNine />
                <SectionTen />
              </Box>
              <Footer />
            </>
        }
      </Box>

    </Box>
  );
}
