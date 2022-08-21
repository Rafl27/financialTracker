import styled from 'styled-components'

export const Container = styled.div`
background-color: white;
box-shadow: 0px 0px 5px #CCC;
border-radius: 10px;
padding: 20px;
display:flex;
align-items:center;
`

export const MonthArea = styled.div`
flex:1;
display:flex;
align-items:center;
font-family: monospace;
font-size:1rem;
`

export const MonthArrow = styled.div`
width:40px;
text-align:center;
font-size:25px;
cursor:pointer;

`

export const MonthTitle = styled.div`
flex:1;
text-align:center;

`

export const ResumeArea = styled.div`
flex:2;
display:flex;
font-family:monospace;
font-size:1rem;

`

//flex 1 and flex 2 means flex two will have double the space flex 1 has inside the container 