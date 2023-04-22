import styled from 'styled-components'
import Image from "next/image";


export const Wrapper = styled.main`
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 10rem;
`

export const StyledImage = styled(Image)`
    height: 28rem;
    object-fit: cover;
    border-radius: 0.2rem;
    align-self: center;
    ${({ theme }) => theme.mq.desktop} {
        height: 30rem;
        width: 30rem;
    }
`
export const DescriptionWrapper = styled.div`
    height: 20rem;
    width: 30rem;
    display: flex;
    flex-direction: column;
justify-content: space-around;
gap: 0.5rem;

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

export const Button = styled.button`
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.light};
    font-size: ${({ theme }) => theme.font.size.xs};
    font-weight: 600;
    border-radius: 0.5rem;
    width: 80%;
    border: none;
    padding: 1rem 0;
`