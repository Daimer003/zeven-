import Card from "@/components/cards/card";
import { sectionEight } from "@/utils/Data/data";
import CarouselSwiper from "@/components/swiper";
import { SwiperSlide } from 'swiper/react';
import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";


const SectionEight = () => {
    return (
        <Box
            display="flex"
            width='100%'
            flexDir="column"
            alignItems='center'
            gap="40px"
            marginTop={{ base: "80px", md: "160px" }}
            position="relative"
            zIndex={10}
        >
            <Box>

            </Box>
            <Text
                as="h3"
                maxW="650px"
                lineHeight='50px'
                fontSize={{ base: "xx-large", md: "xxx-large" }}
                fontWeight="600"
                textAlign="center"
                color="white"
            >
                El mejor aliado para acceder
                a un universo de oportunidades
            </Text>
            <Box
                display='flex'
                justifyContent='center'
                width='100%'
                gap='20px'
            >
                <CarouselSwiper
                    breakpoint={3}
                    autoPlay={false}
                >
                    {
                        sectionEight.map(item => (
                            <SwiperSlide key={item.id}>
                                <Box
                                    maxWidth="345px"
                                    height="auto"
                                    boxSizing="border-box"
                                    margin="auto"
                                >
                                    <Card >
                                        <Box
                                            display="flex"
                                            flexDir="column"
                                            justifyContent="center"
                                            alignItems="center"
                                            height="539px"
                                        >
                                            <Image
                                                src={item.img}
                                                alt="Imagen"
                                                style={{
                                                    maxWidth: "300px",
                                                    maxHeight: "300px"
                                                }}
                                                width={300}
                                                height={300}
                                            />
                                            <Text
                                                as="h5"
                                                fontSize='x-large'
                                                fontWeight='600'
                                                textAlign="center"
                                                color="white"
                                            >
                                                {item.title}
                                            </Text>
                                            <Text
                                                as="p"
                                                fontSize='large'
                                                fontWeight='300'
                                                textAlign="center"
                                                color="white"
                                            >
                                                {item.paragraph}
                                            </Text>
                                        </Box>
                                    </Card>
                                </Box>
                            </SwiperSlide>
                        ))
                    }
                </CarouselSwiper>
            </Box >
            <Text
                as="p"
                color="white"
                textAlign="center"
            >
                *Los precios son solamente para propósitos indicativos basados en los spreads de cuentas en MT5.
            </Text>
        </Box >
    );
}

export default SectionEight;