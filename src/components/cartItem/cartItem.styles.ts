import styled from "styled-components"
import Image from "next/image";

export const Wrapper = styled.div`
    width: 80%;
    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.light};
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
    ${({ theme }) => theme.mq.desktop} {
        flex-direction: row;
    }
`

export const StyledImage = styled(Image)`
    width: 10rem;
    height: 10rem;
    object-fit: cover;
    border-radius: 0.2rem;
    align-self: center;
    ${({ theme }) => theme.mq.desktop} {
        width: 8rem;
        height: 8rem;
    }
`

export const Description = styled.span`
    ${({ theme }) => theme.mq.desktop} {
        width: 50%;
    }
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`

export const Title = styled.h1`
    font-size: ${({ theme }) => theme.font.size.m};
`

export const Price = styled.h2`
    font-size: ${({ theme }) => theme.font.size.s};
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
`

export const Quantity = styled.h3`
    width: 1.5rem;
    text-align: center;
`
