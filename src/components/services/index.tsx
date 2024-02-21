import { Box, HStack, Text } from "@chakra-ui/react";
import { FiUsers } from "react-icons/fi";
import { BiSupport } from "react-icons/bi";


const Services = () => {
    return (
        <Box
            display="flex"
            width="100%"
            height="auto"
            marginTop="40px"
            zIndex="40"
        >
            <HStack spacing='24px' w="100%">
                <Box
                    display="flex"
                    flexDir="column"
                    justifyContent="center"
                    alignItems="center"
                    w='100%'
                    minHeight='140px'
                    bg='rgba(255, 255, 255, 0.08)'
                    padding="10px"
                    boxSizing="border-box"
                    borderRadius="8px"
                >
                    <Box
                        display="flex"
                        gap="10px"
                    >
                        <FiUsers size="28px" />
                        <Text as="span" fontSize="x-large">
                            1000+
                        </Text>
                    </Box>
                    <Text as="span">
                        Instrumentos
                        de trading
                    </Text>
                </Box>
                <Box
                    display="flex"
                    flexDir="column"
                    justifyContent="center"
                    alignItems="center"
                    w='100%'
                    minHeight='140px'
                    bg='rgba(255, 255, 255, 0.08)'
                    padding="10px"
                    boxSizing="border-box"
                    borderRadius="8px"
                >
                    <Box
                        display="flex"
                        gap="10px"
                    >
                        <BiSupport size="28px" />
                        <Text as="span" fontSize="x-large">
                            0.0
                        </Text>
                    </Box>
                    <Text as="span">
                        Instrumentos
                        de trading
                    </Text>
                </Box>
                <Box
                    display="flex"
                    flexDir="column"
                    justifyContent="center"
                    alignItems="center"
                    w='100%'
                    minHeight='140px'
                    bg='rgba(255, 255, 255, 0.08)'
                    padding="10px"
                    boxSizing="border-box"
                    borderRadius="8px"
                >
                    <Box
                        display="flex"
                        gap="10px"
                    >
                        <BiSupport size="28px" />
                        <Text as="span" fontSize="x-large">
                            24/7
                        </Text>
                    </Box>
                    <Text as="span" textAlign="center">
                        Trading de  CFDs
                        sobre criptodivisas
                    </Text>
                </Box>
                <Box
                    display="flex"
                    flexDir="column"
                    justifyContent="center"
                    alignItems="center"
                    w='100%'
                    minHeight='140px'
                    bg='rgba(255, 255, 255, 0.08)'
                    padding="10px"
                    boxSizing="border-box"
                    borderRadius="8px"
                >
                    <Box
                        display="flex"
                        gap="10px"
                    >
                        <FiUsers size="28px" />
                        <Text as="span" fontSize="x-large">
                            1000:1
                        </Text>
                    </Box>
                    <Text as="span">
                        De apalancamiento
                    </Text>
                </Box>
                <Box
                    display="flex"
                    flexDir="column"
                    justifyContent="center"
                    alignItems="center"
                    w='100%'
                    minHeight='140px'
                    bg='rgba(255, 255, 255, 0.08)'
                    padding="10px"
                    boxSizing="border-box"
                    borderRadius="8px"
                >
                    <Box
                        display="flex"
                        gap="10px"
                    >
                        <FiUsers size="28px" />
                        <Text as="span" fontSize="x-large">
                            0%
                        </Text>
                    </Box>
                    <Text as="span">
                        Comisión
                        por deposito
                    </Text>
                </Box>

            </HStack>
        </Box>
    );
}

export default Services;