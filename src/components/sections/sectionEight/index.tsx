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
                maxWidth='1000px'
                gap='20px'
            >
                <CarouselSwiper
                    breakpoint={3}
                    autoPlay={false}
                >
                    {
                        sectionEight.map(item => (
                            <SwiperSlide key={item.id}>
                                <Card >
                                    <Box
                                        display="flex"
                                        flexDir="column"
                                        justifyContent="center"
                                        alignItems="center"
                                        maxWidth="300px"
                                        height="500px"
                                        padding="20px 40px"
                                        boxSizing="border-box"
                                    >
                                        <Image
                                            src={item.img}
                                            alt="Imagen"
                                            style={{
                                                maxWidth: "200px",
                                                maxHeight: "200px"
                                            }}
                                            width={300}
                                            height={300}
                                        />
                                        <Text
                                            as="h5"
                                            fontSize='x-large'
                                            fontWeight='600'
                                            textAlign="center"
                                        >
                                            {item.title}
                                        </Text>
                                        <Text
                                            as="p"
                                            fontSize='large'
                                            fontWeight='300'
                                            textAlign="center"
                                        >
                                            {item.paragraph}
                                        </Text>
                                    </Box>
                                </Card>
                            </SwiperSlide>
                        ))
                    }
                </CarouselSwiper>
            </Box >
            <Text as="p">*Los precios son solamente para propósitos indicativos basados en los spreads de cuentas en MT5.</Text>
        </Box >
    );
}

export default SectionEight;