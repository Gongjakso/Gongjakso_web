import { axiosInstance, axiosInstanceV2 } from './axiosInstance';
const BaseUrl = process.env.REACT_APP_BASE_URL_V2;

export const getAllPortfolio = async id => {
    const reqURL = `mypage/portfolio/my`;

    try {
        const response = await axiosInstanceV2.get(reqURL);
        console.log(response);
        return response;
    } catch (error) {
        console.log(error);
        return error.response.data.code;
    }
};

export const postPortfolio = async portfolioData => {
    const reqURL = `mypage/portfolio`;

    try {
        const response = await axiosInstanceV2.post(reqURL, portfolioData);
        return response.data;
    } catch (error) {
        console.error('Error posting portfolio:', error);
    }
};

export const getPortfolio = async id => {
    const reqURL = `mypage/portfolio/${id}`;

    try {
        const response = await axiosInstanceV2.get(reqURL);
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
        const response = await axiosInstanceV2.put(reqURL, portfolioData);
        return response.data;
    } catch (error) {
        console.error('Error editing portfolio:', error);
    }
};
export const deletePortfolio = async id => {
    const reqURL = `mypage/portfolio/${id}`;
    try {
        await axiosInstanceV2.delete(reqURL);
    } catch (error) {
        console.log('Error deleting portfolio:', error);
    }
};
