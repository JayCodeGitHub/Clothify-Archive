import styled from 'styled-components'

export const StyledWrapper = styled.main`
    display: grid;
    justify-items: stretch;
    grid-template-columns: repeat(1, 1fr);
    gap: 4rem;
    width: 100%;
    padding: 2rem 5%;
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
