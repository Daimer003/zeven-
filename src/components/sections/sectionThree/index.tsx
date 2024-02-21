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
            marginTop="160px"
        >
            <Text
                as="h3"
                fontSize="xxx-large"
                fontWeight="600"
                textAlign="center"
            >
                Nuestros aliados
            </Text>
            <Grid templateColumns='repeat(9, 1fr)' gap={10}>
                {
                    imgAliado.map((id: any, index: any) => (
                        <GridItem key={index} w='100%' h='auto' >
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