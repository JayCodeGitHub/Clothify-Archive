import styled from "styled-components"
import Image from "next/image";

export const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    padding: 1rem;
    width: 80%;
    background-color: ${({ theme }) => theme.light};
    border-radius: 0.5rem;
    ${({ theme }) => theme.mq.desktop} {
        flex-direction: row;
    }
`

export const StyledImage = styled(Image)`
    align-self: center;
    object-fit: cover;
    width: 10rem;
    height: 10rem;
    border-radius: 0.2rem;
    ${({ theme }) => theme.mq.desktop} {
        width: 8rem;
        height: 8rem;
    }
`

export const StyledDescription = styled.span`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    height: 70%;
    ${({ theme }) => theme.mq.desktop} {
        width: 50%;
    }
`

export const StyledName = styled.h1`
    font-size: ${({ theme }) => theme.font.size.m};
`

export const StyledPrice = styled.h2`
    font-size: ${({ theme }) => theme.font.size.s};
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
