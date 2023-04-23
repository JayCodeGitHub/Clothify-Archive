import styled, { keyframes } from "styled-components";

const intro = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, -20px);
  }
  to {
    opacity: 1;
    transform: translate(-50%, 0px);
  }
`;

export const Wrapper = styled.aside`
    position: fixed;
    display: flex;
    align-items: center;
    background-color: white;
    width: 300px;
    padding: 20px;
    border-radius: 1rem;
    gap: 1rem;
    top: 2rem;
    left: 50%;
    transform: translateX(-50%);
    font-size: ${({ theme }) => theme.font.size.s};
    animation: ${intro} 0.2s linear;
`

export const IconWrapper = styled.span`
    background-color: #00BF00;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
`