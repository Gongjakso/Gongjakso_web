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
    const [files, setFiles] = useState([]); // 여러 파일을 저장하는 배열

    const handleButtonClick = () => {
        fileInput.current.click();
    };

    const addSNSLink = () => {
        setSnsLinks([...snsLinks, { id: Date.now(), link: '' }]);
    };
    const handleChange = e => {
        const selectedFiles = Array.from(e.target.files); // 선택된 파일들을 배열로 변환
        const maxSize = 10 * 1024 * 1024; // 10MB 제한

        // 파일 크기 제한 확인
        let totalSize = 0;
        selectedFiles.forEach(file => {
            totalSize += file.size;
        });

        if (totalSize > maxSize) {
            setError(
                '전체 파일 크기가 10MB를 초과했습니다. 파일을 다시 선택해 주세요.',
            );
        } else {
            setError('');

            // 기존 파일과 새로 선택한 파일들을 합쳐서 업데이트
            const updatedFiles = [...files, ...selectedFiles];

            // 중복 파일 제거 (파일 이름 기준)
            const uniqueFiles = updatedFiles.filter(
                (file, index, self) =>
                    index === self.findIndex(f => f.name === file.name),
            );

            setFiles(uniqueFiles); // 중복 제거 후 파일 상태 업데이트
        }
    };

    // 파일 삭제
    const handleFileDelete = index => {
        const updatedFiles = files.filter((_, i) => i !== index); // 선택된 파일 삭제
        setFiles(updatedFiles); // 파일 상태 업데이트
    };
    const handleSubmit = async () => {
        const formData = new FormData();

        // 파일 배열을 순회하여 FormData에 각 파일을 추가
        files.forEach(file => {
            formData.append('files', file);
        });

        // notionUri를 FormData에 추가
        const notionUri = snsLinks[0]?.link;
        if (notionUri) {
            formData.append('notionUri', notionUri); // 노션 링크가 있을 경우만 추가
        }

        if (files.length === 0 && !notionUri) {
            setError('파일 또는 노션 링크 중 하나는 필수로 입력해야 합니다.');
            return;
        }

        try {
            await postExistPortfolio(formData); // Content-Type 자동 처리됨
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
                        multiple // 여러 파일 선택 가능
                        onChange={handleChange}
                        style={{ display: 'none' }}
                    />
                </S.FileUploadBox>
                {files.length > 0 && (
                    <S.FileInfo>
                        <S.FileList>
                            {files.map((file, index) => (
                                <S.FileItem key={index}>
                                    <S.FileName>{file.name}</S.FileName>
                                    <S.FileSize>
                                        {(file.size / (1024 * 1024)).toFixed(2)}{' '}
                                        MB
                                    </S.FileSize>
                                    <S.DeleteBtn
                                        onClick={() => handleFileDelete(index)}
                                    />
                                </S.FileItem>
                            ))}
                        </S.FileList>
                    </S.FileInfo>
                )}
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
