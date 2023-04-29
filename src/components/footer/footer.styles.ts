import styled from "styled-components";

export const StyledWrapper = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 6rem;
    font-weight: bold;
    font-size: ${({ theme }) => theme.font.size.m};
    color:  ${({ theme }) => theme.primary};
    ${({ theme }) => theme.mq.desktop} {
        height: 4rem;
        font-size: ${({ theme }) => theme.font.size.s};
    }
`