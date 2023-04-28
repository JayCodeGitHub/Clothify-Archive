import styled from 'styled-components'

export const OuterWrapper = styled.nav`
    width: 100%;
    height: 8rem;
    font-weight: 500;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10%;
    background-color: ${({ theme }) => theme.secondary};
`

export const Wrapper = styled.ul`
    display: flex;
    gap: 1.5rem;
    list-style: none;
    color: ${({ theme }) => theme.dark};
    font-size: ${({ theme }) => theme.font.size.s};
    ${({ theme }) => theme.mq.desktop} {
        font-size: ${({ theme }) => theme.font.size.s};
    }
`

export const NavigationItem = styled.li`
   transition: color 0.1s ease-in-out;
    &:hover{
        color: ${({ theme }) => theme.primary};
    }
`

interface Props {
    quantity: any;
  }

export const CartIcon = styled.span<Props>`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: ${({ theme }) => theme.font.size.xs};
    position: relative;
    cursor: pointer;
    transition: color 0.1s ease-in-out;
    svg {
        transition: stroke 0.1s ease-in-out;
    }
    &:hover{
        color: ${({ theme }) => theme.primary};
        svg {
            stroke: ${({ theme }) => theme.primary};
        }
    }
    &:before{
        content: "${props => props.quantity}";
        color: ${({ theme }) => theme.light};
        display: ${props => props.quantity > 0 ?  "flex" : "none"};
        justify-content: center;
        align-items: center;
        width: 20px;
        height: 20px;
        border-radius: 100%;
        position: absolute;
        transform: translate(50%, -50%);
        top: 0;
        right: 0;
        background-color: red;
    }
`
