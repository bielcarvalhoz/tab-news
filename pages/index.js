import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Heartbeat = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
`;

const Message = styled.h1`
    font-family: "Cursive", sans-serif;
    color: #e63946;
    font-size: 3rem;
    text-align: center;
    margin-top: 20vh;
    animation: ${fadeIn} 2s ease-in-out;

    span {
        display: inline-block;
        animation: ${Heartbeat} 1.5s infinite ease-in-out;
    }
`;

export default function Home() {
    return (
        <Message>
            Eu te amo <span>❤️</span>
        </Message>
    );
}
