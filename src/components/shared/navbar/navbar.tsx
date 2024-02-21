import {
    Box,
    Text,
    Button,
    ButtonGroup,
    Spacer,
    Stack,
    Link
} from "@chakra-ui/react";
import Image from "next/image";


const Navbar = () => {
    return (
        <Box
            display="flex"
            alignItems="center"
            as="nav"
            width="100%"
            height="auto"
            padding="20px 0"
            boxSizing="border-box"
            position="absolute"
            zIndex="999"
        >
            <Box
                display="flex"
                alignItems="center"
                gap="20px"
            >
                <Image
                    src="assets/logo.svg"
                    alt="Logo de zeven"
                    width={35}
                    height={35}
                />
                <Text as="h2" fontSize="x-large">Zeven</Text>
            </Box>
            <Spacer />
            <Box
                display="flex"
                gap="20px"
            >
                <Stack
                    direction={{ base: 'column', xl: 'row' }}
                    display={{ base: 'none', xl: 'flex' }}
                    width={{ base: 'full', xl: 'auto' }}
                    alignItems="center"
                    gap="40px"
                >
                    <Link href="/works" color="#fff" >
                        Opera con nosotros
                    </Link>
                    <Link href="/works" color="#fff" >
                        Plataformas
                    </Link>
                    <Link href="/works" color="#fff" >
                        Programa IB
                    </Link>
                    <Link href="/works" color="#fff" >
                        Educación
                    </Link>
                    <Link href="/recommendations" color="#fff" >
                        Empresa
                    </Link>
                </Stack>
                <ButtonGroup gap='4'>
                    <Button
                        colorScheme='black'
                        variant="buttonPrimary"
                    >
                        Iniciar sesión
                    </Button>
                    <Button
                        colorScheme='gray'
                        variant="buttonSecondary"
                        borderRadius='4px'
                    >
                        Registrarse
                    </Button>

                </ButtonGroup>
            </Box>
        </Box >
    );
}

export default Navbar;