import React, {FC} from 'react';
import StyledError from '../styles/StyledError';
import { ErrorProps } from '../types/Error';

const Error:FC<ErrorProps> = ({children}) => {
    return (
        <StyledError>
            {children}
        </StyledError>
    );
};

export default Error;