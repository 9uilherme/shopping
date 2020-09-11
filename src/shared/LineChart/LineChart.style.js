import styled from 'styled-components'

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 12px;

span {
   font-size: 12px;
   color: #004D61;
   margin-bottom: 4px;
}
`

export const ProgressBar = styled.div`
   height: 14px; 
   border: 2px solid #004D61;
   background-color: ${props => props.color ?  props.color : '#004D61'};
   width: ${props => props.percentage ?  props.percentage  : '0'}%;

   /* meio segundo */
   transition: .5s ease;
`