import React from 'react';
import styled from 'styled-components';

const Button = () => {
  return (
    <StyledWrapper>
      <div className='container'>
        <button>
          <span id='u'>M</span>
          <span id='n'>O</span>
          <span id='i'>R</span>
          <span id='v'>E</span>
          <span id='e'>L</span>
          <span id='r'>O</span>
          <span id='s'>A</span>
          <span id='ee'>D</span>
        </button>
        <img
          src='/images/pokeball.webp'
          alt='logo'
          className='moon-img'
          draggable={false}
        />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  button {
    z-index: 500;
    width: 20rem;
    height: 4rem;
    letter-spacing: 0.5rem;
    border: gray 0.1rem solid;
    border-radius: 5rem;
    color: gray;
    animation: universe-is-moving 2s infinite ease-out;
    background: transparent;
    background-size: 200% 200%;
    animation-direction: alternate;
    background-position: 0% 100%;
    animation-name: universe-is-moving;
    animation-duration: 1.8s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    transition: all 0.5s ease-in-out;
  }

  button:hover {
    border-radius: 0.5rem;
    cursor: pointer;
  }

  .moon-img {
    position: relative;
    left: 2rem;
    bottom: -2rem;
    right: 0;
    width: 32px;
    height: 32px;
    transform: translate3d(42px, -62px, -135px);
    border-radius: 50%;
    animation: 3s universe-moon infinite ease-in-out;
    animation-timing-function: linear;
    background: none;
  }

  #u {
    font-size: 1.2rem;
    animation: 3s ease-in-out universe-letters-are-moving infinite;
  }

  #n {
    font-size: 1.2rem;
    animation: 3s ease-in-out universe-letters-are-moving infinite;
    animation-delay: 200ms;
  }

  #i {
    font-size: 1.2rem;
    animation: 3s ease-in-out universe-letters-are-moving infinite;
    animation-delay: 400ms;
  }

  #v {
    font-size: 1.2rem;
    animation: 3s ease-in-out universe-letters-are-moving infinite;
    animation-delay: 600ms;
  }

  #e {
    font-size: 1.2rem;
    animation: 3s ease-in-out universe-letters-are-moving infinite;
    animation-delay: 800ms;
  }

  #r {
    font-size: 1.2rem;
    animation: 3s ease-in-out universe-letters-are-moving infinite;
    animation-delay: 1000ms;
  }

  #s {
    font-size: 1.2rem;
    animation: 3s ease-in-out universe-letters-are-moving infinite;
    animation-delay: 1200ms;
  }

  #e {
    font-size: 1.2rem;
    animation: 3s ease-in-out universe-letters-are-moving infinite;
    animation-delay: 1400ms;
  }

  #ee {
    font-size: 1.2rem;
    animation: 3s ease-in-out universe-letters-are-moving infinite;
    animation-delay: 1600ms;
  }

  @keyframes universe-is-moving {
    from {
      background-position: 0% 100%;
    }

    to {
      background-position: 100% 0%;
    }
  }

  @keyframes universe-letters-are-moving {
    0% {
      font-size: 1.2rem;
    }

    50% {
      font-size: 1.5rem;
    }

    100% {
      font-size: 1.2rem;
    }
  }

  @keyframes universe-moon {
    0% {
      z-index: 5;
      transform: translateY(-8em) translateX(10em);
    }

    50% {
      transform: translateX(0.5em) translateY(-1em);
    }

    100% {
      transform: translateY(-8em) translateX(10em);
      z-index: -5;
    }
  }
`;

export default Button;
