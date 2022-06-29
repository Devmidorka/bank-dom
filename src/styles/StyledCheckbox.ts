import styled from "styled-components";

const StyledCheckbox = styled.label`
  width:640px;
  margin:0 auto;
  display:flex;
  align-items:center;
  & > input[type='checkbox'] {
    appearance: none;
    position: absolute;
  }

  & > input[type='checkbox'] + span {
    width: 20px;
    height: 20px;
    border: 1px solid black;
    display: block;
    border-radius: 4px;
    position: relative;
  }

  & > input[type='checkbox']:checked + span:after {
    content:' ';
    display:block;
    position:absolute;
    width: 14px;
    height: 14px;
    background: #4A67FF;
    border-radius: 2px;
    left:50%;
    top:50%;
    transform: translate(-50%, -50%);
  }
  & > p {
    margin-left: 14px;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
  }
`

export default StyledCheckbox