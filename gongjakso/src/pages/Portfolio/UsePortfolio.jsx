import * as S from './Portfolio.Styled';
import { useRef, useState } from 'react';

const UsePortfolio = () => {
    const fileInput = useRef(null);
    const [snsLinks, setSnsLinks] = useState([{ id: 1, link: '' }]);
    const [error, setError] = useState(''); // State for error messages

    const handleButtonClick = () => {
        fileInput.current.click();
    };
    const addSNSLink = () => {
        setSnsLinks([...snsLinks, { id: snsLinks.length + 1, link: '' }]);
    };

    const handleChange = e => {
        const file = e.target.files[0];
        const maxSize = 10 * 1024 * 1024; // 10MB in bytes

        if (file) {
            if (file.size > maxSize) {
                setError(
                    '파일 크기가 10MB를 초과합니다. 다른 파일을 선택해 주세요.',
                );
                return;
            }

            setError('');
            console.log(file);
        }
    };

    return (
        <div>
            <S.TopBox>
                <S.PortfolioInfo>
                    <S.UserName>김지은님의 포트폴리오</S.UserName>
                    <S.Description>
                        포트폴리오 완성도를 높이면 팀 합류 확률이 올라가요!
                    </S.Description>
                </S.PortfolioInfo>
            </S.TopBox>
            <S.GlobalBox>
                <S.SubTitle>포트폴리오 파일 업로드하기</S.SubTitle>
                <S.UploadInfo>
                    PDF 형식으로 업로드 해주세요.
                    <br />
                    최대 10MB 까지 업로드할 수 있어요.
                </S.UploadInfo>
                <S.FileUploadBox>
                    <S.pdfImg />
                    <S.UploadBtn onClick={handleButtonClick}>
                        + &nbsp;파일 업로드하기
                    </S.UploadBtn>
                    <input
                        type="file"
                        ref={fileInput}
                        onChange={handleChange}
                        style={{ display: 'none' }}
                    />
                </S.FileUploadBox>
                {error && <S.ErrorMessage>{error}</S.ErrorMessage>}

                <S.TitleSection>
                    <S.SubTitle>노션 포트폴리오 공유하기</S.SubTitle>{' '}
                    <S.PlusBtn onClick={addSNSLink} />
                </S.TitleSection>
                <S.UploadInfo>
                    노션 공유에서 ‘웹에 게시’ 여부를 확인해주세요! 게시가
                    허용되지 않았을 경우 링크 확인이 불가능해요.
                </S.UploadInfo>
                {snsLinks.map((section, index) => (
                    <S.BoxDetail key={section.id}>
                        <S.LinkContainer>
                            <S.LinkIcon />
                            <S.SNSInput
                                placeholder="링크를 입력해주세요."
                                value={section.link}
                                onChange={e => {
                                    const updatedLinks = [...snsLinks];
                                    updatedLinks[index].link = e.target.value;
                                    setSnsLinks(updatedLinks);
                                }}
                            />
                            <S.DeleteBtn
                                onClick={() => {
                                    if (snsLinks.length > 1) {
                                        setSnsLinks(
                                            snsLinks.filter(
                                                link => link.id !== section.id,
                                            ),
                                        );
                                    }
                                }}
                            />
                        </S.LinkContainer>
                    </S.BoxDetail>
                ))}
                <S.BtnContainer>
                    <S.BackBtn>돌아가기</S.BackBtn>
                    <S.SaveBtn>저장하기</S.SaveBtn>
                </S.BtnContainer>
            </S.GlobalBox>
        </div>
    );
};
export default UsePortfolio;
