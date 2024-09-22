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
    const { id } = useParams(); // 포트폴리오 ID 가져오기
    const fileInput = useRef(null);
    const [isEdit, setIsEdit] = useState(false);
    const [snsLink, setSnsLink] = useState(''); // 단일 노션 링크
    const [error, setError] = useState(''); // State for error messages
    const [file, setFile] = useState(null); // 단일 파일
    const [existingFile, setExistingFile] = useState(null); // 기존 파일 URI 상태

    useEffect(() => {
        // 기존 포트폴리오 데이터를 가져와서 snsLink와 file 상태를 설정
        const fetchPortfolio = async () => {
            try {
                const response = await getExistPortfolio(id); // 포트폴리오 상세 데이터 가져오기
                const portfolioData = response?.data.data;

                // 기존 노션 링크 및 파일이 있으면 상태에 설정
                if (portfolioData) {
                    setSnsLink(portfolioData.notionUri || ''); // 노션 링크 설정
                    console.log(portfolioData);
                    if (portfolioData.fileUri) {
                        const fileName = portfolioData.fileUri
                            .split('/')
                            .pop()
                            .split('_')
                            .pop();

                        setExistingFile({
                            name: fileName,
                            uri: portfolioData.fileUri,
                        }); // 파일 이름과 URI 설정
                    }
                }
            } catch (error) {
                console.error(
                    '포트폴리오 데이터를 가져오는 중 에러 발생:',
                    error,
                );
            }
        };

        fetchPortfolio();
        getMyInfo().then(response => {
            setProfileData(response?.data);
        });
    }, [id]);

    const handleButtonClick = () => {
        fileInput.current.click();
    };

    const handleChange = e => {
        const selectedFile = e.target.files[0]; // 첫 번째 파일만 선택
        const maxSize = 10 * 1024 * 1024; // 10MB 제한

        if (selectedFile.size > maxSize) {
            setError(
                '파일 크기가 10MB를 초과했습니다. 다른 파일을 선택해 주세요.',
            );
        } else {
            setError('');
            setFile(selectedFile); // 선택된 파일 설정
            setExistingFile(null); // 새 파일을 선택한 경우 기존 파일 초기화
        }
    };

    // 파일 삭제
    const handleFileDelete = () => {
        setFile(null); // 파일 상태 초기화
        setExistingFile(null); // 기존 파일도 초기화
    };

    const handleSubmit = async () => {
        const formData = new FormData();

        // 파일이 새로 선택되었으면 FormData에 추가
        if (file) {
            formData.append('file', file);
            console.log('새 파일 추가됨:', file);
        } else if (existingFile) {
            // 새 파일이 없고 기존 파일이 있으면 서버에 기존 파일을 유지하게 알림
            formData.append('existingFileUri', existingFile.uri);
            console.log('기존 파일 유지됨:', existingFile.name);
        }

        // 노션 링크가 빈 문자열이 아니면 추가
        if (snsLink && snsLink.trim() !== '') {
            formData.append('notionUri', snsLink); // 노션 링크가 있을 때만 추가
        }

        // 파일이나 노션 링크가 없으면 에러 메시지 표시 (기존 파일도 포함)
        if (!file && !existingFile && !snsLink) {
            setError('파일 또는 노션 링크 중 하나는 필수로 입력해야 합니다.');
            return;
        }

        try {
            // 새 포트폴리오를 올리는 경우: file이 있으면 무조건 새 포트폴리오라고 가정
            if (!id) {
                // ID가 없을 경우에만 포스트 API 호출
                await postExistPortfolio(formData);
            } else {
                // 기존 포트폴리오 수정하는 경우 편집 API 호출
                await editExistPortfolio(id, formData);
            }
            navigate('/profile');
        } catch (err) {
            setError('포트폴리오 업로드 중 오류가 발생했습니다.');
        }
    };

    // 노션 링크나 파일이 사라질 때 UI를 동적으로 업데이트
    useEffect(() => {
        if (!snsLink && !existingFile && !file) {
            setError('파일 또는 노션 링크 중 하나는 필수로 입력해야 합니다.');
        } else {
            setError('');
        }
    }, [snsLink, existingFile, file]);

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
                <S.SubTitle>
                    포트폴리오 파일 {isEdit ? '수정' : '업로드'}하기
                </S.SubTitle>
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

                {/* 파일이 선택되었거나 기존 파일이 있을 때만 파일 정보 표시 */}
                {(file || existingFile) && (
                    <S.FileInfo>
                        <S.FileList>
                            <S.FileItem>
                                <S.FileName>
                                    {file ? file.name : existingFile?.name}
                                </S.FileName>
                                {file && file.size && (
                                    <S.FileSize>
                                        {(file.size / (1024 * 1024)).toFixed(2)}{' '}
                                        MB
                                    </S.FileSize>
                                )}
                                <S.DeleteBtn onClick={handleFileDelete} />
                            </S.FileItem>
                        </S.FileList>
                    </S.FileInfo>
                )}

                {error && <S.ErrorMessage>{error}</S.ErrorMessage>}

                <S.TitleSection>
                    <S.SubTitle>노션 포트폴리오 링크 입력하기</S.SubTitle>
                </S.TitleSection>
                <S.UploadInfo>
                    노션 공유에서 ‘웹에 게시’ 여부를 확인해주세요! 게시가
                    허용되지 않았을 경우 링크 확인이 불가능해요.
                </S.UploadInfo>

                {/* 단일 노션 링크 입력 필드 */}
                <S.BoxDetail>
                    <S.LinkContainer>
                        <S.LinkIcon />
                        <S.SNSInput
                            placeholder="노션 링크를 입력해주세요."
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
