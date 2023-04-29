import styled from 'styled-components'

export const StyledWrapper = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    ${({ theme }) => theme.mq.desktop} {
        flex-direction: row;
    }
`

export const StyledCartSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 1.5rem;
    padding: 1.5rem 0;
    ${({ theme }) => theme.mq.desktop} {
        width: 35rem;
    }
`

export const StyledTitle = styled.h1`
    align-self: flex-start;
    padding-left: 2rem;
    font-size: ${({ theme }) => theme.font.size.m};
`

export const StyledFormSection = styled.form`
    padding: 1.5rem 0;
    ${({ theme }) => theme.mq.desktop} {
        width: 35rem;
    }
`