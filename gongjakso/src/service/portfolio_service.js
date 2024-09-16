import axiosInstance from './axiosInstanceV2';
const BaseUrl = process.env.REACT_APP_BASE_URL_V2;

export const checkPortfolioExists = async portfolioId => {
    const reqURL = `mypage/portfoilo/${portfolioId}`;

    try {
        const response = await axiosInstance.get(reqURL);
        // 포트폴리오가 존재함
        return response.data;
    } catch (error) {
        console.error('Error checking portfolio:', error);
        return null;
    }
};

export const postPortfolio = async portfolioData => {
    const reqURL = `mypage/portfolio`;

    try {
        const response = await axiosInstance.post(reqURL, portfolioData);
        return response.data;
    } catch (error) {
        console.error('Error posting portfolio:', error);
    }
};

export const getPortfolio = async id => {
    const reqURL = `mypage/portfolio/${id}`;

    try {
        const response = await axiosInstance.get(reqURL);
        console.log(response);
        return response;
    } catch (error) {
        console.log(error);
        return error.response.data.code;
    }
};
export const EditPortfolio = async (id, portfolioData) => {
    const reqURL = `mypage/portfolio/${id}`;

    try {
        const response = await axiosInstance.put(reqURL, portfolioData);
        return response.data;
    } catch (error) {
        console.error('Error editing portfolio:', error);
    }
};
export const deletePortfolio = async id => {
    const reqURL = `mypage/portfolio/${id}`;
    try {
        await axiosInstance.delete(reqURL);
    } catch (error) {
        console.log('Error deleting portfolio:', error);
    }
};
