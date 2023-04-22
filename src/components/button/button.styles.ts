import styled from "styled-components";

export const Button = styled.button`
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.light};
    font-size: ${({ theme }) => theme.font.size.xs};
    font-weight: 600;
    border-radius: 0.5rem;
    width: 80%;
    padding: 1rem 0;
    border: solid 3px transparent;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    &:hover {
        background-color: transparent;
        color: ${({ theme }) => theme.dark};
        border: solid 3px ${({ theme }) => theme.primary};
    }
`

export default Button