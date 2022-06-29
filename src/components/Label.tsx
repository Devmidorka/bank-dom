import React, {FC} from 'react';
import StyledLabel from '../styles/StyledLabel';
import { LabelProps } from '../types/Label';

const Label:FC<LabelProps> = ({children}) => {
    return (
        <StyledLabel>
            {children}
        </StyledLabel>
    );
};

export default Label;