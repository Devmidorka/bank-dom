import styled from "styled-components";

const StyledSubmit = styled.button.attrs({ type: 'submit' })`
  background-color:#4A67FF;
  color:white;
  outline:none;
  border:none;
  border-radius: 8px;
  width: 640px;
  height: 60px;
  margin-top: 40px;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;

  &:disabled{
    opacity:.6;
  }
`

export default StyledSubmit