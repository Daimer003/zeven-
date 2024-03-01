"use client"
import { useEffect, useState } from "react";
import {
    Box,
    Grid,
    GridItem,
    Text
} from "@chakra-ui/react";
import Image from "next/image";


const SectionThree = () => {
    const [imgAliado, setImaAliado] = useState<any>([])

    useEffect(() => {
        //* Creamos un array con valores del 1 al 20
        const newArray = Array.from({ length: 18 }, (_, index) => index + 1);
        setImaAliado(newArray);
    }, [])

    return (
        <Box
            display="flex"
            flexDir="column"
            gap="40px"
            marginTop={{ base: "80px", md: "160px" }}
            position="relative"
            zIndex={10}
        >
            <Text
                as="h3"
                fontSize={{ base: "xx-large", md: "xxx-large" }}
                fontWeight="600"
                textAlign="center"
                color="white"
            >
                Nuestros aliados
            </Text>
            <Grid
                templateColumns={{
                    base: 'repeat(3, 1fr)',
                    md: 'repeat(6, 1fr)',
                    lg: 'repeat(9, 1fr)'
                }}
                gap={10}
                opacity="50%"
            >
                {
                    imgAliado.map((id: any, index: any) => (
                        <GridItem
                            key={index}
                            w='100%'
                            h='auto'
                            _hover={{ transform: 'scale(1.1)', transition: 'all 0.2s' }}
                        >
                            <Image
                                src={`/assets/aliados/aliado-${id}.webp`}
                                alt={`Imagen aliados-${id}`}
                                width={200}
                                height={40} />
                        </GridItem>
                    ))
                }

            </Grid>
        </Box>
    );
}

export default SectionThree;