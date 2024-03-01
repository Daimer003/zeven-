import {
    Box,
    HStack,
    Text,
    Button,
    Spacer,
    Divider
} from "@chakra-ui/react";
import Image from "next/image";

const CardBag = () => {
    return (
        <Box
            display="flex"
            flexDir="column"
            width="100%"
            maxWidth="800px"
            bg='rgba(255, 255, 255, 0.1)'
            padding="10px"
            boxSizing="border-box"
            borderRadius="8px"
            position="relative"
            zIndex="999"
            gap="20px"
        >
            <Box
                display="flex"
                width="100%"
                margin="10px 0"
            >
                <Box
                    display="flex"
                    gap="10px"
                >
                    <HStack
                        display="flex"
                        justifyContent="center"
                        border="1px"
                        borderRadius="6px"
                        borderColor="white"
                        padding="6px"
                        alignItems="center"
                        width="60px"
                    >
                        <Image src="/assets/svgs/icon-us.svg" alt="Icono de pais" width={30} height={30} />
                    </HStack>
                    <Box
                        display="flex"
                        flexDir="column"
                    >
                        <Text
                            as="span"
                            color="white"
                        >EURUSD
                        </Text>
                        <Text
                            as="span"
                            color="white"
                        >EUR/USD
                        </Text>
                    </Box>
                </Box>
                <Spacer />
                <Box>
                    <Button
                        colorScheme='gray'
                        variant="buttonSecondary"
                        borderRadius='4px'
                    >
                        Invierte ahora
                    </Button>
                </Box>
            </Box>
            <Divider />
            <Box
                display="flex"
            >
                <Text
                    as="span"
                    color="white"
                >
                    $1.078841
                </Text>
                <Spacer />
                <Text
                    as="span"
                    color="white"
                >
                    -0.01%
                </Text>s
            </Box>
        </Box>
    );
}

export default CardBag;
