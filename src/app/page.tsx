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
  Box,
} from "@chakra-ui/react";
import SectionSeven from "@/components/sections/sectionSeven ";
import SectionEight from "@/components/sections/sectionEight";
import SectionNine from "@/components/sections/sectionNine";
import SectionTen from "@/components/sections/sectionTen";
import Footer from "@/components/shared/footer";
import Head from "next/head";


export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
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
      <Head>
        <title>Zeven</title>
        <meta name="og:description" content="Únete a Zeven y empieza a invertir de manera inteligente." />
        <meta name="og:viewport" content="width=device-width, initial-scale=1" />
        {/* <meta property="og:image" content="/assets/logo.webp" />
        <meta name="og:image" content="/assets/logo.webp" /> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="" />
        <meta name="twitter:description" content="Únete a Zeven y empieza a invertir de manera inteligente." />
        <meta name="twitter:image" content="https://zevenglobal.website/" />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="rating" content="General" />
        <meta name="language" content="es" />
        <meta name="author" content="Zeven" />
        <meta name="keywords" content="Forex Trading, estrategias de Forex, optimización de Forex, MT5, análisis de Forex, academia de Forex, señales de trading, cursos de trading" />
      </Head>
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
