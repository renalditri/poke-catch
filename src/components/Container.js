import React from 'react';
import styled from '@emotion/styled';
import Container from 'react-bootstrap/Container';

export default function CustomButton(props) {
  const { isLink = false, to = false, App = false } = props;
  const StyledContainer = (App) ? styled(Container)`
    padding-top: 3rem;
    padding-bottom: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
  ` : styled(Container)`
    margin-top: 3rem;
    margin-bottom: 3rem;
  `;

  return (
    <StyledContainer {...props} variant="primary">{props.children}</StyledContainer>
  )
}