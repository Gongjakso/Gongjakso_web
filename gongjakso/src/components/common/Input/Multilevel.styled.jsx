import styled from 'styled-components';

import Down from '../../../assets/images/Down.svg';
import Up from '../../../assets/images/icon.svg';

import GDown from '../../../assets/images/newgrayU.svg';
import GUp from '../../../assets/images/newgrayD.svg';

export const Dropdown = styled.div`
    .rnd > button {
        border: 1.5px solid #c4c4c4;
        text-align: left;
        padding: ${props =>
            props.$ispost === 'true' ? '10px 19px' : '12px 18px'};
        width: ${props => (props.$ispost === 'true' ? '200px' : '220px')};
        font-size: ${({ theme, $ispost }) =>
            $ispost === 'true' ? '1.15rem' : theme.fontSize.md};
        color: ${props => (props.$ispost === 'true' ? 'gray' : 'black')};
        border-radius: ${props => (props.$ispost === 'true' ? '25px' : '10px')};
    }
    .rnd__root-menu.rnd__menu {
        width: ${props =>
            props.$ispost === 'true' ? '200px!important' : '220px!important'};
        z-index: 9999;
        font-family: 'PreRegular';
    }

    .rnd .rnd__root-menu.rnd__menu .rnd__option .rnd__option-label {
        font-size: ${({ theme, $ispost }) =>
            $ispost === 'true' ? '1.15rem' : theme.fontSize.md};
        padding-left: 20px;
    }

    .rnd
        .rnd__root-menu.rnd__menu
        .rnd__option.rnd__option--with-menu
        .rnd__menu.rnd__submenu.rnd__submenu--opened {
        max-height: 300px;
        overflow-y: scroll;
        width: 200px !important;
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

export const UpdownComponent = props => {
    return props.$ispost === 'true' ? (
        props.$isopen === 'true' ? (
            <img src={GDown} />
        ) : (
            <img src={GUp} />
        )
    ) : props.$isopen === 'true' ? (
        <img src={Down} />
    ) : (
        <img src={Up} />
    );
};
