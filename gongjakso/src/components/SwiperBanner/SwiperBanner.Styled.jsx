import styled from 'styled-components';

export const Banners = styled.img`
    background-size: cover;
    width: 100%;
`;

export const SwiperContainer = styled.div`
    position: relative;
    padding-top: 43%;

    .swiper {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .swiper-pagination-fraction,
    .swiper-pagination-custom,
    .swiper-horizontal > .swiper-pagination-bullets,
    .swiper-pagination-bullets.swiper-pagination-horizontal {
        width: 100%; /* 내부 요소의 너비는 자동으로 설정 */
        padding: 0 0.3rem;
        border-radius: 10px;
        background: transparent;
        /* background-color: #eaeaea; */
    }

    .swiper-pagination-bullet {
        width: 0.8rem;
        height: 0.8rem;
        border: 1px solid #eaeaea;
        background-color: white;
        opacity: 10;
    }
    .swiper-pagination-bullet-active {
        background-color: black;
    }
`;
