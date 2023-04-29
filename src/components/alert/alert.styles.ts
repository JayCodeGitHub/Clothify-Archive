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

export const StyledWrapper = styled.aside`
    display: flex;
    position: fixed;
    align-items: center;
    gap: 1rem;
    top: 2rem;
    left: 50%;
    padding: 20px;
    font-size: ${({ theme }) => theme.font.size.s};
    background-color: white;
    animation: ${intro} 0.2s linear;
    border-radius: 1rem;
    transform: translateX(-50%);
`

export const StyledIconWrapper = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    background-color: #00BF00;
    border-radius: 50%;
`