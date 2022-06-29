import React, { FC } from 'react';
import StyledSpan from '../styles/StyledSpan';
import { SpanProps } from '../types/Span';

const Span:FC<SpanProps> = ({children}) => {
    return (
        <StyledSpan>
            {children}
        </StyledSpan>
    );
};

export default Span;