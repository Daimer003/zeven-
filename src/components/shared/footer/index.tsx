import { Box, Text, UnorderedList, ListItem, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";
import { TbBrandLinkedin } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa";
import { TfiTwitter } from "react-icons/tfi";
import { dataContract } from "@/utils/Data/data";
import parse from "html-react-parser";

const Footer = () => {
    return (
        <Box
            display="flex"
            flexDir="column"
            width="100%"
            alignItems="center"
            height="auto"
            background={useColorModeValue('#072130', '#000000')}
            padding="40px 20px"
            boxSizing="border-box"
            gap="60px"
            zIndex="999"
        >
            <Box
                display="flex"
                flexDir={{ base: "column", lg: "row" }}
                maxW="1196px"
                gap="20px"
            >
                <Box
                    display="flex"
                    flexDir="column"
                    gap="10px"
                >
                    <Box
                        display="flex"
                        alignItems="center"
                        gap="5px"
                    >
                        <Image
                            src="assets/logo.svg"
                            alt="Logo de zeven"
                            width={35}
                            height={35}
                        />
                        <Text
                            as="p"
                            fontSize="xx-large"
                            fontWeight="800"
                            color="white"
                        >
                            even
                        </Text>
                    </Box>
                    <Box
                        display="flex"
                        gap="10px"
                        color="white"
                    >
                        <TbBrandLinkedin size="28px" />
                        <FaInstagram size="28px" />
                        <TfiTwitter size="28px" />
                    </Box>
                    <Text
                        as="span"
                        fontWeight="800px"
                        fontSize="20px"
                        color="white"
                    >
                        Zeven Global
                    </Text>
                    <UnorderedList
                        color="white"
                        spacing={2}
                        maxW="500px"
                    >
                        <ListItem>(+50) 661472275</ListItem>
                        <ListItem>OFICINA CENTRAL: Ruta Nacional 310 Centro Comercial Plaza Amara 4th Floor, Local 405. San Jose, Costa Rica</ListItem>
                        <ListItem>soporte@zevenglobal.com</ListItem>
                    </UnorderedList>
                </Box>
                <Box>
                    <Text
                        as="span"
                        fontWeight="600px"
                        fontSize="20px"
                        color="white"
                    >Documentos</Text>
                    <UnorderedList
                        color="white"
                        spacing={2}
                    >
                        <ListItem>Protección de datos</ListItem>
                        <ListItem>Políticas de  privacidad</ListItem>
                        <ListItem>Política AML</ListItem>
                    </UnorderedList>
                </Box>
                <Box>
                    <Box>
                        <Text
                            as="span"
                            fontWeight="600px"
                            fontSize="20px"
                            color="white"
                        >
                            Menú
                        </Text>
                        <UnorderedList
                            color="white"
                            spacing={2}
                        >
                            <ListItem>Inicio</ListItem>
                            <ListItem>Opera con nosotros</ListItem>
                            <ListItem>Plataformas</ListItem>
                            <ListItem>Programa IB</ListItem>
                            <ListItem>Educación</ListItem>
                        </UnorderedList>
                    </Box>
                </Box>
                <Box>
                    <Box>
                        <Text
                            as="span"
                            fontWeight="600px"
                            fontSize="20px"
                            color="white"
                        >
                            Calculadoras de Trading
                        </Text>
                        <UnorderedList
                            color="white"
                            spacing={2}
                        >
                            <ListItem>Calculadora Tamaño posición</ListItem>
                            <ListItem>Calculadora de margen</ListItem>
                            <ListItem>Calculadora de ganancias</ListItem>
                            <ListItem>Calculadora PIP</ListItem>
                            <ListItem>Calculadora Puntos de pívot</ListItem>
                            <ListItem>Calculadora de reembolsos de Forex </ListItem>
                        </UnorderedList>
                    </Box>
                </Box>
                <Box>
                    <Box>
                        <Text
                            color="white"
                            as="span"
                            fontWeight="600px"
                            fontSize="20px"
                        >
                            Mercado Forex
                        </Text>
                        <UnorderedList
                            color="white"
                            spacing={2}
                        >
                            <ListItem>Forex</ListItem>
                            <ListItem>Indices</ListItem>
                            <ListItem>Bonos</ListItem>
                            <ListItem>Futuros</ListItem>
                            <ListItem>Calendario económico</ListItem>
                            <ListItem>Crypto Divisas</ListItem>
                        </UnorderedList>
                    </Box>
                </Box>
            </Box>
            <Box
                maxW='6xl'
                border="1px"
                borderColor="g"
                padding="20px"
            >
                <Text
                    as="p"
                    color="white"
                >
                    {parse(dataContract.warning)}
                </Text>
            </Box>
        </Box>
    );
}

export default Footer;