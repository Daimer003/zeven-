import ContainerZeven from "@/components/container";
import CarouselSwiper from "@/components/swiper";
import { sectionTwo } from "@/utils/Data/data";
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
            <CarouselSwiper breakpoint={1} autoPlay={
                {
                    delay: 2500,
                    disableOnInteraction: true,
                }
            }>
                {
                    sectionTwo.map((item, index) => (
                        <SwiperSlide key={index}>
                            <ContainerZeven
                                title={item.title}
                                img={item.img}
                            />
                        </SwiperSlide>
                    ))
                }

            </CarouselSwiper>
        </Box>
    );
}

export default SectionTwo;