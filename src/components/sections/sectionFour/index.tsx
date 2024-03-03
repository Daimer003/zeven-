import Bag from "@/components/bag";
import { ServiceForex } from "@/services/service.forex";
import {
    Box,
    Text,
    Button
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

const SectionFour = () => {
    const [quotes, setQuotes] = useState<any>()
    const [bag, setBag] = useState<string>('Forex')
    const dataForex = [
        {
            id: 1,
            title: "Forex",
            text: "Ingrese al comercio de divisas ahora. Aprenda, opere en la cuenta demo y únase a uno de los mercados financieros más grandes.",
            img: "/assets/forex1.webp",
            flag: ["/assets/svgs/icon-us.svg", "/assets/svgs/icon-gbp.svg", "/assets/svgs/icon-jpy.svg"],
            symbol: ["EURUSD", "EURGBP", "EURJPY"],
            currency: [quotes?.USDEUR, quotes?.USDGBP, quotes?.USDAUD]
        },
        {
            id: 2,
            title: "Crypto",
            text: "Descubre oportunidades ilimitadas de trading en el mercado en expansión más grandes del mundo",
            img: "/assets/forex2.webp",
            flag: ["/assets/svgs/icon-btc.svg"],
            symbol: ["USDBTC"],
            currency: [quotes?.USDBTC]
        },
        {
            id: 3,
            title: "Acciones",
            text: "Únete a nosotros y descubre oportunidades sin límites en los mercados financieros.",
            img: "/assets/forex3.webp",
            flag: ["/assets/svgs/icon-us.svg", "/assets/svgs/icon-us.svg"],
            symbol: ["USDEUR", "USDGBP"],
            currency: [quotes?.USDEUR, quotes?.USDGBP,]
        },
        {
            id: 4,
            title: "Metales",
            text: "Te proporcionamos las herramientas necesarias para sacar el máximo provecho de este emocionante mercado y en constante crecimiento",
            img: "/assets/forex4.webp",
            flag: ["/assets/svgs/icon-us.svg", "/assets/svgs/icon-us.svg"],
            symbol: ["USDEUR", "USDGBP"],
            currency: [quotes?.USDEUR, quotes?.USDGBP,]
        }
    ]

    //*Se ejecuta el llamado cuando carga el componete
    useEffect(() => {
        const getData = async () => {
            const res = await ServiceForex.getForex()
            setQuotes(res?.cachedData.quotes)
        }
        getData()
    }, [])

    return (
        <Box
            display="flex"
            width="100%"
            // height={{ base: 'auto', lg: '950px' }}
            flexDir="column"
            alignItems="center"
            gap="40px"
            marginTop={{ base: "80px", md: "160px" }}
            position="relative"
        >
            <Box
                display="flex"
                content=""
                width="1500px"
                height="100%"
                position="absolute"
                left="-70%"
                top="-200px"
                zIndex={0}
            >
                <Box
                    width="100%"
                    height="100%"
                    bgGradient='radial-gradient(circle, #01b2acc2 0%, rgba(255,255,255,0) 42%)'
                />
            </Box>
            <Text
                as="h3"
                maxWidth="700px"
                lineHeight='50px'
                fontSize={{ base: "xx-large", md: "xxx-large" }}
                fontWeight="600"
                textAlign="center"
                color="white"
            >
                Reciba actualizaciones en
                Tiempo real
            </Text>
            <Box
                display="flex"
                gap='20px'
                width="100%"
            >
                <Button
                    width="100%"
                    colorScheme='black'
                    variant={bag == "Forex" ? "buttonPrimary" : "buttonSecondary"}
                    onClick={() => setBag("Forex")}
                >
                    Forex
                </Button>
                <Button
                    width="100%"
                    colorScheme='gray'
                    variant={bag == "Crypto" ? "buttonPrimary" : "buttonSecondary"}
                    borderRadius='4px'
                    onClick={() => setBag("Crypto")}
                >
                    Crypto
                </Button>
                <Button
                    width="100%"
                    colorScheme='gray'
                    variant={bag == "Metales" ? "buttonPrimary" : "buttonSecondary"}
                    borderRadius='4px'
                    onClick={() => setBag("Metales")}
                >
                    Metales
                </Button>
            </Box>
            <Box
                display="flex"
                width="100%"
                height='auto'
            >
                {
                    dataForex.map((item, index) => {
                        if (bag == item.title) {
                            return (
                                <Bag key={index} details={item} />
                            )
                        }

                    })
                }
                {/* <CarouselSwiper breakpoint={1} autoPlay={false}>
                    {
                        dataForex.map((item, index) => (
                            <SwiperSlide key={index}>
                                <Bag details={item} />
                            </SwiperSlide>
                        ))
                    }
                </CarouselSwiper> */}
            </Box>
        </Box>
    );
}

export default SectionFour;