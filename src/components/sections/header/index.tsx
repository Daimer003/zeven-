import Services from "@/components/services";
import { Box, Stack, Text, Button } from "@chakra-ui/react";
import Image from "next/image";

const Header = () => {
    return (
        <Box
            display="flex"
            flexDir="column"
            alignItems="center"
            justifyContent="center"
            width="100%"
            height={{ base: 'auto', lg: '1100px' }}
            position="relative"
        >
            <Box
                display="flex"
                content=""
                width="2000px"
                height="100%"
                position="absolute"
                right="-70%"
                top="0px"
            >
                <Box
                    width="100%"
                    height="100%"
                    bgGradient='radial-gradient(circle, #01b2acc2 0%, rgba(255,255,255,0) 48%)'
                />
            </Box>
            <Stack
                display="flex"
                direction={{ base: 'column', lg: 'row' }}
                alignItems="center"
                justifyContent="center"
                width="100%"
                height="auto"
                mt={{ base: '150px', lg: '0px' }}
            >
                <Box
                    display="flex"
                    flexDir="column"
                    justifyContent="center"
                    alignItems="center"
                    width="100%"
                    height="auto"
                    gap="20px"
                >
                    <Box
                        width="100%"
                        height="auto"
                    >
                        <Text
                            as="h1"
                            fontSize="x-large"
                        >
                            Explora  un universo de <br />
                            <Text
                                fontSize={{ base: "56px", xl: "72px" }}
                                color="#01b2ab"
                                fontWeight="700">
                                Oportunidades
                            </Text>
                        </Text>
                        <Text as="p">
                            Únete a Zeven y empieza a invertir de manera inteligente
                        </Text>
                    </Box>
                    <Box
                        display="flex"
                        gap='20px'
                        width="100%">
                        <Button
                            colorScheme='black'
                            variant="buttonPrimary"
                        >
                            Iniciar sesión
                        </Button>
                        <Button
                            colorScheme='gray'
                            variant="buttonSecondary"
                            borderRadius='4px'
                        >
                            Registrarse
                        </Button>
                    </Box>
                </Box>
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    width="100%"
                    height="auto"
                    zIndex="20"
                >
                    <Image
                        src="/assets/telefonos.webp"
                        alt="Imagen del header"
                        style={{
                            maxWidth: "600px",
                            maxHeight: "600px"
                        }}
                        width={600}
                        height={600}
                    />
                </Box>
            </Stack>
            <Services />
        </Box>
    );
}

export default Header;


