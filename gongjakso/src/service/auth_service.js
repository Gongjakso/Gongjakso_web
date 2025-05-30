import { axiosInstance } from './axiosInstance';
const BaseUrl = process.env.REACT_APP_BASE_URL;

export const getToken = async (code, REDIRECT_URI, type) => {
    if (!code) {
        return alert('Please log in normally');
    }
    console.log(code, REDIRECT_URI, type);
    const response = await fetch(
        `${BaseUrl}auth/sign-in?code=${code}&redirect-uri=${REDIRECT_URI}&type=${type}`,
        {
            method: 'POST',
            headers: {
                'Content-type':
                    'application/x-www-form-urlencoded;charset=utf-8',
            },
        },
    );
    const result = await response.json();
    return result.data;
};

export const logout = async accessToken => {
    try {
        // Call the logout API endpoint
        await fetch(`${BaseUrl}auth/sign-out`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${accessToken}`,
            },
        });
        localStorage.removeItem('accessToken');
    } catch (error) {
        console.error('Error logging out:', error);
    }
};

export const SignUpApi = async myData => {
    const reqURL = `member`;
    try {
        const response = await axiosInstance.put(reqURL, {
            myData,
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const getMyInfo = async () => {
    const reqURL = `member`;

    try {
        const response = await axiosInstance.get(reqURL);
        return response.data;
    } catch (error) {
        if (error.response.data.code === 3004) {
            localStorage.removeItem('accessToken');
        } else {
            console.log(error.response.data.code);
        }
        return error.response.data.code;
    }
};
