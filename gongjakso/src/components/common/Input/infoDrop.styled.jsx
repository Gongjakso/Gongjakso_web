import styled from 'styled-components';

export const Dropdown1 = styled.div`
    font-family: 'PreRegular';
    .rnd > button {
        border: 1px solid black;
        text-align: left;
        padding: 10px 19px;
        width: 400px;
        font-size: ${({ theme }) => theme.fontSize.base};
        color: ${props => (props.$isopen ? 'black' : '#a6a6a6')};
        border-radius: 7px;

        &:hover,
        &:focus {
            color: #0595ff;
        }
    }
    .rnd__root-menu.rnd__menu {
        width: 400px !important;
        z-index: 1;
        font-family: 'PreRegular';
    }

    .rnd .rnd__root-menu.rnd__menu .rnd__option .rnd__option-label {
        font-size: 1.1rem;
        padding-left: 5px;
    }

    .rnd
        .rnd__root-menu.rnd__menu
        .rnd__option.rnd__option--with-menu
        .rnd__menu.rnd__submenu.rnd__submenu--opened {
        max-height: 250px;
        overflow-y: scroll;
        width: 210px !important;
    }
    .rnd__option--with-menu:hover > .rnd__submenu {
        display: block;
        color: black;
    }
    .rnd__option:not(.rnd__option--disabled):hover {
        background-color: black;
        color: white;
        transition: background-color 0.1s ease;
        border-radius: 4px;
    }
`;
export const Dropdown2 = styled.div`
    .rnd > button {
        border: 0.09375rem solid #a3a3a3;
        text-align: left;
        padding: 0.8125rem 0.9375rem;
        width: 26.875rem;

        @media screen and (min-width: 375px) and (max-width: 549px) {
            width: 85vw;
        }
        @media screen and (min-width: 550px) and (max-width: 1023px) {
            width: 90vw;
        }

        font-size: 1.05rem;
        color: black;
        border-radius: 0.4375rem;
        font-family: 'PreMedium';
    }
    .rnd__root-menu.rnd__menu {
        width: 26.875rem !important;
        z-index: 1;
        font-family: 'PreRegular';

        @media screen and (min-width: 375px) and (max-width: 549px) {
            width: 85vw !important;
        }
        @media screen and (min-width: 550px) and (max-width: 1023px) {
            width: 90vw !important;
        }
    }

    .rnd .rnd__root-menu.rnd__menu .rnd__option .rnd__option-label {
        // font-size: ${({ theme }) => theme.fontSize.m};
        padding-left: 0.3125rem;
        font-size: 1rem;
    }

    .rnd
        .rnd__root-menu.rnd__menu
        .rnd__option.rnd__option--with-menu
        .rnd__menu.rnd__submenu.rnd__submenu--opened {
        max-height: 15.625rem;
        overflow-y: scroll;
        width: 13.125rem !important;
    }
    .rnd__option--with-menu:hover > .rnd__submenu {
        display: block;
        color: black;
    }
    .rnd__option:not(.rnd__option--disabled):hover {
        background-color: black;
        color: white;
        transition: background-color 0.1s ease;
        border-radius: 0.25rem;
    }
`;

export const Dropdown3 = styled.div`
    .rnd > button {
        border: 0.09375rem solid #a3a3a3;
        text-align: left;
        padding: 0.8125rem 0.9375rem;
        width: 26.875rem;

        @media screen and (min-width: 375px) and (max-width: 549px) {
            width: 85vw;
        }
        @media screen and (min-width: 550px) and (max-width: 1023px) {
            width: 90vw;
        }

        font-size: 1.05rem;
        color: black;
        border-radius: 0.4375rem;
        font-family: 'PreMedium';
    }
    .rnd__root-menu.rnd__menu {
        width: 26.875rem !important;
        z-index: 1;
        font-family: 'PreRegular';
        position: absolute;

        @media screen and (min-width: 375px) and (max-width: 549px) {
            width: 40vw !important;
            left: 0rem;
        }
        @media screen and (min-width: 550px) and (max-width: 1023px) {
            width: 50vw !important;
            left: 0rem;
        }
    }

    .rnd .rnd__root-menu.rnd__menu .rnd__option .rnd__option-label {
        // font-size: ${({ theme }) => theme.fontSize.m};
        padding-left: 0.3125rem;
        font-size: 1rem;
    }

    .rnd
        .rnd__root-menu.rnd__menu
        .rnd__option.rnd__option--with-menu
        .rnd__menu.rnd__submenu.rnd__submenu--opened {
        max-height: 15.625rem;
        overflow-y: scroll;
        width: 13.125rem !important;

        @media screen and (min-width: 375px) and (max-width: 549px) {
            width: 45vw !important;
        }
        @media screen and (min-width: 550px) and (max-width: 1023px) {
            width: 40vw !important;
        }
    }
    .rnd__option--with-menu:hover > .rnd__submenu {
        display: block;
        color: black;
    }
    .rnd__option:not(.rnd__option--disabled):hover {
        background-color: black;
        color: white;
        transition: background-color 0.1s ease;
        border-radius: 0.25rem;
    }
`;

export const Button = styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
