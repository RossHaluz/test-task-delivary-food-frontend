import { Form, Field, ErrorMessage } from "formik";
import styled from "@emotion/styled";

export const FormCart = styled(Form)`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 350px;
`

export const InputCart = styled(Field)`
    padding: 20px;
    font-size: 16px;
    font-weight: 600;
    border: 1px solid orange;
`

export const BtnCart = styled.button`
    background-color: #2196f3;
    border: none;
    padding: 20px;
    font-size: 16px;
    font-weight: 700;
    color: white;
    border-radius: 20px;
    cursor: pointer;
`

export const ErrorText = styled(ErrorMessage)`
    color: red;
    font-size: 16px;
`