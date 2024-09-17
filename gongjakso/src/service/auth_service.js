import axiosInstance from './axiosInstance';
const BaseUrl = process.env.REACT_APP_BASE_URL;

export const getToken = async (code, REDIRECT_URI) => {
    if (!code) {
        return alert('Please log in normally');
    }
    const response = await fetch(
        `${BaseUrl}auth/sign-in?code=${code}&redirect-uri=${REDIRECT_URI}`,
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
        console.log(localStorage.getItem(accessToken));
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
        console.log(response.data);
        return response.data;
    } catch (error) {
        return error.response;
    }
};
