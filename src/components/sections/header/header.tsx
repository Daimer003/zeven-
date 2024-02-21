import Services from "@/components/services";
import Video from "@/components/video/video";
import {
    Box,
    Text,
    ButtonGroup,
    Button,
    Divider
} from "@chakra-ui/react";


const HeaderSecondary = () => {
    return (
        <Box
            display="flex"
            content=""
            width="100%"
            height="100vh"
            overflow="hidden"
        >
            <Video />
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                width="100%"
                height="100%"
                background="rgba(0,0,0, .8)"
                zIndex="99"
                left="0"
                right="0"
                gap="20px"
            >

                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    gap="10px"
                >
                    <Box maxWidth="600px" >
                        <Text as='h1' fontWeight="600" fontSize="48px" textAlign="center">
                            <>Explora  un universo de </>
                            <br />
                            <Text color="#01b2ab">Oportunidades </Text>
                        </Text>
                    </Box>
                    <Text as='p' margin="0" maxWidth="600px" textAlign="center">
                        Únete a Zeven y empieza a invertir de manera inteligente
                    </Text>
                </Box>
                <ButtonGroup gap='4'>
                    <Button
                        colorScheme='black'
                        variant="buttonPrimary"
                    >
                        Prueba demo gratis
                    </Button>
                    <Button
                        colorScheme='gray'
                        variant="buttonSecondary"
                        borderRadius='4px'
                    >
                        Abre una cuenta REAL
                    </Button>
                </ButtonGroup>
                <Divider maxWidth="1200px" marginTop="50px" bg='gray.800' />
                <Services />
            </Box>
        </Box >
    );
}

export default HeaderSecondary;