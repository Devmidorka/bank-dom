import React, { FC } from 'react';
import StyledSubmit from '../styles/StyledSubmit';
import { SubmitProps } from '../types/Submit';

const Submit:FC<SubmitProps> = ({children}) => {
    return (
       <StyledSubmit>
           {children}
       </StyledSubmit>
    );
};

export default Submit;