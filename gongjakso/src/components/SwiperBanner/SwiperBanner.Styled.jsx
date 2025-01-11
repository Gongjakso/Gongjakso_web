import styled from 'styled-components';

export const Banners = styled.img`
    background-size: cover;
    width: 100%;
`;

export const SwiperContainer = styled.div`
    position: relative;
    /* width: 100%; */
    padding-top: 45%;
    .swiper {
        position: absolute;
        top: 0;
        left: 0;
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
        width: auto;
        padding: 0.3rem 0;
        border-radius: 10px;
        background: transparent;
        background-color: #eaeaea;
    }
    .swiper-pagination-bullet {
        width: 0.7rem;
        height: 0.7rem;
        border: 1px solid #eaeaea;
        background-color: white;
        opacity: 1;
        transition: background-color 0.3s ease;
    }

    .swiper-pagination-bullet-active {
        background-color: black;
    }
`;
