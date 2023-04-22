import styled from "styled-components";

export const Button = styled.button`
     background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.light};
    font-size: ${({ theme }) => theme.font.size.xs};
    font-weight: 600;
    border-radius: 0.5rem;
    width: 80%;
    border: none;
    padding: 1rem 0;
`

export default Button