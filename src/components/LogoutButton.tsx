import React, {FC} from 'react';
import StyledLogoutButton from '../styles/StyledLogoutButton';
import { LogoutButtonProps } from '../types/LogoutButton';
const LogoutButton: FC<LogoutButtonProps> = ({children, ...props}) => {
    return (
        <StyledLogoutButton {...props}>
            {children}
        </StyledLogoutButton>
    );
};

export default LogoutButton;