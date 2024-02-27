'use client'
import {
    Box,
    Text,
    Button,
    ButtonGroup,
    Spacer,
    Stack,
    Link,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
} from "@chakra-ui/react";
import Image from "next/image";
import { HamburgerIcon } from '@chakra-ui/icons'


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
                display={{ base: 'none', xl: 'flex' }}
                gap="20px"
            >
                <Stack
                    display="flex"
                    direction={{ base: 'column', xl: 'row' }}
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
            <Menu >
                <MenuButton
                    display={{ base: 'flex', xl: 'none' }}
                    as={IconButton}
                    aria-label='Options'
                    icon={<HamburgerIcon />}
                    variant='outline'
                />
                <MenuList>
                    <MenuItem command='⌘T'>
                        New Tab
                    </MenuItem>
                    <MenuItem command='⌘N'>
                        New Window
                    </MenuItem>
                    <MenuItem command='⌘⇧N'>
                        Open Closed Tab
                    </MenuItem>
                    <MenuItem command='⌘O'>
                        Open File...
                    </MenuItem>
                </MenuList>
            </Menu>
        </Box >
    );
}

export default Navbar;