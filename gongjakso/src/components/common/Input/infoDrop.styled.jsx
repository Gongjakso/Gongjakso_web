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
        border: 1.5px solid #a3a3a3;
        text-align: left;
        padding: 13px 15px;
        width: 430px;
        font-size: ${({ theme }) => theme.fontSize.m};
        color: black;
        border-radius: 7px;
        font-family: 'PreMedium';
    }
    .rnd__root-menu.rnd__menu {
        width: 430px !important;
        z-index: 1;
        font-family: 'PreRegular';
    }

    .rnd .rnd__root-menu.rnd__menu .rnd__option .rnd__option-label {
        font-size: ${({ theme }) => theme.fontSize.m};
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

export const Button = styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
