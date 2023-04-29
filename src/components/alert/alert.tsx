import { StyledWrapper, StyledIconWrapper } from "./alert.styles";

interface AlertProps {
  message: string;
}

export default function Alert({ message }: AlertProps) {
  return (
    <StyledWrapper role="alert">
      <StyledIconWrapper>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </StyledIconWrapper>
      <p>{message}</p>
    </StyledWrapper>
  );
}
