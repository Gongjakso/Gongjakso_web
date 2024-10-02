import * as S from './Portfolio.Styled';
import { useRef, useState, useEffect } from 'react';
import { getMyInfo } from '../../service/profile_service';
import {
    getExistPortfolio,
    postExistPortfolio,
    editExistPortfolio,
} from '../../service/portfolio_service';
import { useNavigate, useParams } from 'react-router-dom';

const UsePortfolio = () => {
    const [data, setProfileData] = useState();
    const navigate = useNavigate();
    const { id } = useParams();
    const fileInput = useRef(null);
    const [isEdit, setIsEdit] = useState(false);
    const [snsLink, setSnsLink] = useState('');
    const [error, setError] = useState('');
    const [file, setFile] = useState(null);
    const [existingFile, setExistingFile] = useState(null);

    useEffect(() => {
        const fetchPortfolio = async () => {
            try {
                // 파일과 노션 링크를 각각 조회
                const fileResponse = await getExistPortfolio(id, 'file');
                const notionResponse = await getExistPortfolio(id, 'notion');

                const fileData = fileResponse?.data?.data;
                const notionData = notionResponse?.data?.data;
                // 파일과 노션 데이터 상태에 저장
                if (fileData && fileData.fileUri) {
                    const fileName = fileData.fileUri
                        .split('/')
                        .pop()
                        .split('_')
                        .pop();
                    setExistingFile({
                        name: fileName,
                        uri: fileData.fileUri,
                    });
                }
                if (notionData && notionData.notionUri) {
                    setSnsLink(notionData.notionUri || '');
                } else {
                    console.log('No Notion URI found');
                }
            } catch (error) {
                console.error(
                    '포트폴리오 데이터를 가져오는 중 에러 발생:',
                    error,
                );
            }
        };
        if (id) {
            fetchPortfolio();
        }
        getMyInfo().then(response => {
            setProfileData(response?.data);
        });
    }, [id]);

    const handleButtonClick = () => {
        fileInput.current.click();
    };

    const handleChange = e => {
        const selectedFile = e.target.files[0];
        const maxSize = 10 * 1024 * 1024;

        if (selectedFile?.size > maxSize) {
            setError(
                '파일 크기가 10MB를 초과했습니다. 다른 파일을 선택해 주세요.',
            );
        } else {
            setError('');
            setFile(selectedFile);
            setExistingFile(null);
        }
    };

    const handleFileDelete = () => {
        setFile(null);
        setExistingFile(null);
    };
    const handleSubmit = async () => {
        if (!file && !existingFile && !snsLink.trim()) {
            setError(
                'PDF 파일 또는 노션 URL 중 하나는 필수로 입력해야 합니다.',
            );
            return;
        }

        const formData = new FormData();

        if (file) {
            formData.append('file', file);
        } else if (!file && !existingFile) {
            formData.append('file', '');
        }

        if (snsLink && snsLink.trim() !== '') {
            formData.append('notionUri', snsLink);
        } else {
            formData.append('notionUri', '');
        }

        try {
            if (!id) {
                await postExistPortfolio(formData);
            } else {
                await editExistPortfolio(id, formData);
            }
            navigate('/profile');
        } catch (err) {
            if (err.response?.data?.message === '이미 존재하는 리소스입니다.') {
                setError(
                    'PDF 또는 노션 링크가 등록되어 있는 포트폴리오가 존재합니다!',
                );
            } else {
                // setError('포트폴리오 업로드 중 오류가 발생했습니다.');
            }
            console.error('Error posting portfolio: ', err);
        }
    };

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
                <S.TitleSection style={{ flexDirection: 'column' }}>
                    <S.SubTitle>
                        포트폴리오 파일 {isEdit ? '수정' : '업로드'}하기
                    </S.SubTitle>
                    <S.UploadInfo>
                        PDF 형식으로 업로드 해주세요.
                        <br />
                        최대 10MB 까지 업로드할 수 있어요.
                    </S.UploadInfo>
                </S.TitleSection>

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

                {/* 파일이 선택되었거나 기존 파일이 있을 때만 파일 정보 표시 */}
                {(file || existingFile) && (
                    <S.FileInfo>
                        <S.FileList>
                            <S.FileItem>
                                <S.FileName>
                                    {file ? file.name : existingFile?.name}
                                </S.FileName>
                                {file && file?.size && (
                                    <S.FileSize>
                                        {(file?.size / (1024 * 1024)).toFixed(
                                            2,
                                        )}{' '}
                                        MB
                                    </S.FileSize>
                                )}
                                <S.DeleteBtn onClick={handleFileDelete} />
                            </S.FileItem>
                        </S.FileList>
                    </S.FileInfo>
                )}

                {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
                <S.TitleSection style={{ flexDirection: 'column' }}>
                    <S.SubTitle>노션 포트폴리오 링크 입력하기</S.SubTitle>
                    <S.UploadInfo>
                        노션 공유에서 ‘웹에 게시’ 여부를 확인해주세요! 게시가
                        허용되지 않았을 경우 링크 확인이 불가능해요.
                    </S.UploadInfo>
                </S.TitleSection>

                {/* 단일 노션 링크 입력 필드 */}
                <S.BoxDetail>
                    <S.LinkContainer>
                        <S.LinkIcon />
                        <S.SNSInput
                            placeholder={
                                !snsLink ? '노션 링크를 입력해주세요.' : ''
                            }
                            value={snsLink} // 디폴트 값으로 상태에서 가져온 snsLink 사용
                            onChange={e => setSnsLink(e.target.value)}
                        />
                    </S.LinkContainer>
                </S.BoxDetail>

                <S.BtnContainer>
                    <S.BackBtn onClick={() => navigate(-1)}>돌아가기</S.BackBtn>
                    <S.SaveBtn onClick={handleSubmit}>저장하기</S.SaveBtn>
                </S.BtnContainer>
            </S.GlobalBox>
        </div>
    );
};

export default UsePortfolio;
