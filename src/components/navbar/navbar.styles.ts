import styled from 'styled-components'

export const OuterWrapper = styled.nav`
    width: 100%;
    height: 8rem;
    font-weight: 500;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10%;
`

export const Wrapper = styled.ul`
    display: flex;
    gap: 1.5rem;
    list-style: none;
    color: ${({ theme }) => theme.dark};
    font-size: ${({ theme }) => theme.font.size.s};
    ${({ theme }) => theme.mq.desktop} {
        font-size: ${({ theme }) => theme.font.size.s};
    }
`

export const CartWrapper = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: ${({ theme }) => theme.font.size.xs};
`