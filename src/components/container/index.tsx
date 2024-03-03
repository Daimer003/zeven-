import { BoxZeven } from "@/styles/Container/container.styles";
import { Box, Button, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

interface Props {
    title: string,
    img: string
}

const ContainerZeven = ({ title, img }: Props) => {
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
                    minHeight="450px"
                >
                    <Box
                        display="flex"
                        flexDir="column"
                        alignItems={{ base: "center", md: "start" }}
                        w="100%"
                    >
                        <Text
                            as="h4"
                            fontSize={{ base: "x-large", md: "xxx-large" }}
                            lineHeight={{ base: "30px", md: "50px" }}
                            textAlign={{ base: "center", md: "start" }}
                            fontWeight="600"
                            color="white"
                        >
                            {title}
                        </Text>
                        <Box
                            display="flex"
                            flexDir={{ base: "column", md: "row" }}
                            alignItems="center"
                            gap="10px"
                            marginTop='20px'
                        >
                            <Button
                                colorScheme='black'
                                variant="buttonPrimary"
                            >
                                Más información
                            </Button>
                            <Text
                                textAlign={{ base: "center", md: "start" }}
                                color="white"
                                as="p"
                            >
                                *Aplican términos y condiciones
                            </Text>
                        </Box>
                    </Box>
                    <Box
                        display="flex"
                        w="100%"
                        justifyContent="center"
                    >
                        <Image
                            src={img}
                            alt="Imagen"
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