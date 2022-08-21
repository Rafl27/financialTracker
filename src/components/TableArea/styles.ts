import styled from 'styled-components'

export const Table = styled.table`
width:100%;
font-family:monospace;
margin-top:20px;
background-color:white;
color:black;
font-size: 1rem;
box-shadow: 0px 0px 5px #CCC;
border-radius:10px;
padding:10px;
`
// box shadow is x, y, blur radius, color
//bellow I`m defining the prop and it's type
export const TableHeadColumn = styled.th<{ width?: number }>`
width: ${props => props.width ? `${props.width}px` : 'auto'}
padding: 10px 0;
text-align:left;

`
//width: if props.width exists, I set the width to the props value, if not it's auto
