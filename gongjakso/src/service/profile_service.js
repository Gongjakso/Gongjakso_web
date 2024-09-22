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
        throw new Error('나의 정보를 가져올 수 없습니다.');
    }
};

export const getMyInfo = async () => {
    const reqURL = `member`;

    try {
        const response = await axiosInstance.get(reqURL);
        return response.data;
    } catch (error) {
        console.log('내가 지원한 게시글을 가져올 수 없습니다.');
    }
};

//팀박스->내가 모집 중
export const getMyRecruiting = async (page, size) => {
    const reqURL = `team/my-recruit?page=${page}&size=${size}`;

    try {
        const response = await axiosInstanceV2.get(reqURL);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log('내가 모집 중인 게시글을 가져올 수 없습니다.', error);
    }
};

//팀박스->내가 지원
export const getMyApplied = async (page, size) => {
    const reqURL = `team/my-apply?page=${page}&size=${size}`;

    try {
        const response = await axiosInstanceV2.get(reqURL);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log('내가 지원한 게시글을 가져올 수 없습니다.');
    }
};

//내가 참여 상세페이지
//팀박스->내가 참여
export const getMyParticipated = async (page, size) => {
    const reqURL = `team/my-participate?page=${page - 1}&size=${size}`;

    try {
        const response = await axiosInstanceV2.get(reqURL);
        console.log(response.data);
        console.log(page);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const getMyContestScrap = async () => {
    const reqURL = `post/contest/myScrap`;
    try {
        const response = await axiosInstance.get(reqURL);
        return response.data;
    } catch (error) {
        console.log('내가 스크랩한 공모전 정보를 가져올 수 없습니다.');
    }
};

export const getMyProjectScrap = async () => {
    const reqURL = `post/project/myScrap`;
    try {
        const response = await axiosInstance.get(reqURL);
        return response.data;
    } catch (error) {
        console.log('내가 스크랩한 프로젝트 정보를 가져올 수 없습니다.');
    }
};
