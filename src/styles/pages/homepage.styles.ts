import styled from 'styled-components'

export const Wrapper = styled.main`
    width: 100%;
    display: grid;
    gap: 4rem;
    padding: 2rem 5%;
    justify-items: stretch;
    grid-template-columns: repeat(1, 1fr);
    ${({ theme }) => theme.mq.tablet} {
        grid-template-columns: repeat(2, 1fr);
    }
    ${({ theme }) => theme.mq.desktop} {
        padding: 2rem 10%;
        grid-template-columns: repeat(3, 1fr);
    }
    ${({ theme }) => theme.mq.bigDesktop} {
        grid-template-columns: repeat(4, 1fr);
    }
`
