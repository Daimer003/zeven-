import { BoxCard, BoxHeader, BoxBody } from "@/styles/Cards/cardPrices.styles";
import { Box, Text, Heading, Stack, Button } from "@chakra-ui/react";



const CardPrices = () => {
    return (
        <BoxCard>
            <BoxHeader bg="#01b2ab">
                <Text as='h5' fontSize='xl' fontWeight='bold'>PRO ECN</Text>
            </BoxHeader>
            <BoxBody>
                <Stack spacing='2'>
                    <Box>
                        <Text pt='1' fontSize='sm'>
                            MinDep
                        </Text>
                        <Heading size='lg' textTransform='uppercase'>
                            $10.000
                        </Heading>
                    </Box>
                    <Box>
                        <Text pt='1' fontSize='sm'>
                            Commission
                        </Text>
                        <Heading size='lg' textTransform='uppercase'>
                            $5per Lot
                        </Heading>
                    </Box>
                    <Box>
                        <Text pt='1' fontSize='sm'>
                            Spread desde
                        </Text>
                        <Heading size='lg' textTransform='uppercase'>
                            0.0
                        </Heading>
                    </Box>
                    <Box>
                        <Text pt='1' fontSize='sm'>
                            Leverage to
                        </Text>
                        <Heading size='lg' textTransform='uppercase'>
                            1:100
                        </Heading>
                    </Box>
                    <Box>
                        <Text pt='1' fontSize='sm'>
                            Min Trade Size
                        </Text>
                        <Heading size='lg' textTransform='uppercase'>
                            0.01
                        </Heading>
                    </Box>
                    <Box>
                        <Text pt='1' fontSize='sm'>
                            Swap Free
                        </Text>
                        <Heading size='lg' textTransform='uppercase'>
                            Not Available
                        </Heading>
                    </Box>
                </Stack>
                <Button
                    colorScheme='black'
                    variant="buttonPrimary"
                >
                    Invierte ahora
                </Button>
            </BoxBody>
        </BoxCard>
    );
}

export default CardPrices;