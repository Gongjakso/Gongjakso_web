import styled from 'styled-components';

export const Div = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 130px;
`;

export const TopBox = styled.div`
    height: 300px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const DetailBox = styled.div`
    position: relative;
    line-height: 25px;
    text-align: left;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const InputField = styled.input`
    width: 430px;
    height: 55px;
    padding: 15px;
    border: 1.5px solid #a3a3a3;
    border-radius: 7px;
    font-size: ${({ theme }) => theme.fontSize.m};
    font-family: 'PreMedium';
`;

export const Formset = styled.div`
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    gap: 50px;
`;

export const Spacer = styled.div`
    flex-grow: 6;
`;

export const Title = styled.p`
    flex-grow: 4;
    font-size: ${({ theme }) => theme.fontSize.xl};
    text-align: center;
    font-weight: bold;
`;

export const SubTitle = styled.p`
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: bold;
    width: 8%;
`;

export const Wrapper = styled.div`
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SetBox = styled.button`
    width: 240px;
    padding: 15px;
    font-size: ${({ theme }) => theme.fontSize.m};
    background-color: #0054ff;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    border-radius: 10px;
`;
/*
const SelectField = styled.select`
    width: 100%;
    height: 40px;
    max-height: 200px;
    overflow-y: auto;
    // 기타 스타일 설정
`;
*/
export const SelectField = styled.select`
    width: 430px;
    height: 55px;
    max-height: 50px;
    overflow-y: auto;
    padding: 10px;
    border: 1.5px solid #a3a3a3;
    border-radius: 7px;
    font-size: ${({ theme }) => theme.fontSize.m};
    font-family: 'PreMedium';

    background-color: white;
    color: black;

    option {
        background-color: white;
        color: black;
    }

    option:hover {
        background-color: black;
        color: white;
    }
`;

export const Fillter1 = styled.div`
    width: 430px;
    padding: 1px;
    height: 55px;
    padding: 12px 18px;
    border-radius: 7px;
    border: 1.5px solid #a3a3a3;
    display: flex;
    align-items: center;
`;

export const PhoneNum = styled.div`
    width: 430px;
    height: 55px;
    text-align: left;
    display: flex;
    padding: 15px;
    border: 1.5px solid #a3a3a3;
    border-radius: 7px;
    font-size: ${({ theme }) => theme.fontSize.m};
    font-family: 'PreMedium';
`;

export const Num = styled.input`
    &.Num-first {
        width: 40px;
    }
    &.Num-second {
        width: 60px;
    }
    &.Num-third {
        width: 60px;
    }
    &.Num-first,
    &.Num-second,
    &.Num-third {
        text-align: center;
        border: none;
        border-bottom: 1px solid black;
        font-size: ${({ theme }) => theme.fontSize.m};
    }
`;

export const Hyphen = styled.div`
    width: 20px;
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.l};
`;
