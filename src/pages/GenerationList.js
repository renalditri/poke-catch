import React from 'react';
import styled from '@emotion/styled';
import { Button, Container, BackButton } from "../components";
import { Row, Col, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function GenerationList(props) {
  const ColCentered = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  border-radius: 0.5rem;
  padding: 0.75rem;
  margin: 0.25rem 0rem;
    a {
      text-decoration: none;
      color: black;
      font-weight: bold;
      font-size: 1.25rem;
      border: transparent;
    }
  `;
  return (
    <Container>
      <Row className="m-3">
        <ColCentered xs={12}>
      <BackButton icon={''} to="/">Home</BackButton>
        </ColCentered>
        <ColCentered xs={12}>
          <Link to="/list/gen/1">Generation I</Link>
        </ColCentered>
        <ColCentered xs={12}>
          <Link to="/list/gen/2">Generation II</Link>
        </ColCentered>
        <ColCentered xs={12}>
          <Link to="/list/gen/3">Generation III</Link>
        </ColCentered>
        <ColCentered xs={12}>
          <Link to="/list/gen/4">Generation IV</Link>
        </ColCentered>
        <ColCentered xs={12}>
          <Link to="/list/gen/5">Generation V</Link>
        </ColCentered>
        <ColCentered xs={12}>
          <Link to="/list/gen/6">Generation VI</Link>
        </ColCentered>
        <ColCentered xs={12}>
          <Link to="/list/gen/7">Generation VII</Link>
        </ColCentered>
      </Row>
    </Container>
  )
}