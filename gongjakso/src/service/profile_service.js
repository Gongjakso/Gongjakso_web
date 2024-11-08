import { axiosInstance, axiosInstanceV2 } from './axiosInstance';

//나의 정보
export const putMyInfo = async (name, major, job, status, phone) => {
    const reqURL = `member`;

    try {
        const response = await axiosInstance.put(reqURL, {
            name: name,
            phone: phone,
            status: status,
            major: major,
            job: job,
        });
        return response.data;
    } catch (error) {
        console.log(error);
        throw new Error('나의 정보를 가져올 수 없습니다.');
    }
};

export const getMyInfo = async () => {
    const reqURL = `member`;

    try {
        const response = await axiosInstance.get(reqURL);
        return response.data;
    } catch (error) {
        error.response.data.code = 3004
            ? localStorage.removeItem('accessToken')
            : console.log(error.response.data.message);
    }
};

//팀박스->내가 모집 중
export const getMyRecruiting = async (page, size) => {
    const reqURL = `team/my-recruit?page=${page - 1}&size=${size}`;

    try {
        const response = await axiosInstanceV2.get(reqURL);
        return response.data;
    } catch (error) {
        error.response.data.code = 3004
            ? localStorage.removeItem('accessToken')
            : console.log(error.response.data.message);
    }
};

//팀박스->내가 지원
export const getMyApplied = async page => {
    const reqURL = `apply/my?page=${page - 1}`;

    try {
        const response = await axiosInstanceV2.get(reqURL);
        return response.data;
    } catch (error) {
        error.response.data.code = 3004
            ? localStorage.removeItem('accessToken')
            : console.log(error.response.data.message);
    }
};

//내가 참여 상세페이지
//팀박스->내가 참여
export const getMyParticipated = async (page, size) => {
    const reqURL = `team/my-participate?page=${page - 1}&size=${size}`;

    try {
        const response = await axiosInstanceV2.get(reqURL);
        return response.data;
    } catch (error) {
        error.response.data.code = 3004
            ? localStorage.removeItem('accessToken')
            : console.log(error.response.data.message);
    }
};

export const getMyContestScrap = async () => {
    const reqURL = `post/contest/myScrap`;
    try {
        const response = await axiosInstance.get(reqURL);
        return response.data;
    } catch (error) {
        error.response.data.code = 3004
            ? localStorage.removeItem('accessToken')
            : console.log(error.response.data.message);
    }
};

export const getMyProjectScrap = async () => {
    const reqURL = `post/project/myScrap`;
    try {
        const response = await axiosInstance.get(reqURL);
        return response.data;
    } catch (error) {
        error.response.data.code = 3004
            ? localStorage.removeItem('accessToken')
            : console.log(error.response.data.message);
    }
};
export const getMyTeamScrap = async (page, size) => {
    const reqURL = `team/scrap/list?page=${page - 1}&size=${size}`;
    try {
        const response = await axiosInstanceV2.get(reqURL);
        return response.data;
    } catch (error) {
        error.response.data.code = 3004
            ? localStorage.removeItem('accessToken')
            : console.log(error.response.data.message);
    }
};
