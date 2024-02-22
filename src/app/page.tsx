
import Header from "@/components/sections/header";
import SectionFive from "@/components/sections/sectionFive";
import SectionFour from "@/components/sections/sectionFour";
import SectionThree from "@/components/sections/sectionThree";
import SectionTwo from "@/components/sections/sectionTwo";
import Navbar from "@/components/shared/navbar/navbar";
import {
  Container,
  Box,
  Text
} from "@chakra-ui/react";

export default function Home() {
  return (
    <Container
      display="flex"
      justifyContent="center"
      maxW='10xl'
      overflow="hidden"
      padding="0 20px"
      boxSizing="border-box"
    >

      <Box
        width="100%"
        maxWidth="1400px"
        position="relative"

      >
        <Navbar />
        <Header />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
      </Box>

    </Container>
  );
}
