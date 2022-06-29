import React, { FC } from 'react';
import StyledInput from '../styles/StyledInput';
import { InputProps } from '../types/Input';

const Input:FC<any> =({...props}) => {
    return (
       <StyledInput {...props}/>
    );
};

export default Input;