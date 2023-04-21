import styled from 'styled-components'

export const Wrapper = styled.main`
    width: 100%;
    padding: 2rem 5%;
    p {
        font-size: ${({ theme }) => theme.font.size.s};
    }
`

export const Header = styled.header`
    padding: 2rem;
`