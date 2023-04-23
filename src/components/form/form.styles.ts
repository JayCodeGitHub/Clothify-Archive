import styled from "styled-components";
import Button from "../button/button.styles";

export const Wrapper = styled.form`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const Headline = styled.h2`
    align-self: flex-start;
    padding-left: 1.5rem;
    margin: 1rem 0;
    font-size: ${({ theme }) => theme.font.size.s};
`

export const StyledInput = styled.input`
    width: 95%;
    padding: 1rem 0.5rem;
    border-radius: 0.4rem;
    border: solid ${({ theme }) => theme.grey} 2px;
    font-size: ${({ theme }) => theme.font.size.s};
    &:focus{
        border: solid ${({ theme }) => theme.primary} 2px;
        outline: ${({ theme }) => theme.primary};
    }
    &:hover{
        border: solid ${({ theme }) => theme.primary} 2px;
        outline: ${({ theme }) => theme.primary};
    }
`

export const StyledButton = styled(Button)`
    width: 95%;
`

export const Paragraph = styled.p`
    padding: 1rem 1rem;
    align-self: flex-start;
`