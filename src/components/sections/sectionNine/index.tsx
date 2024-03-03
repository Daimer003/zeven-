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
import { GridItemKeyFrame } from "@/styles/Section/sectionNone/sectionNine.styles";
import Link from "next/link";

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
                    <Text
                        as="p"
                        maxW="450px"
                        textAlign="center"
                        color="white"
                    >
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
                                <Box
                                    key={index}
                                    display="flex"
                                    flexDir="row"
                                    justifyContent='space-between'
                                    alignItems="center"
                                    width="100%"
                                    maxWidth="223px"
                                    height={{ base: "100px", md: "167px" }}
                                    position="relative"
                                >
                                    <Box
                                        display="flex"
                                        justifyContent="center"
                                        alignItems="center"
                                        width="40px"
                                        height="40px"
                                        position="absolute"
                                        background="gray.800"
                                        borderRadius="50%"
                                        top="-20px"
                                        left="-10px"
                                        fontSize="x-large"
                                        fontWeight="700"
                                        color="white"
                                        zIndex="99"
                                    >
                                        {index + 1}
                                    </Box>
                                    <Card >
                                        <Box
                                            display="flex"
                                            flexDir="column"
                                            justifyContent="center"
                                            alignItems="center"
                                            width="100%"
                                            height="100%"
                                            boxSizing="border-box"
                                            fontSize={{ base: "45px", md: "70px" }}
                                            color="white"
                                        >
                                            {icons[index]}
                                        </Box>
                                    </Card>
                                </Box>
                                {
                                    index <= 1 &&
                                    <Box
                                        color="white"
                                        fontSize={{ base: "24px", md: "70px" }}
                                    >
                                        <FaArrowRight />
                                    </Box>
                                }
                            </>
                        ))
                    }
                </Box>
                <Box>
                    <Link
                        href="https://app.zevenglobal.com/user-auth/register"
                        target="_blank">
                        <Button
                            colorScheme='black'
                            variant="buttonPrimary"
                        >
                            Comienza a operar ahora
                        </Button>
                    </Link>
                </Box>
            </Box>
            <Box
                display="flex"
                width="100%"
                height="auto"
                gap={10}
                opacity="50%"
                overflow="hidden"
            >
                <GridItemKeyFrame   >
                    {
                        imgAliado.map((id: any, index: any) => (
                            <Image
                                key={index}
                                src={`/assets/divisas/divisa-${id}.webp`}
                                alt={`Imagen divisa-${id}`}
                                width={200}
                                height={50} />

                        ))
                    }
                    {
                        imgAliado.map((id: any, index: any) => (
                            <Image
                                key={index + 11}
                                src={`/assets/divisas/divisa-${id}.webp`}
                                alt={`Imagen divisa-${id}`}
                                width={200}
                                height={50} />

                        ))
                    }
                </GridItemKeyFrame>
            </Box>
        </Box>
    );
}

export default SectionNine
    ;