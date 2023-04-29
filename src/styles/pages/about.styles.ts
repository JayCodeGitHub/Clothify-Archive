import styled from 'styled-components'


export const StyledWrapper = styled.main`
    width: 100%;
    padding: 2rem 5%;
    min-height: 80vh;
    p {
        font-size: ${({ theme }) => theme.font.size.s};
    }
`

export const StyledHeader = styled.header`
    padding: 2rem;
`