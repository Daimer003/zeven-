import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

interface Props {
    children: any,
    breakpoint: number,
    autoPlay: any
}

const CarouselSwiper = ({ children, breakpoint, autoPlay }: Props) => {
    return (
        <Swiper
            // install Swiper modules
            modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={80}
            slidesPerView={1}
            autoplay={autoPlay}
            breakpoints={{
                640: {
                    slidesPerView: 1,
                },
                1024: {
                    slidesPerView: breakpoint,
                },
            }}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => swiper}
        // onSlideChange={() => console.log('slide change')}
        >
            {children}
        </Swiper>
    );
};

export default CarouselSwiper;