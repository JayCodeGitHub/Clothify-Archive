import styled from "styled-components";

export const Button = styled.button`
    width: 80%;
    padding: 1rem 0;
    font-weight: 600;
    font-size: ${({ theme }) => theme.font.size.xs};
    color: ${({ theme }) => theme.light};
    cursor: pointer;
    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.primary};
    border: solid 3px transparent;
    transition: all 0.2s ease-in-out;
    &:hover {
        background-color: transparent;
        color: ${({ theme }) => theme.dark};
        border: solid 3px ${({ theme }) => theme.primary};
    }
`

export default Button