import styled from "styled-components";
import { Pagination } from "./Pagination";

export const PaginationContainer = styled.div`
    margin: 20px;
`;

export const SitePagination = styled.div`
    display:flex;
    flex-wrap: no-wrap;
    justify-content: center;
`;

export const  PaginationFirstButton = styled.button`
border: 1px solid #ccc;
border-top-left-radius: 15px;
border-bottom-left-radius: 15px;
line-height: 30px;
padding: 0 5px;
height:35px;
color: blue;
background: white;
font-size:20px;
`

export const  PaginationLastButton = styled.button`
border: 1px solid #ccc;
border-top-right-radius: 10px;
border-bottom-right-radius: 10px;
line-height: 30px;
padding: 0 5px;
height:35px;
color: blue;
background: white;
font-size:20px;
`

export const  PaginationButton = styled.button<{active: boolean}>`
border: 1px solid #ccc;
line-height: 40px;
padding: 0 5px;
height:35px;
min-width:35px;
color:  ${p => p.active ? "white" : "blue"};
background:  ${p => p.active ? "blue" : "white"};
`

export const PagePagination = styled.div`
    display:flex;
    justify-content: space-between;
    max-width: 400px;
    margin: 20px auto;
`

export const PagePaginationButton = styled.button<{disabled: boolean}>`
    color: ${p => p.disabled ? "#ccc" : "blue"}
    border: 1px solid #ccc;
    line-height: 20px;
    padding: 0 5px;
    height:20px;
    border-radius: 5px;
`