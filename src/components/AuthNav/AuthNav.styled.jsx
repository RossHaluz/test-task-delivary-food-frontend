import styled from "@emotion/styled";
import { FaShoppingCart } from "react-icons/fa";

export const AuthWrappre = styled.div`
position: relative;
    display: flex;
    margin-left: auto;
`

export const IconCart = styled(FaShoppingCart)`
color: #030303;
font-size: 27px;
`

export const QuantityCart = styled.div`
    position: absolute;
    top: 13px;
    left: 18px;
    background-color: orange;
    border-radius: 50%;
    padding: 5px;
    width: 8px;
    font-size: 14px;
    height: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: 600;
`