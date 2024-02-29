import CardPrices from "@/components/cards/cardPrices";
import CarouselSwiper from "@/components/swiper";
import {
    Box,
    Text
} from "@chakra-ui/react";
import { SwiperSlide } from 'swiper/react';

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
                width="100%"
                gap='40px'
            >
                <CarouselSwiper breakpoint={3}>
                    <SwiperSlide>
                        <CardPrices />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardPrices />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardPrices />
                    </SwiperSlide>
                </CarouselSwiper>

            </Box>
        </Box>
    );
}

export default SectionFive;