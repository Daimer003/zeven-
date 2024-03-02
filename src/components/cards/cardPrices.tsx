import { BoxCard, BoxHeader, BoxBody } from "@/styles/Cards/cardPrices.styles";
import {
    Box,
    Text,
    Heading,
    Stack,
    Button
} from "@chakra-ui/react";

interface Props {
    select: boolean,
    dataPrice: any
}

const CardPrices = ({ select, dataPrice }: Props) => {
    return (
        <BoxCard
            maxWidth="345px"
            transform='scale(1)'
            transition="all .5s"
            _hover={{ transform: 'scale(0.96)' }}
        >
            <BoxHeader bg={select ? "#01b2ab" : "#404F57"} >
                <Text as='h5' fontSize='xl' fontWeight='bold'>{dataPrice.title}</Text>
            </BoxHeader>
            <BoxBody>
                <Stack spacing='2'>
                    <Box>
                        <Text pt='1' fontSize='sm'>
                            MinDep
                        </Text>
                        <Heading size='lg' textTransform='uppercase'>
                            {dataPrice.value1}
                        </Heading>
                    </Box>
                    <Box>
                        <Text pt='1' fontSize='sm'>
                            Commission
                        </Text>
                        <Heading size='lg' textTransform='uppercase'>
                            {dataPrice.value2}
                        </Heading>
                    </Box>
                    <Box>
                        <Text pt='1' fontSize='sm'>
                            Spread desde
                        </Text>
                        <Heading size='lg' textTransform='uppercase'>
                            {dataPrice.value3}
                        </Heading>
                    </Box>
                    <Box>
                        <Text pt='1' fontSize='sm'>
                            Leverage to
                        </Text>
                        <Heading size='lg' textTransform='uppercase'>
                            {dataPrice.value4}
                        </Heading>
                    </Box>
                    <Box>
                        <Text pt='1' fontSize='sm'>
                            Min Trade Size
                        </Text>
                        <Heading size='lg' textTransform='uppercase'>
                            {dataPrice.value5}
                        </Heading>
                    </Box>
                    <Box>
                        <Text pt='1' fontSize='sm'>
                            Swap Free
                        </Text>
                        <Heading size='lg' textTransform='uppercase'>
                            {dataPrice.value6}
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