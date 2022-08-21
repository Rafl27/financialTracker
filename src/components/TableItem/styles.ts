import styled from 'styled-components'


export const TableRow = styled.tr`

`

export const TableColumn = styled.td`
padding: 10px 0;

`

export const Category = styled.div<{ color: string }>`
display: inline-block;
padding: 5px 10px;
border-radius:5px;
color:white;
background-color:${props => props.color};
`
//the padding above means 5 pixels above and bellow and 10px on the sides 

export const Value = styled.div<{ color: string }>`
    color:${props => props.color}
`