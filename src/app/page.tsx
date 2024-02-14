import Navbar from "@/components/shared/navbar/navbar";
import { Container, Box, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Container
      maxW='8xl'
      centerContent
      padding="0"
    >
      <Navbar />
    </Container>
  );
}
