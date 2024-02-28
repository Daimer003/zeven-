'use client'
import Loader from "@/components/loader/loader";
import Header from "@/components/sections/header";
import SectionFive from "@/components/sections/sectionFive";
import SectionFour from "@/components/sections/sectionFour";
import SectionThree from "@/components/sections/sectionThree";
import SectionTwo from "@/components/sections/sectionTwo";
import Navbar from "@/components/shared/navbar/navbar";
import {
  Container,
  Box,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";


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
    <Container
      display="flex"
      justifyContent="center"
      maxW='10xl'
      overflow="hidden"
      padding="0 20px"
      boxSizing="border-box"
    >
      {
        loading ?
          <Loader /> :
          <Box
            width="100%"
            maxW="1400px"
          >
            <Navbar />
            <Header />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <SectionFive />
          </Box>
      }
    </Container>
  );
}
