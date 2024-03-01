import Card from "@/components/cards/card";
import {
    Box,
    Text,
    Button,
    Grid,
    GridItem
} from "@chakra-ui/react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FaUserPlus } from "react-icons/fa";
import { PiMoneyFill } from "react-icons/pi";
import { LuTrendingUp } from "react-icons/lu";

const icons = [
    <FaUserPlus />,
    <PiMoneyFill />,
    < LuTrendingUp />
]

const SectionNine = () => {
    const [imgAliado, setImaAliado] = useState<any>([])

    useEffect(() => {
        //* Creamos un array con valores del 1 al 20
        const newArray = Array.from({ length: 11 }, (_, index) => index + 1);
        setImaAliado(newArray);
    }, [])
    return (
        <Box
            display="flex"
            width='100%'
            flexDir="column"
            alignItems='center'
            gap="40px"
            marginTop={{ base: "80px", md: "160px" }}
            position="relative"
            zIndex={10}
        >
            <Box
                display="flex"
                width='100%'
                maxWidth='1000px'
                flexDir="column"
                alignItems='center'
                gap="40px"
            >
                <Box
                    display="flex"
                    flexDir="column"
                    alignItems="center"
                    gap="20px"
                >
                    <Text
                        as="h3"
                        maxW="800px"
                        lineHeight='50px'
                        fontSize={{ base: "xx-large", md: "xxx-large" }}
                        fontWeight="600"
                        textAlign="center"
                        color="white"
                    >
                        Únase a Zeven: ¡Su socio comercial
                        de confianza
                    </Text>
                    <Text as="p" maxW="450px" textAlign="center">
                        Conviértase en un socio de una comunidad global de
                        comerciantes que eligieron comerciar con Zeven.
                    </Text>
                </Box>
                <Box
                    display="flex"
                    width="100%"
                    justifyContent="space-between"
                    alignItems="center"
                    gap="20px"
                >
                    {
                        [1, 2, 3].map((_, index) => (
                            <>
                                <Card key={index}>
                                    <Box
                                        display="flex"
                                        flexDir="column"
                                        justifyContent="center"
                                        alignItems="center"
                                        maxWidth="200px"
                                        height={{ base: "100px", md: "200px" }}
                                        padding="20px 40px"
                                        boxSizing="border-box"
                                        fontSize={{ base: "45px", md: "70px" }}
                                    >
                                        {icons[index]}
                                    </Box>
                                </Card>
                                {index <= 1 &&
                                    <Box fontSize={{ base: "24px", md: "50px" }}>
                                        <FaArrowRight />
                                    </Box>
                                }
                            </>
                        ))
                    }
                </Box>
                <Box>
                    <Button
                        colorScheme='black'
                        variant="buttonPrimary"
                    >
                        Comienza a operar ahora
                    </Button>
                </Box>
            </Box>
            <Grid
                templateColumns={{
                    base: 'repeat(3, 1fr)',
                    md: 'repeat(4, 1fr)',
                    lg: 'repeat(9, 1fr)'
                }}
                gap={10}
                opacity="50%"
            >
                {
                    imgAliado.map((id: any, index: any) => (
                        <GridItem key={index} w='100%' h='auto' >
                            <Image
                                src={`/assets/divisas/divisa-${id}.webp`}
                                alt={`Imagen divisa-${id}`}
                                width={80}
                                height={30} />
                        </GridItem>
                    ))
                }

            </Grid>
        </Box>
    );
}

export default SectionNine
    ;