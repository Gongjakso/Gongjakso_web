import { axiosInstance, axiosInstanceV2 } from './axiosInstance';
import axios from 'axios';
const BaseUrl = process.env.REACT_APP_BASE_URL;
const BaseUrlV2 = process.env.REACT_APP_BASE_URL_V2;

export const postPosting = async postContent => {
    const reqURL = `post`;

    try {
        const response = await axiosInstance.post(reqURL, {
            ...postContent,
        });
        return response;
    } catch (error) {
        console.log(error);
        return error.response.data.code;
    }
};

export const getContestTeamList = async (
    id,
    selectedCityData,
    selectedTownData,
    page,
    sortBy,
) => {
    const reqURL = `contest/${id}/team/list?province=${selectedCityData}&district=${selectedTownData}&page=${page - 1}&size=6&sortAt=${sortBy}`;

    try {
        const response = await axiosInstanceV2.get(reqURL);
        return response?.data;
    } catch (error) {
        console.log(error);
    }
};
export const postContestTeam = async (contest_id, contestContent) => {
    const reqURL = `contest/${contest_id}/team/create`;

    try {
        const response = await axiosInstanceV2.post(reqURL, {
            ...contestContent,
        });
        return response;
    } catch (error) {
        console.log(error);
        return error.response?.data.code;
    }
};

// [GET] 공고 상세페이지 팀 조회 API
export const getPostDetail = async (contest_id, team_id) => {
    const reqURL = `contest/${contest_id}/team/${team_id}`;

    try {
        const response = await axiosInstanceV2.get(reqURL);
        console.log(response);
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

// [POST] 공고 상세페이지 팀 스크랩 API
export const postScrap = async id => {
    const reqURL = `team/${id}/scrap`;

    try {
        const response = await axiosInstanceV2.post(reqURL);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

// [DELETE] 공고 상세페이지 팀 스크랩 취소 API
export const deleteScrap = async id => {
    const reqURL = `team/${id}/scrap`;

    try {
        const response = await axiosInstanceV2.delete(reqURL);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

// [GET] 공고 상세페이지 팀 스크랩 여부 조회 API
export const getScrap = async id => {
    const reqURL = `team/${id}/scrap/check`;

    try {
        const response = await axiosInstanceV2.get(reqURL);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

// [GET] 내 포트폴리오 리스트 조회 API
export const getMyPortfolio = async () => {
    const reqURL = `mypage/portfolio/my`;

    try {
        const response = await axiosInstanceV2.get(reqURL);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const postApply = async (team_id, postContent) => {
    const reqURL = `apply/${team_id}`;

    try {
        const response = await axiosInstanceV2.post(reqURL, {
            ...postContent,
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
    const reqURL = `team/list?province=${selectedCityData}&district=${selectedTownData}&keyword=${searchKeyword}&page=${pageNum}&size=6&sortAt=${sort}`;
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

export const patchCompletedPost = async post_id => {
    const reqURL = `post/complete/${post_id}`;

    try {
        const response = await axiosInstance.patch(reqURL);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const getContestList = async (page, searchKeyword, sortBy) => {
    const reqURL = `contest/search?word=${searchKeyword}&size=12&page=${page}&sortAt=${sortBy}`;

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
