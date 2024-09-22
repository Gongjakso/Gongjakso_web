import { axiosInstance, axiosInstanceV2 } from './axiosInstance';
const BaseUrl = process.env.REACT_APP_BASE_URL_V2;

// 전체 조회
export const getAllPortfolio = async () => {
    const reqURL = `mypage/portfolio/my`;

    try {
        const response = await axiosInstanceV2.get(reqURL);
        return response;
    } catch (error) {
        console.log(error);
        return error.response.data.code;
    }
};

// 입력 포트폴리오 post
export const postPortfolio = async portfolioData => {
    const reqURL = `mypage/portfolio`;

    try {
        const response = await axiosInstanceV2.post(reqURL, portfolioData);
        return response.data;
    } catch (error) {
        console.error('Error posting portfolio:', error);
    }
};
// 존재 포트폴리오 post
export const postExistPortfolio = async (formData, accessToken) => {
    const reqURL = 'mypage/portfolio/exist-portfolio';
    try {
        const response = await axiosInstanceV2.post(reqURL, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error posting portfolio:', error);
        throw error; // 오류 발생 시 호출자에게 전달
    }
};
// 입력 포트폴리오 상세 get
export const getPortfolio = async id => {
    const reqURL = `mypage/portfolio/${id}`;

    try {
        const response = await axiosInstanceV2.get(reqURL);
        return response;
    } catch (error) {
        console.log(error);
        return error.response.data.code;
    }
};

// 존재 포트폴리오 상세 get
export const getExistPortfolio = async id => {
    const reqURL = `mypage/portfolio/exist-portfolio/${id}`;

    try {
        const response = await axiosInstanceV2.get(reqURL);
        return response;
    } catch (error) {
        console.log(error);
        return error.response.data.code;
    }
};

// 입력 포트폴리오 수정
export const editPortfolio = async (id, portfolioData) => {
    const reqURL = `mypage/portfolio/${id}`;

    try {
        const response = await axiosInstanceV2.put(reqURL, portfolioData);
        return response.data;
    } catch (error) {
        console.error('Error editing portfolio:', error);
    }
};

// 존재 포트폴리오 수정
export const editExistPortfolio = async (id, portfolioData) => {
    const reqURL = `mypage/portfolio/exist-portfolio/${id}`;

    try {
        const response = await axiosInstanceV2.patch(reqURL, portfolioData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error editing portfolio:', error);
    }
};

// 입력 포트폴리오 delete
export const deletePortfolio = async id => {
    const reqURL = `mypage/portfolio/${id}`;
    try {
        await axiosInstanceV2.delete(reqURL);
    } catch (error) {
        console.log('Error deleting portfolio:', error);
    }
};

// 존재 포트폴리오 delete
export const deleteExistPortfolio = async id => {
    const reqURL = `mypage/portfolio/exist-portfolio/${id}`;
    try {
        await axiosInstanceV2.delete(reqURL);
    } catch (error) {
        console.log('Error deleting portfolio:', error);
    }
};
