import { useRef, useState } from "react";
import {
    Box,
    Stack,
    Text,
    Button
} from "@chakra-ui/react";
import Image from "next/image";
import { FaArrowCircleDown, FaArrowCircleUp } from "react-icons/fa";
import { sectionSix } from "@/utils/Data/data";


const SectionSix = () => {
    const contentRef = useRef<any>(null);
    const Ref = useRef<any>(null);
    const [positionScroll, setPositionScroll] = useState<number>(560)

    //* Desplazamiento top
    const scrollTop = () => {
        if (contentRef.current) {
            contentRef.current.scrollBy({
                top: -230,
                behavior: 'smooth'
            });
            if (positionScroll !== 560) {
                setPositionScroll(positionScroll + 400)
            }
        }
    };

    //* Desplazamiento bottom
    const scrollBottom = () => {
        if (contentRef.current) {
            contentRef.current.scrollBy({
                top: 230,
                behavior: 'smooth'
            });
            if (positionScroll > 0) {
                setPositionScroll(positionScroll - 400)
            }
        }
    };

    return (
        <Stack
            display="flex"
            alignItems='center'
            direction={{ base: 'column', lg: 'row' }}
            width="100%"
            height='auto'
            marginTop={{ base: "80px", md: "160px" }}
            gap="40px"
        >
            <Box
                display='flex'
                position='relative'
            >
                <Button
                    display='flex'
                    position='absolute'
                    background='transparent'
                    left='40%'
                    top='-40px'
                    zIndex={9}
                    isDisabled={positionScroll == 560}
                    onClick={scrollTop}><FaArrowCircleUp size={40} /></Button>
                <Button
                    display='flex'
                    position='absolute'
                    background='transparent'
                    left='40%'
                    bottom='-40px'
                    zIndex={9}
                    isDisabled={positionScroll < 0}
                    onClick={scrollBottom}><FaArrowCircleDown size={40} /></Button>

                <Box
                    ref={contentRef}
                    display='flex'
                    flexDir='row'
                    alignItems='center'
                    width='100%'
                    maxHeight="700px"
                    overflow='hidden'
                    gap='40px'
                    position='relative'
                    borderLeft='2px'
                    borderColor='gray'
                >
                    <Box
                        display='flex'
                        width='8px'
                        height='140px'
                        content=""
                        position='absolute'
                        left='0px'
                        bgGradient='linear( #000000, #ffffff, #000000)'
                        transition='bottom 0.3s ease-in-out'
                        bottom={positionScroll}
                        zIndex='99'
                    ></Box>
                    <Box
                        display='flex'
                        height='700px'
                        flexDir='column'
                        marginLeft='20px'
                    >
                        {
                            sectionSix.map((item) => (
                                <Box
                                    key={item.id}
                                    display="flex"
                                    justifyContent="center"
                                    width="100%"
                                    height="auto"
                                    minHeight="200px"
                                    flexDir="column"
                                    gap="30px"
                                >
                                    <Text
                                        as='h4'
                                        fontSize='xx-large'
                                        fontWeight="700"
                                    >
                                        {item.title}
                                    </Text>
                                    <Text as='p'>
                                        {item.text}
                                    </Text>
                                </Box>
                            ))
                        }
                    </Box>
                </Box>
            </Box>
            <Box
                display='flex'
                justifyContent='center'
                width='100%'
            >
                <Image
                    src="/assets/iphone.webp"
                    alt="Imagen seccion six"
                    style={{
                        maxWidth: "450px",
                        maxHeight: "800px"
                    }}
                    width={600}
                    height={600}
                />
            </Box>
        </Stack >
    );
}

export default SectionSix;