import styled from "styled-components";
import { StyledTitleProps } from "../types/Title";

const StyledTitle = styled.h3<StyledTitleProps>`
  font-size: ${props => props.size || '64px'};
  color:black;
  text-align: ${props => props.position || 'center'};
  padding-top: ${props => props.paddingTop || '40px'};
  font-weight: ${props => props.weight || 700};
  line-height: ${props => props.lineHeight || '78px'};
  text-transform: ${props => props.transform || 'uppercase'};
  
`


export default StyledTitle