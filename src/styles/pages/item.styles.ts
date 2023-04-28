import styled from 'styled-components'
import Image from "next/image";


export const Wrapper = styled.main`
    display: flex;
    width: 100%;
    min-height: 80vh;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    ${({ theme }) => theme.mq.desktop} {
        flex-direction: row;
        gap: 10rem;
    }
`

export const StyledImage = styled(Image)`
    width: 90vw;
    height: 128vw;
    object-fit: cover;
    border-radius: 0.2rem;
    ${({ theme }) => theme.mq.desktop} {
        height: 30rem;
        width: 30rem;
    }
`
export const DescriptionWrapper = styled.div`
    width: 90vw;
    display: flex;
    padding: 2rem 0;
    flex-direction: column;
    justify-content: space-around;
    font-size: ${({ theme }) => theme.font.size.s};
    gap: 0.5rem;
    ${({ theme }) => theme.mq.desktop} {
        height: 20rem;
        width: 30rem;
    }

`

export const QuantityWrapper = styled.span`
margin-top: auto;
    display: flex;
    gap: .5rem;
    align-items: center;
`

export const IconWrapper = styled.button`
    width: 2rem;
    height: 2rem;
    border-radius: 100%;
    background-color: ${({ theme }) => theme.dark};
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    cursor: pointer;
`


export const Quantity = styled.h3`
    width: 1.5rem;
    text-align: center;
`
