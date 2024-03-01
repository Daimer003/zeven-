import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";

const SectionTen = () => {
    return (
        <Box
            display="flex"
            width="100%"
            height="auto"
            flexDir="column"
            alignItems="center"
            gap="40px"
            marginTop={{ base: "80px", md: "160px" }}
            position="relative"
        >
            <Box
                display="flex"
                content=""
                width={{ base: "600px", md: "2000px" }}
                height="900px"
                position="absolute"
                bottom={{ base: "10%", md: "-30%" }}
                zIndex="-1"
            >
                <Box
                    width="100%"
                    height="100%"
                    bgGradient='radial-gradient(circle, #01b2ac94 0%, rgba(255,255,255,0) 50%)'
                />
            </Box>
            <Box>
                <Box
                    display="flex"
                    flexDir="column"
                    alignItems="center"
                    gap="20px"
                >
                    <Text
                        as="h3"
                        maxWidth="700px"
                        lineHeight='50px'
                        fontSize={{ base: "xx-large", md: "xxx-large" }}
                        fontWeight="600"
                        textAlign="center"
                        color="white"
                    >
                        Variedad de plataformas
                    </Text>
                    <Text as="p" maxWidth="700px" textAlign="center">
                        Nuestras aplicaciones móviles fáciles de usar para IOS   y Android, así como nuestra aplicación web,
                        le facilitan el acceso a su cuenta y el comercio desde cualquier lugar.
                    </Text>
                </Box>
                <Box
                    display="flex"
                    flexDir={{ base: "column", md: "row" }}
                    alignItems="center"
                    gap="40px"
                >
                    <Box
                        display="flex"
                        justifyContent="center"
                    >
                        <Image
                            src="/assets/footer-pc.webp"
                            alt="Imagen del header"

                            width={600}
                            height={600}
                        />
                    </Box>
                    <Box
                        display="flex"
                        flexDir="column"
                        gap="10px"
                    >
                        <Image
                            src="/assets/app-store.webp"
                            alt="Imagen del footer"
                            width={160}
                            height={80}
                        />
                        <Image
                            src="/assets/google-pay.webp"
                            alt="Imagen del footer"
                            width={160}
                            height={80}
                        />
                        <Image
                            src="/assets/windowd.webp"
                            alt="Imagen del footer"
                            width={160}
                            height={80}
                        />
                        <Image
                            src="/assets/mac.webp"
                            alt="Imagen del footer"
                            width={160}
                            height={80}
                        />
                    </Box>
                </Box>
            </Box >
        </Box >
    );
}

export default SectionTen;