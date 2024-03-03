import { BoxCard, BoxHeader, BoxBody } from "@/styles/Cards/cardPrices.styles";
import {
    Box,
    Text,
    Heading,
    Stack,
    Button
} from "@chakra-ui/react";
import Link from "next/link";

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
                <Text
                    as='h5'
                    fontSize='xl'
                    fontWeight='bold'
                    color="white"
                >
                    {dataPrice.title}
                </Text>
            </BoxHeader>
            <BoxBody>
                <Stack spacing='2'>
                    <Box>
                        <Text
                            pt='1'
                            fontSize='sm'
                            color="white"
                        >
                            MinDep
                        </Text>
                        <Heading
                            size='lg'
                            color="white"
                        >
                            {dataPrice.value1}
                        </Heading>
                    </Box>
                    <Box>
                        <Text
                            pt='1'
                            fontSize='sm'
                            color="white"
                        >
                            Commission
                        </Text>
                        <Heading
                            size='lg'
                            color="white"
                        >
                            {dataPrice.value2}
                        </Heading>
                    </Box>
                    <Box>
                        <Text
                            pt='1'
                            fontSize='sm'
                            color="white"
                        >
                            Spread desde
                        </Text>
                        <Heading
                            size='lg'
                            color="white"
                        >
                            {dataPrice.value3}
                        </Heading>
                    </Box>
                    <Box>
                        <Text
                            pt='1'
                            fontSize='sm'
                            color="white"
                        >
                            Leverage to
                        </Text>
                        <Heading
                            size='lg'
                            color="white"
                        >
                            {dataPrice.value4}
                        </Heading>
                    </Box>
                    <Box>
                        <Text
                            pt='1'
                            fontSize='sm'
                            color="white"
                        >
                            Min Trade Size
                        </Text>
                        <Heading
                            size='lg'
                            color="white"
                        >
                            {dataPrice.value5}
                        </Heading>
                    </Box>
                    <Box>
                        <Text
                            pt='1'
                            fontSize='sm'
                            color="white"
                        >
                            Swap Free
                        </Text>
                        <Heading
                            size='lg'
                            color="white"
                        >
                            {dataPrice.value6}
                        </Heading>
                    </Box>
                </Stack>
                <Link
                    href="https://app.zevenglobal.com/user-auth/register"
                    target="_blank"
                >

                    <Button
                        display="flex"
                        width="100%"
                        colorScheme='black'
                        variant="buttonPrimary"
                        zIndex={999}

                    >
                        Invierte ahora
                    </Button>
                </Link>
            </BoxBody>
        </BoxCard>
    );
}

export default CardPrices;