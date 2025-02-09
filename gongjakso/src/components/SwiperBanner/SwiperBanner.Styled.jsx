import styled from 'styled-components';

export const Banners = styled.img`
    background-size: cover;
    width: 100%;
`;

export const SwiperContainer = styled.div`
    .swiper {
        width: 100%;
        height: 100%;
    }
    .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;

        /* Center slide text vertically */
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .swiper-slide img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .swiper-pagination-fraction,
    .swiper-pagination-custom,
    .swiper-horizontal > .swiper-pagination-bullets,
    .swiper-pagination-bullets.swiper-pagination-horizontal {
        background: transparent;
    }
    .swiper-pagination-bullet {
        background-color: white;
        opacity: 1;
        transition: background-color 0.3s ease;
    }

    .swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet,
    .swiper-pagination-horizontal.swiper-pagination-bullets
        .swiper-pagination-bullet {
        width: 1vw;
        max-width: 10px;
        height: 1vw;
        max-height: 10px;
        margin: 0 0.5vw;
    }

    .swiper-pagination-bullet-active {
        background-color: black;
    }
`;
