import { axiosInstance, axiosInstanceV2 } from './axiosInstance';

export const getRecruitTeam = async post_id => {
    const reqURL = `apply/${post_id}`;

    try {
        const response = await axiosInstance.get(reqURL);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const patchExtension = async (post_id, newdate) => {
    const reqURL = `apply/${post_id}/extension`;

    try {
        const response = await axiosInstance.patch(reqURL, {
            finishDate: newdate,
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const patchFinish = async post_id => {
    const reqURL = `apply/${post_id}/close`;

    try {
        const response = await axiosInstance.patch(reqURL);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const patchCancel = async post_id => {
    const reqURL = `apply/${post_id}/cancel`;

    try {
        const response = await axiosInstance.patch(reqURL);
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
        console.log(response);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
