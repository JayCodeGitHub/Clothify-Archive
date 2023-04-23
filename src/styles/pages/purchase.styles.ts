import styled from 'styled-components'

export const Wrapper = styled.main`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    ${({ theme }) => theme.mq.desktop} {
        flex-direction: row;
    }
`

export const CartSection = styled.section`
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

export const Title = styled.h1`
    align-self: flex-start;
    padding-left: 2rem;
    font-size: ${({ theme }) => theme.font.size.m};
`

export const FormSection = styled.form`
    width: 35rem;
    height: 40rem;
    padding: 1.5rem 0;
`