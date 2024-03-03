import { BoxZeven } from "@/styles/Container/container.styles";
import {
    Box,
    Text,
    Button
} from "@chakra-ui/react";
import Image from "next/image";
import CardBag from "../cards/cardBag";


interface Props {
    details: any,
}

const Bag = ({ details }: Props) => {

    return (
        <BoxZeven>
            <Box
                display="flex"
                flexDir="column"
                justifyContent="center"
                alignItems="center"
                width="100%"
                height="auto"
                padding="20px"
                boxSizing="border-box"
            >
                <Box
                    display="flex"
                    flexDir={{ base: "column", md: "row" }}
                    width="100%"
                    height="auto"
                >
                    <Box
                        display="flex"
                        flexDir="column"
                        justifyContent="center"
                        gap="20px"
                        minH="220px"
                    >
                        <Text
                            as="h4"
                            fontSize="xxx-large"
                            fontWeight="600"
                            color="white"
                        >{details.title}</Text>
                        <Text
                            as="p"
                            color="white"
                        >
                            {details.text}
                        </Text>
                        <Button
                            colorScheme='gray'
                            variant="buttonPrimary"
                            borderRadius='4px'
                        >
                            Invierte ahora
                        </Button>
                    </Box>
                    <Box
                        display="flex"
                        justifyContent="center"
                        width="100%"
                    >
                        <Image
                            src={details.img}
                            alt="Imagen del header"
                            width={400}
                            height={300}
                        />
                    </Box>
                </Box>
                <Box
                    display="flex"
                    width="100%"
                    gap="20px"
                    overflowX="auto"
                >
                    {
                        details?.currency.map((item: any, index: any) => (
                            <CardBag
                                key={index}
                                currencies={details.symbol[index]}
                                value={item} />
                        ))
                    }

                </Box>
            </Box>
        </BoxZeven>
    )
}

export default Bag;