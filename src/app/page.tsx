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
        padding="0 20px"
        boxSizing="border-box"
      >
        {
          loading ?
            <Loader /> :
            <>
              <Box
                width="100%"
                maxW="1196px"
              >
                <Navbar />
                <Header />
                <SectionTwo />
                <SectionThree />
                <SectionFour />
                <SectionFive />
                <SectionSix />
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
