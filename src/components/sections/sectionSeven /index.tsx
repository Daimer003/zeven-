import Card from "@/components/cards/card";
import CarouselSwiper from "@/components/swiper";
import { SwiperSlide } from 'swiper/react';
import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import { sectionSeven } from "@/utils/Data/data";



const SectionSeven = () => {
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
            <Text
                as="h3"
                fontSize={{ base: "xx-large", md: "xxx-large" }}
                fontWeight="600"
                textAlign="center"
                color="white"
            >
                Nuestros beneficios
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
                        sectionSeven.map(item => (
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
                                            width="100%"
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
                                                as="span"
                                                fontSize='x-large'
                                                fontWeight='600'
                                            >
                                                {item.title}
                                            </Text>
                                        </Box>
                                    </Card>
                                </Box>
                            </SwiperSlide>
                        ))

                    }
                </CarouselSwiper>

            </Box>
            <Text as="p">*Los precios son solamente para propósitos indicativos basados en los spreads de cuentas en MT5.</Text>
        </Box>
    );
}

export default SectionSeven;