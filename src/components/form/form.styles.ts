import styled from "styled-components";
import Button from "../button/button.styles";

export const StyledWrapper = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`

export const StyledHeadline = styled.h2`
    align-self: flex-start;
    margin: 1rem 0;
    padding-left: 1.5rem;
    font-size: ${({ theme }) => theme.font.size.s};
`

export const StyledInput = styled.input`
    width: 95%;
    padding: 1rem 0.5rem;
    font-size: ${({ theme }) => theme.font.size.s};
    border-radius: 0.4rem;
    border: solid ${({ theme }) => theme.grey} 2px;
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

export const StyledParagraph = styled.p`
    align-self: flex-start;
    padding: 1rem 1rem;
`