'use client'
import React, { useRef } from "react";
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
    IconButton,
    useDisclosure,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from "@chakra-ui/react";
import Image from "next/image";
import { HamburgerIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'



const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef<any>()

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
                <Text as="h2" fontSize="x-large">
                    Zeven
                </Text>
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
                    ref={btnRef}
                    onClick={onOpen}
                />
                <Drawer
                    isOpen={isOpen}
                    placement='right'
                    onClose={onClose}
                    finalFocusRef={btnRef}
                >
                    <DrawerOverlay />
                    <DrawerContent bg="black">
                        <DrawerCloseButton />
                        <DrawerBody
                            display='flex'
                            flexDir='column'
                            gap='20px'
                            marginTop='40px'
                        >
                            <Link as={NextLink} href='/home' color='white'>
                                Opera con nosotros
                            </Link>
                            <Link as={NextLink} href='/home' color='white'>
                                Plataformas
                            </Link>
                            <Link as={NextLink} href='/home' color='white'>
                                Programa IB
                            </Link>
                            <Link as={NextLink} href='/home' color='white'>
                                Educación
                            </Link>
                            <Link as={NextLink} href='/home' color='white'>
                                Empresa
                            </Link>
                        </DrawerBody>

                        <DrawerFooter>
                            <Button
                                colorScheme='black'
                                variant="buttonPrimary"
                                mr={3} onClick={onClose}
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
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
            </Menu>
        </Box >
    );
}

export default Navbar;