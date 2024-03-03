'use client'
import React from "react";
import {
    Box,
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
    useColorModeValue
} from "@chakra-ui/react";
import Image from "next/image";
import { HamburgerIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import ThemeToggleButton from "@/components/modeDark/theme-toggle-button";



const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef<any>()

    return (
        <Box
            display="flex"
            justifyContent='center'
            alignItems="center"
            as="nav"
            width='100%'
            height="auto"
            padding="20px"
            boxSizing="border-box"
            bg={useColorModeValue('#ffffff3', '#0c0c0c80')}
            css={{ backdropFilter: 'blur(10px)' }}
            position="fixed"
            left='0'
            zIndex="9999"
        >
            <Box
                display='flex'
                width="100%"
                maxWidth='1145px'
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
                        <Link
                            href="#header"
                            color="gray.200"
                            fontWeight="600"
                            fontSize="large"
                        >
                            Opera con nosotros
                        </Link>
                        <Link
                            href="/works"
                            color="gray.200"
                            fontWeight="600"
                            fontSize="large"
                        >
                            Plataformas
                        </Link>
                        <Link
                            href="/works"
                            color="gray.200"
                            fontWeight="600"
                            fontSize="large"
                        >
                            Programa IB
                        </Link>
                        <Link
                            href="/works"
                            color="gray.200"
                            fontWeight="600"
                            fontSize="large"
                        >
                            Educación
                        </Link>
                        <Link
                            href="/works"
                            color="gray.200"
                            fontWeight="600"
                            fontSize="large"
                        >
                            Empresa
                        </Link>
                    </Stack>
                    <ButtonGroup gap='4'>
                        <Link
                            href="https://app.zevenglobal.com/user-auth/login"
                            target="_blank">
                            <Button
                                colorScheme='black'
                                variant="buttonPrimary"
                            >
                                Iniciar sesión
                            </Button>
                        </Link>
                        <Link
                            href="https://app.zevenglobal.com/user-auth/register"
                            target="_blank">
                            <Button
                                colorScheme='gray'
                                variant="buttonSecondary"
                                borderRadius='4px'
                            >
                                Registrarse
                            </Button>
                        </Link>
                        <ThemeToggleButton />
                    </ButtonGroup>
                </Box>
                <Menu  >
                    <MenuButton
                        display={{ base: 'flex', xl: 'none' }}
                        color="white"
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
                        <DrawerContent bg="black" >
                            <DrawerCloseButton />
                            <DrawerBody
                                display='flex'
                                flexDir='column'
                                gap='20px'
                                marginTop='80px'
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
                                <ThemeToggleButton />
                            </DrawerBody>

                            <DrawerFooter>
                                <Link
                                    href="https://app.zevenglobal.com/user-auth/login"
                                    target="_blank">
                                    <Button
                                        colorScheme='black'
                                        variant="buttonPrimary"
                                        mr={3} onClick={onClose}
                                    >
                                        Iniciar sesión
                                    </Button>
                                </Link>
                                <Link
                                    href="https://app.zevenglobal.com/user-auth/register"
                                    target="_blank">
                                    <Button
                                        colorScheme='gray'
                                        variant="buttonSecondary"
                                        borderRadius='4px'
                                    >
                                        Registrarse
                                    </Button>
                                </Link>
                            </DrawerFooter>
                        </DrawerContent>
                    </Drawer>
                </Menu>
            </Box>
        </Box >
    );
}

export default Navbar;