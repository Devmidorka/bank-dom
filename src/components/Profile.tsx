import React, {useContext} from 'react';
import StyledParagraph from '../styles/StyledParagraph';
import LogoutButton from './LogoutButton';
import { AuthContext } from './AuthContext';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const { authData, logout} = useContext(AuthContext)
    const navigate = useNavigate()
    const logoutAndRedirect = () => {
        logout()
        navigate('/')
    }

    return (
        <>
            <StyledParagraph>
                Здравствуйте, <b>{authData.login}</b>
            </StyledParagraph>
            <LogoutButton onClick={logoutAndRedirect}>Выйти</LogoutButton>
        </>

    );
};

export default Profile;