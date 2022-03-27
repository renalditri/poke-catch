import React from 'react';
import styled from '@emotion/styled';
import { css, cx } from '@emotion/react';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

export default function CustomButton(props) {
  const { isLink = false, to = false, full = false } = props,
    colorPrimary = 'black',
    colorText = 'white',
    fullStyle = css`
      display: block;
      max-width: 100%;
      max-height: 100%;
    `,
    style = css`
      display: inline-block;
      background-color: ${colorPrimary};
      color: ${colorText};
      border: 1px solid transparent;
      border-radius: 0.25rem;
      text-decoration: none;
      transition: all 0.15s;
      border: 1px solid transparent; 
      padding: 0.375rem 0.75rem;
      cursor: pointer;
      ${(full) ? fullStyle : ''}
      &:hover {
        color: grey;
      }
      &:active {
        color: red;
      }
      &:focus {
        border-color: blue;
        box-shadow: 0 0 0 0.25rem rgba(49, 132, 253, 0.5);
      }
    `,
    StyledButton = styled.button`${style}`,
    StyledLink = styled(Link)`${style}`;

  if (isLink) {
    return (
      <StyledLink to={to} {...props}></StyledLink>
    )
  }

  return (
    <StyledButton {...props}></StyledButton>
  )
}