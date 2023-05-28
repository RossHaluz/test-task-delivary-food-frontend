import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const SuccessOrderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 150px;
    line-height: 2;
`

export const SuccessOrderBtn = styled(NavLink)`
background-color: #2196f3;
color: white;
padding: 10px;
border-radius: 10px;
font-size: 18px;
margin-top: 15px;
`