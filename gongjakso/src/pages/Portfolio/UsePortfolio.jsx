import * as S from './Portfolio.Styled';
import { useRef, useState, useEffect } from 'react';
import { getMyInfo } from '../../service/profile_service';
import { postExistPortfolio } from '../../service/portfolio_service';
import { useNavigate } from 'react-router-dom';

const UsePortfolio = () => {
    const [data, setProfileData] = useState();
    const navigate = useNavigate();
    const fileInput = useRef(null);
    const [snsLinks, setSnsLinks] = useState([{ id: 1, link: '' }]);
    const [error, setError] = useState(''); // State for error messages
    const [file, setFile] = useState(null); // 파일 상태 추가

    const handleButtonClick = () => {
        fileInput.current.click();
    };
    const addSNSLink = () => {
        setSnsLinks([...snsLinks, { id: Date.now(), link: '' }]);
    };
    const fileToBase64 = file => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    };
    const handleChange = e => {
        const selectedFile = e.target.files[0];
        const maxSize = 10 * 1024 * 1024; // 10MB in bytes

        if (selectedFile) {
            if (selectedFile.size > maxSize) {
                setError(
                    '파일 크기가 10MB를 초과합니다. 다른 파일을 선택해 주세요.',
                );
                return;
            }
            console.log(selectedFile);
            setError('');
            setFile(selectedFile); // 파일 상태 저장
        }
    };
    const handleSubmit = async () => {
        const formData = new FormData();

        // 파일이 있을 경우에만 FormData에 파일 추가
        if (file) {
            formData.append('file', file); // 파일 객체 그대로 추가
        }

        // notionUri를 FormData에 추가
        const notionUri = snsLinks[0]?.link;
        if (notionUri) {
            formData.append('notionUri', notionUri); // JSON.stringify 필요 없음
        } else {
            formData.append('notionUri', ''); // notionUri가 null일 경우 빈 문자열로 전송
        }

        if (!file && !notionUri) {
            setError('파일 또는 노션 링크 중 하나는 필수로 입력해야 합니다.');
            return;
        }

        try {
            // FormData를 사용하여 multipart/form-data 요청 전송
            await postExistPortfolio(formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            navigate('/profile');
        } catch (err) {
            setError('포트폴리오 업로드 중 오류가 발생했습니다.');
        }
    };

    useEffect(() => {
        getMyInfo().then(response => {
            setProfileData(response?.data);
        });
    }, []);

    return (
        <div>
            <S.TopBox>
                <S.PortfolioInfo>
                    <S.UserName>{data?.name}님의 포트폴리오</S.UserName>
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
                            {snsLinks.length > 1 && (
                                <S.DeleteBtn
                                    onClick={() => {
                                        if (snsLinks.length > 1) {
                                            setSnsLinks(
                                                snsLinks.filter(
                                                    link =>
                                                        link.id !== section.id,
                                                ),
                                            );
                                        }
                                    }}
                                />
                            )}
                        </S.LinkContainer>
                    </S.BoxDetail>
                ))}
                <S.BtnContainer>
                    <S.BackBtn onClick={() => navigate(-1)}>돌아가기</S.BackBtn>
                    <S.SaveBtn onClick={handleSubmit}>저장하기</S.SaveBtn>
                </S.BtnContainer>
            </S.GlobalBox>
        </div>
    );
};
export default UsePortfolio;
