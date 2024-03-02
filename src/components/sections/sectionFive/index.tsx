import CardPrices from "@/components/cards/cardPrices";
import CarouselSwiper from "@/components/swiper";
import { prices } from "@/utils/Data/data";
import {
    Box,
    Text
} from "@chakra-ui/react";
import { useState } from "react";
import { SwiperSlide } from 'swiper/react';



const SectionFive = () => {
    const [cardId, setCardId] = useState<number>(2)

    //*Obtiene el id de la tarjeta
    const handleId = (id: number) => {
        setCardId(id)
    };


    return (
        <Box
            display="flex"
            width="100%"
            justifyContent="center"
        >
            <Box
                display="flex"
                width="100%"
                flexDir="column"
                alignItems="center"
                justifyContent="center"
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
                    justifyContent="center"
                    width="100%"
                    gap='40px'
                >
                    <CarouselSwiper
                        breakpoint={3}
                        autoPlay={false}
                    >
                        {
                            prices.map((price, index) => (
                                <SwiperSlide
                                    key={index}
                                    onClick={() => handleId(price.id)}>
                                    <CardPrices dataPrice={price} select={cardId == price.id} />
                                </SwiperSlide>
                            ))
                        }

                    </CarouselSwiper>

                </Box>
            </Box>
        </Box>
    );
}

export default SectionFive;