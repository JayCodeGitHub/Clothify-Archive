import styled from 'styled-components'

export const StyledOuterWrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 8rem;
    padding: 0 10%;
    font-weight: 500;
    background-color: ${({ theme }) => theme.secondary};
`

export const StyledWrapper = styled.ul`
    display: flex;
    gap: 1.5rem;
    font-size: ${({ theme }) => theme.font.size.s};
    list-style: none;
    color: ${({ theme }) => theme.dark};
    ${({ theme }) => theme.mq.desktop} {
        font-size: ${({ theme }) => theme.font.size.s};
    }
`

export const StyledNavigationItem = styled.li`
    transition: color 0.1s ease-in-out;
    &:hover{
        color: ${({ theme }) => theme.primary};
    }
`

export const StyledCartIcon = styled.span<{quantity: any}>`
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: ${({ theme }) => theme.font.size.xs};
    cursor: pointer;
    transition: color 0.1s ease-in-out;
    &:hover{
        color: ${({ theme }) => theme.primary};
        svg {
            stroke: ${({ theme }) => theme.primary};
        }
    }
    &:before{
        content: "${props => props.quantity}";
        display: flex;
        opacity: ${props => props.quantity > 0 ?  "1" : "0"};
        position: absolute;
        align-items: center;
        justify-content: center;
        top: 0;
        right: 0;
        width: 20px;
        height: 20px;
        color: ${({ theme }) => theme.light};
        border-radius: 100%;
        background-color: red;
        transform: translate(50%, -50%);
        transition: opacity .3s ease-in-out;
    }
    svg {
        transition: stroke 0.1s ease-in-out;
    }
`
