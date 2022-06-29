import styled from "styled-components";
import { StyledInputProps } from "../types/Input";


const StyledInput = styled.input<StyledInputProps>`
  padding:20px;
  background-color: #F5F5F5;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #232323;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  outline:none;
  border: ${props => props.invalid ? "1px solid red" : 'none'};
  caret-color: ${props => props.invalid ? "red" : "black"};
  width:640px;
  height:60px;
  margin:10px 0;

`

export default StyledInput