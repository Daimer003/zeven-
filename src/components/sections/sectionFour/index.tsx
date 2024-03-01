import Bag from "@/components/bag";
import {
    Box,
    Text,
    Button
} from "@chakra-ui/react";

const SectionFour = () => {
    return (
        <Box
            display="flex"
            width="100%"
            // height={{ base: 'auto', lg: '950px' }}
            flexDir="column"
            alignItems="center"
            gap="40px"
            marginTop={{ base: "80px", md: "160px" }}
            position="relative"
        >
            <Box
                display="flex"
                content=""
                width="1500px"
                height="100%"
                position="absolute"
                left="-70%"
                top="-200px"
                zIndex={0}
            >
                <Box
                    width="100%"
                    height="100%"
                    bgGradient='radial-gradient(circle, #01b2acc2 0%, rgba(255,255,255,0) 42%)'
                />
            </Box>
            <Text
                as="h3"
                maxWidth="700px"
                lineHeight='50px'
                fontSize={{ base: "xx-large", md: "xxx-large" }}
                fontWeight="600"
                textAlign="center"
                color="white"
            >
                Reciba actualizaciones en
                Tiempo real
            </Text>
            <Box
                display="flex"
                gap='20px'
                width="100%"
            >
                <Button
                    width="100%"
                    colorScheme='black'
                    variant="buttonPrimary"
                >
                    Forex
                </Button>
                <Button
                    width="100%"
                    colorScheme='gray'
                    variant="buttonSecondary"
                    borderRadius='4px'
                >
                    Crypto
                </Button>
                <Button
                    width="100%"
                    colorScheme='gray'
                    variant="buttonSecondary"
                    borderRadius='4px'
                >
                    Acciones
                </Button>
            </Box>
            <Bag />
        </Box>
    );
}

export default SectionFour;