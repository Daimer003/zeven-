import { BoxZeven } from "@/styles/Container/container.styles";
import {
    Box,
    Text,
    Button
} from "@chakra-ui/react";
import Image from "next/image";
import CardBag from "../cards/cardBag";


const Bag = () => {
    return (
        <BoxZeven>
            <Box
                display="flex"
                flexDir="column"
                justifyContent="center"
                alignItems="center"
                width="100%"
                height="auto"
                padding="20px"
                boxSizing="border-box"
            >
                <Box
                    display="flex"
                    flexDir={{ base: "column", md: "row" }}
                    width="100%"
                    height="auto"
                >
                    <Box
                        display="flex"
                        flexDir="column"
                        justifyContent="center"
                        gap="20px"
                    >
                        <Text
                            as="h4"
                            fontSize="xxx-large"
                            fontWeight="600"
                            color="white"
                        >Forex</Text>
                        <Text
                            as="p"
                            color="white"
                        >
                            Ingrese al comercio de divisas ahora.
                            Aprenda, opere en la cuenta demo
                            y únase a uno de los mercados
                            financieros más grandes.
                        </Text>
                        <Button
                            colorScheme='gray'
                            variant="buttonPrimary"
                            borderRadius='4px'
                        >
                            Invierte ahora
                        </Button>
                    </Box>
                    <Box width="100%">
                        <Image
                            src="/assets/imagen2.webp"
                            alt="Imagen del header"
                            style={{
                                maxWidth: "400px",
                                maxHeight: "400px"
                            }}
                            width={600}
                            height={600}
                        />
                    </Box>
                </Box>
                <Box
                    display="flex"
                    width="100%"
                    gap="20px"
                    overflowX="auto"
                >
                    <CardBag />
                    <CardBag />
                </Box>
            </Box>
        </BoxZeven>
    )
}

export default Bag;