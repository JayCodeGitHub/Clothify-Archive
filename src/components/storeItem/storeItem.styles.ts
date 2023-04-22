import styled from 'styled-components'
import Image from "next/image";

export const Wrapper = styled.a`
    display: flex;
    border-radius: 1rem;
    background-color: ${({ theme }) => theme.light};
    justify-content: flex-start;
    align-items: flex-start;
    padding: 20px;
    flex-direction: column;
    gap: 12px;
    height: 35rem;
    transition: box-shadow 0.2s ease-in-out;
    ${({ theme }) => theme.mq.desktop} {
        height: 25rem;
    }
    &:hover{
        box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    }
`

export const StyledImage = styled(Image)`
    width: 100%;
    height: 28rem;
    object-fit: cover;
    border-radius: 0.2rem;
    align-self: center;
    ${({ theme }) => theme.mq.desktop} {
        height: 18rem;
    }
`

export const Name = styled.h1`
    font-size: ${({ theme }) => theme.font.size.m};
`

export const Price = styled.h2`
    font-size: ${({ theme }) => theme.font.size.s};
`