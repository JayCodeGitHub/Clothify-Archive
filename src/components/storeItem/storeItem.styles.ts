import styled from 'styled-components'
import Image from "next/image"
import Link from "next/link";

export const StyledWrapper = styled(Link)`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 12px;
    padding: 20px;
    border-radius: 1rem;
    background-color: ${({ theme }) => theme.light};
    transition: box-shadow 0.2s ease-in-out;
    &:hover{
        box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    }
    ${({ theme }) => theme.mq.desktop} {
        height: 25rem;
    }
`

export const StyledImage = styled(Image)`
    align-self: center;
    object-fit: cover;
    height: 20rem;
    width: 35vw;
    border-radius: 0.2rem;
    ${({ theme }) => theme.mq.phone} {
        width: 80vw;
        height: 28rem;
    }
    ${({ theme }) => theme.mq.desktop} {
        height: 18rem;
        width: 100%;
    }
`

export const StyledName = styled.h1`
    font-size: ${({ theme }) => theme.font.size.m};
`

export const StyledPrice = styled.h2`
    font-size: ${({ theme }) => theme.font.size.s};
`