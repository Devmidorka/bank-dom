import React, { FC } from 'react';
import StyledTitle from '../styles/StyledTitle';
import { TitleProps } from '../types/Title';

const Title:FC<TitleProps> = ({children, ...props}) => {
    return (
        <StyledTitle {...props}>
            {children}
        </StyledTitle>
    );
};

export default Title;