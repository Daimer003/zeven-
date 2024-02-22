import {
    Box,
    Text
} from "@chakra-ui/react";



const SectionFive = () => {
    return (
        <Box
            display="flex"
            width="100%"
            flexDir="column"
            alignItems="center"
            gap="40px"
            marginTop="160px"
        >

            <Text
                as="h3"
                maxWidth="700px"
                fontSize="xxx-large"
                fontWeight="600"
                textAlign="center"
                color="white"
            >
                Nuestras cuentas
            </Text>
        </Box>
    );
}

export default SectionFive;