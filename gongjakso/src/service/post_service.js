import axiosInstance from './axiosInstance';
import axios from 'axios';
const BaseUrl = process.env.REACT_APP_BASE_URL;
const BaseUrlV2 = process.env.REACT_APP_BASE_URL_V2;
export const postPosting = async postContent => {
    const reqURL = `post`;

    try {
        const response = await axiosInstance.post(reqURL, {
            ...postContent,
        });
        console.log(response);
        return response;
    } catch (error) {
        console.log(error);
        return error.response.data.code;
    }
};

export const getPostDetail = async (id, role) => {
    const reqURL = `post/${id}`;

    try {
        const response = await axiosInstance.get(reqURL);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const getCheckStatus = async id => {
    const reqURL = `post/check/${id}`;

    try {
        const response = await axiosInstance.get(reqURL);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const postScrap = async id => {
    const reqURL = `post/${id}`;

    try {
        const response = await axiosInstance.post(reqURL);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const getScrap = async id => {
    const reqURL = `post/scrap/${id}`;

    try {
        const response = await axiosInstance.get(reqURL);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const postApply = async (apply_id, postContent) => {
    const reqURL = `apply/${apply_id}`;

    try {
        const response = await axiosInstance.post(reqURL, {
            ...postContent,
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const getProjectPosts = async (
    pageNum,
    sort,
    selectedCityData,
    selectedTownData,
    selectedStack,
    searchKeyword,
) => {
    const reqURL = `post/project?meetingCity=${selectedCityData}&meetingTown=${selectedTownData}&stackName=${selectedStack}&searchWord=${searchKeyword}&page=${pageNum}&sort=${sort}`;

    try {
        const response = await axios.get(`${BaseUrl}${reqURL}`, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
export const getContestPosts = async (
    pageNum,
    sort,
    selectedCityData,
    selectedTownData,
    searchKeyword,
) => {
    const reqURL = `post/contest?meetingCity=${selectedCityData}&meetingTown=${selectedTownData}&category=&searchWord=${searchKeyword}&page=${pageNum}&sort=${sort}`;
    try {
        const response = await axios.get(`${BaseUrl}${reqURL}`, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const patchCompletedPost = async post_id => {
    const reqURL = `post/complete/${post_id}`;

    try {
        const response = await axiosInstance.patch(reqURL);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const getContestList = async () => {
    const reqURL = `contest/search?word=&size=12&page=1`;

    try {
        const response = await axios.get(`${BaseUrlV2}${reqURL}`, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const getContestDetail = async contest_id => {
    const reqURL = `contest/${contest_id}`;

    try {
        const response = await axios.get(`${BaseUrlV2}${reqURL}`, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
