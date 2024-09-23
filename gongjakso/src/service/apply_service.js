import axios from 'axios';
import { axiosInstance, axiosInstanceV2 } from './axiosInstance';
const BaseUrlV2 = process.env.REACT_APP_BASE_URL_V2;

export const getRecruitTeam = async post_id => {
    const reqURL = `apply/${post_id}`;

    try {
        const response = await axiosInstance.get(reqURL);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const patchExtension = async (contest_id, team_id, newdate) => {
    const reqURL = `contest/${contest_id}/team/${team_id}/extend-recruit?extend-date=${newdate}`;

    try {
        const response = await axiosInstanceV2.patch(reqURL);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

//모집 마감
export const patchFinish = async (contest_id, team_id) => {
    const reqURL = `contest/${contest_id}/team/${team_id}/close-recruit`;

    try {
        const response = await axiosInstanceV2.patch(reqURL);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

// 모집 취소
export const patchCancel = async (contest_id, team_id) => {
    const reqURL = `contest/${contest_id}/team/${team_id}/cancel-recruit`;

    try {
        const response = await axiosInstanceV2.patch(reqURL);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const getApplyList = async (post_id, page) => {
    const reqURL = `apply/${post_id}/applylist?page=${page - 1}&size=11`;

    try {
        const response = await axiosInstance.get(reqURL);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const getApplication = async (post_id, apply_id) => {
    const reqURL = `apply/${post_id}/${apply_id}/application`;

    try {
        const response = await axiosInstance.get(reqURL);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const patchRecruit = async apply_id => {
    const reqURL = `apply/${apply_id}/recruit`;

    try {
        const response = await axiosInstance.patch(reqURL);
        return response.data;
    } catch (error) {
        console.log(error);
        return error;
    }
};

export const patchNotRecruit = async apply_id => {
    const reqURL = `apply/${apply_id}/not-recruit`;

    try {
        const response = await axiosInstance.patch(reqURL);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const patchOpen = async apply_id => {
    const reqURL = `apply/${apply_id}/open`;

    try {
        const response = await axiosInstance.patch(reqURL);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const getMyApplication = async postid => {
    const reqURL = `apply/my/${postid}`;

    try {
        const response = await axiosInstance.get(reqURL);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const applyCancel = async apply_id => {
    const reqURL = `apply/${apply_id}`;

    try {
        const response = await axiosInstanceV2.delete(reqURL);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

// 특정 팀의 지원자 리스트 조회
export const getMyRecruitingTeam = async id => {
    const reqURL = `team/${id}`;

    try {
        const response = await axiosInstanceV2.get(reqURL);
        console.log(response);
        return response?.data;
    } catch (error) {
        console.log(error);
    }
};

// 지원자 합류하기, 미선발
export const patchApply = async (applyId, status) => {
    const reqURL = `apply/select/${applyId}`;

    try {
        const response = await axiosInstanceV2.patch(reqURL, { status });
        return response?.data;
    } catch (error) {
        console.log(error);
    }
};
