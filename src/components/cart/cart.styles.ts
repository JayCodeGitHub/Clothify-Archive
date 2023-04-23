import styled from 'styled-components'
import Link from "next/link";

export const OuterWrapper = styled.div`
    position: fixed;
    z-index: 120;
`

export const Background = styled.div<{isCart: boolean}>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all .3s .1s ease-in-out;
    background-color: ${({isCart}) => isCart ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0)'};
    visibility: ${({isCart}) => isCart ? 'visible' : 'hidden'};
    z-index: 90;
`

export const Wrapper = styled.section<{isCart: boolean}>`
   overflow: auto;
    position: fixed;
    height: 100vh;
    top: 0;
    right: 0;
    z-index: 100;
    transition: transform .3s .1s ease-in-out;
    transform: translateX(${({isCart}) => isCart ? '0' : '+100%'});
    background-color: ${({ theme }) => theme.secondary};
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 0;
    gap: 2rem;
    ${({ theme }) => theme.mq.desktop} {
        width: 35%;
    }
`


export const Subtotal = styled.p`
    align-self: flex-start;
    padding: 1rem 0  0 10%;
`

export const ButtonWrapper = styled(Link)`
    width: 100%;
    display: flex;
    justify-content: center;
`