import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

export const Spinner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 4px solid rgba(195, 195, 195, 0.3);
    border-radius: 50%;
    border-top: 5px solid #00efaf;
    width: 60px;
    height: 60px;
    animation: spin 1s linear infinite;
    position: absolute;

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;
