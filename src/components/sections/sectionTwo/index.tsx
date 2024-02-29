import ContainerZeven from "@/components/container";
import CarouselSwiper from "@/components/swiper";
import { Box } from "@chakra-ui/react";
import { SwiperSlide } from 'swiper/react';

const SectionTwo = () => {
    return (
        <Box
            display="flex"
            width="100%"
            height='auto'
            marginTop={{ base: "80px", lg: "0" }}
        >
            <CarouselSwiper breakpoint={1}>
                <SwiperSlide>
                    <ContainerZeven />
                </SwiperSlide>
                <SwiperSlide>
                    <ContainerZeven />
                </SwiperSlide>
                <SwiperSlide>
                    <ContainerZeven />
                </SwiperSlide>
            </CarouselSwiper>
        </Box>
    );
}

export default SectionTwo;