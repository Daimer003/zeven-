import Services from "@/components/services";
import { Box, Stack, Text, Button } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";



const Header = () => {
    return (
        <Box
            id="header"
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

                    width="100%"
                    height="auto"
                    gap="20px"
                >
                    <Box
                        display='flex'
                        flexDir='column'
                        width="100%"
                        height="auto"
                        gap='10px'
                    >
                        <Text
                            as="h1"
                            color="white"
                            fontWeight="600"
                            fontSize={{ base: "20px", md: "36px", xl: "38px" }}
                        >
                            Explora  un universo de <br />
                            <Text
                                fontSize={{ base: "40px", md: "56px", xl: "82px" }}
                                lineHeight={{ base: "50px", md: "56px", xl: "92px" }}
                                color="#01b2ab"
                                fontWeight="700">
                                Oportunidades
                            </Text>
                        </Text>
                        <Text
                            as="p"
                            color="white"
                        >
                            Únete a Zeven y empieza a invertir de manera inteligente
                        </Text>
                    </Box>
                    <Box
                        display="flex"
                        justifyContent="start"
                        gap='20px'
                        width="100%"
                        maxWidth="410px"
                    >
                        <Link
                            href="https://app.zevenglobal.com/user-auth/register"
                            target="_blank"
                        >
                            <Button
                                colorScheme='black'
                                w={{ base: '150px', md: '200px' }}
                                variant="buttonPrimary"
                            >
                                Abre una cuenta REAL
                            </Button>
                        </Link>
                        <Link
                            href="https://app.zevenglobal.com/user-auth/register"
                            target="_blank"
                        >
                            <Button
                                colorScheme='gray'
                                w={{ base: '150px', md: '200px' }}
                                variant="buttonSecondary"
                                borderRadius='4px'
                            >
                                Abre una cuenta DEMO
                            </Button>
                        </Link>
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


