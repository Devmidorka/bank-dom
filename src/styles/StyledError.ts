import styled from "styled-components";

const StyledError = styled.div`
  width:640px;
  height:60px;
  background: #F5E9E9;
  border: 1px solid #E26F6F;
  border-radius: 8px;
  margin-bottom:27px;
  padding:20px;
  padding-left: calc(20px + 20px + 14px);
  position:relative;
  display:flex;
  align-items:center;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  
  &:before{
    content: '!';
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:50%;
    position:absolute;
    width:20px;
    height:20px;
    background: #FFC8C8;
    left:20px;
    color:#EE6565;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
  }
`

export default StyledError