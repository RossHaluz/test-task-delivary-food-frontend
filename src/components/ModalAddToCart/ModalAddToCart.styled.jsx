import styled from "@emotion/styled";

export const Backdrop = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Modal = styled.div`
    background-color: white;
    width: 350px;
    height: 150px;
    border-radius: 10px;
    padding: 20px;
`