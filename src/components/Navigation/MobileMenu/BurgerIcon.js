import React from 'react';
import styled from 'styled-components';


const StyledBurger = styled.button`
  position: absolute;
  top: 5%;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  @media screen and (min-width:60em) {
    display:none
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => open ? '#000' : '#000'};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`

const BurgerIcon = ({open, setOpen}) => {

  return (
    <StyledBurger className="" open={open} onClick={() => setOpen(!open)}>
      <div/>
      <div/>
      <div/>
    </StyledBurger>
  );
};

export default BurgerIcon;