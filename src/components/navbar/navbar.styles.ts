import styled from 'styled-components'

export const Wrapper = styled.nav`
    color: ${({ theme }) => theme.dark};
    font-size: ${({ theme }) => theme.font.size.s};
    font-weight: bold;
    ${({ theme }) => theme.mq.desktop} {
        font-size: ${({ theme }) => theme.font.size.m};
    }
`