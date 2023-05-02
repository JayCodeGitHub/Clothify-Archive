import styled from 'styled-components'
import Link from "next/link";

export const StyledOuterWrapper = styled.div`
    position: fixed;
    z-index: 120;
`

export const StyledBackground = styled.div<{isCart: boolean}>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 90;
    background-color: ${({isCart}) => isCart ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0)'};
    visibility: ${({isCart}) => isCart ? 'visible' : 'hidden'};
    transition: all .3s .1s ease-in-out;
`

export const StyledWrapper = styled.section<{isCart: boolean}>`
    display: flex;
    position: fixed;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    top: 0;
    right: 0;
    padding: 2rem 0;
    width: 70%;
    height: 100vh;
    overflow: auto;
    z-index: 100;
    background-color: ${({ theme }) => theme.secondary};
    transform: translateX(${({isCart}) => isCart ? '0' : '+100%'});
    transition: transform .3s .1s ease-in-out;
    ${({ theme }) => theme.mq.desktop} {
        width: 35%;
    }
`


export const StyledSubtotal = styled.p`
    align-self: flex-start;
    padding: 1rem 0  0 10%;
`

export const StyledButtonWrapper = styled(Link)`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 5rem;
`