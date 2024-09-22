import { useNavigate } from 'react-router-dom';

const useCustomNavigate = () => {
    const navigate = useNavigate();

    const goToPage = (path, state = {}) => {
        navigate(path, { state });
    };

    return goToPage;
};

export default useCustomNavigate;
