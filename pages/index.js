import styled, { keyframes } from "styled-components";

// Animação do fundo estrelado
const moveBackground = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Efeito de brilho no texto
const glow = keyframes`
  0% { text-shadow: 0 0 5px rgba(255, 100, 150, 0.7), 0 0 10px rgba(255, 50, 100, 0.5); }
  50% { text-shadow: 0 0 10px rgba(255, 150, 200, 1), 0 0 20px rgba(255, 50, 100, 0.8); }
  100% { text-shadow: 0 0 5px rgba(255, 100, 150, 0.7), 0 0 10px rgba(255, 50, 100, 0.5); }
`;

// Coração com batida suave e elegante
const heartbeat = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.15); }
`;

// Fundo animado cinematográfico
const Background = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(-45deg, #240b36, #8a2387, #e94057, #f27121);
    background-size: 300% 300%;
    animation: ${moveBackground} 10s ease infinite;
    position: relative;
    overflow: hidden;
`;

// Mensagem elegante e sofisticada
const Message = styled.h1`
    font-family: "Great Vibes", cursive;
    color: #fff;
    font-size: 5rem;
    font-weight: bold;
    text-align: center;
    animation: ${glow} 2s infinite alternate;
    letter-spacing: 2px;
    text-transform: uppercase;
`;

// Coração com animação refinada
const Heart = styled.span`
    display: inline-block;
    animation: ${heartbeat} 2s infinite ease-in-out;
    color: #ff0066;
    font-size: 5rem;
`;

// Criando partículas brilhantes
const Particle = styled.div`
    position: absolute;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    pointer-events: none;
    opacity: 0.8;
    filter: blur(2px);
    animation: float 6s infinite linear;

    @keyframes float {
        0% {
            transform: translateY(0) scale(1);
            opacity: 0.8;
        }
        50% {
            transform: translateY(-20px) scale(1.2);
            opacity: 0.6;
        }
        100% {
            transform: translateY(0) scale(1);
            opacity: 0.8;
        }
    }
`;

export default function Home() {
    return (
        <Background>
            {/* Criando partículas dinâmicas */}
            {[...Array(30)].map((_, i) => (
                <Particle
                    key={i}
                    style={{
                        width: `${Math.random() * 8 + 3}px`,
                        height: `${Math.random() * 8 + 3}px`,
                        top: `${Math.random() * 100}vh`,
                        left: `${Math.random() * 100}vw`,
                        animationDelay: `${Math.random() * 6}s`,
                    }}
                />
            ))}

            {/* Mensagem super profissional */}
            <Message>
                Gabriel é gay <Heart>👧</Heart>
            </Message>
        </Background>
    );
}
