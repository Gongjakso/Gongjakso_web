import { axiosInstance } from './axiosInstance';

export const getCalendar = async (selectYear, selectMonth) => {
    const reqURL = `calendar?year=${selectYear}&month=${selectMonth}`;

    try {
        const response = await axiosInstance.get(reqURL);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
