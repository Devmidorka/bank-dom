import React, { FC } from 'react';
import StyledCheckbox from '../styles/StyledCheckbox';
import { CheckboxProps } from '../types/Checkbox';

const Checkbox:FC<CheckboxProps> = ({title, ...props}) => {
    return (
        <StyledCheckbox>
            <input type='checkbox' {...props}/>
            <span></span>
            <p>{title}</p>
        </StyledCheckbox>
    );
};

export default Checkbox;