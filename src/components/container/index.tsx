import { BoxZeven } from "@/styles/Container/container.styles";
import { Box, Button, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";


const ContainerZeven = () => {


    return (
        <BoxZeven>
            <Box
                display="flex"
                width="90%"
                height="100%"
                padding="20px"
                position="relative"
            >

                <Stack
                    display="flex"
                    direction={{ base: 'column', lg: 'row' }}
                    alignItems="center"
                    justifyContent="center"
                    width="100%"
                    height="auto"
                >
                    <Box w="100%">
                        <Text
                            as="h4"
                            fontSize={{ base: "x-large", md: "xxx-large" }}
                            fontWeight="600"
                            color="white"
                        >
                            Bono por deposito
                            en cuenta Instantanea
                            y Standard del 50%
                        </Text>
                        <Button
                            colorScheme='black'
                            variant="buttonPrimary"
                            marginTop='20px'
                        >
                            Más información
                        </Button>
                    </Box>
                    <Box
                        display="flex"
                        w="100%"
                        justifyContent="center"
                    >
                        <Image
                            src="/assets/imagen1.webp"
                            alt="Imagen del header"
                            style={{
                                maxWidth: "400px",
                                maxHeight: "400px"
                            }}
                            width={600}
                            height={600}
                        />
                    </Box>
                </Stack>
            </Box>
        </BoxZeven>
    );
}

export default ContainerZeven;