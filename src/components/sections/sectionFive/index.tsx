import CardPrices from "@/components/cards/cardPrices";
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
            marginTop={{ base: "80px", md: "160px" }}
        >

            <Text
                as="h3"
                maxWidth="700px"
                fontSize={{ base: "xx-large", md: "xxx-large" }}
                fontWeight="600"
                textAlign="center"
                color="white"
            >
                Nuestras cuentas
            </Text>
            <Box
                display='flex'
                gap='40px'
            >
                <CardPrices />
                <CardPrices />
                <CardPrices />
            </Box>
        </Box>
    );
}

export default SectionFive;