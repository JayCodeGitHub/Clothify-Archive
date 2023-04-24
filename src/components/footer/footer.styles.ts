import styled from "styled-components";

export const Wrapper = styled.footer`
    width: 100%;
    height: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color:  ${({ theme }) => theme.primary};
    font-size: ${({ theme }) => theme.font.size.m};
    ${({ theme }) => theme.mq.desktop} {
        font-size: ${({ theme }) => theme.font.size.s};
        height: 4rem;
    }
`