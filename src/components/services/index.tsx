import { Box, HStack, Text } from "@chakra-ui/react";
import { headerServices } from "@/utils/Data/data";



const Services = () => {
    return (
        <Box
            display="flex"
            width="100%"
            height="auto"
            marginTop="40px"
            zIndex="40"
            overflow="auto"
        >
            <HStack spacing='24px' w="100%">
                {
                    headerServices.map((service, index) => (
                        <>
                            <Box
                                key={index}
                                display="flex"
                                flexDir="column"
                                justifyContent="center"
                                alignItems="center"
                                w='100%'
                                minW='200px'
                                minHeight='140px'
                                // bg='rgba(255, 255, 255, 0.08)'
                                padding="10px"
                                boxSizing="border-box"
                                borderRadius="8px"
                            >
                                <Box
                                    display="flex"
                                    alignItems="center"
                                    gap="10px"
                                >
                                    {
                                        <service.icon
                                            color="white"
                                            size="28px"
                                        />
                                    }
                                    <Text
                                        as="span"
                                        fontSize="x-large"
                                        fontWeight="500"
                                        color="white"
                                        textAlign="center"
                                    >
                                        {service.title}
                                    </Text>
                                </Box>
                                <Text
                                    as="span"
                                    color="white"
                                    textAlign="center"
                                >
                                    {service.text}
                                </Text>
                            </Box>
                            {
                                index <= 3 &&
                                <Box
                                    display='flex'
                                    minWidth="2px"
                                    width='3px'
                                    height='140px'
                                    content=""
                                    position='relative'
                                    bgGradient='linear( #0000006a, #ffffff, #0000007d)'
                                    zIndex='999'
                                />
                            }
                        </>

                    ))
                }

            </HStack>
        </Box>
    );
}

export default Services;