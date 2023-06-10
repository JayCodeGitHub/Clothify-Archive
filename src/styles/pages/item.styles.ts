import styled from 'styled-components'
import Image from "next/image";


export const StyledWrapper = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 80vh;
    ${({ theme }) => theme.mq.desktop} {
        flex-direction: row;
        align-items: flex-start;
        gap: 10rem;
    }
`

export const StyledImage = styled(Image)`
    object-fit: cover;
    width: 90vw;
    height: 128vw;
    border-radius: 0.2rem;
    ${({ theme }) => theme.mq.desktop} {
        width: 30rem;
        height: 30rem;
    }
`
export const StyledDescriptionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 1rem;
    width: 90vw;
    padding: 2rem 0;
    font-size: ${({ theme }) => theme.font.size.s};
    ${({ theme }) => theme.mq.desktop} {
        height: 20rem;
        width: 30rem;
    }

`

export const StyledQuantityWrapper = styled.span`
    display: flex;
    align-items: center;
    gap: .5rem;
    margin-top: auto;
`

export const StyledIconWrapper = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;
    cursor: pointer;
    border: none;
    border-radius: 100%;
    background-color: ${({ theme }) => theme.dark};
`


export const StyledQuantity = styled.h3`
    width: 1.5rem;
    text-align: center;
`
