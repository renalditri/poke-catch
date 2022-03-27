import React from 'react';
import styled from '@emotion/styled';
import { Button, Container } from "../components";
import { Row, Col, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function GenerationList(props) {
  const { list = false, myList = false } = props;

  if (myList) {
    return (
      <MyList {...props}></MyList>
    )
  }
  return (
    <List {...props}></List>
  )
}

function MyList(props) {
  return (
    <Container>
      MyList
        <li>
          <ul>
            <Link to="/">Home</Link>
          </ul>
          <ul>
            <Link to="/myList/gen/1">Generation I</Link>
          </ul>
          <ul>
            <Link to="/myList/gen/2">Generation II</Link>
          </ul>
          <ul>
            <Link to="/myList/gen/3">Generation III</Link>
          </ul>
          <ul>
            <Link to="/myList/gen/4">Generation IV</Link>
          </ul>
          <ul>
            <Link to="/myList/gen/5">Generation V</Link>
          </ul>
          <ul>
            <Link to="/myList/gen/6">Generation VI</Link>
          </ul>
          <ul>
            <Link to="/myList/gen/7">Generation VII</Link>
          </ul>
        </li>
      </Container>
  )
}

function List(props) {
  return (
    <Container>
      List
        <li>
          <ul>
            <Link to="/">Home</Link>
          </ul>
          <ul>
            <Link to="/list/gen/1">Generation I</Link>
          </ul>
          <ul>
            <Link to="/list/gen/2">Generation II</Link>
          </ul>
          <ul>
            <Link to="/list/gen/3">Generation III</Link>
          </ul>
          <ul>
            <Link to="/list/gen/4">Generation IV</Link>
          </ul>
          <ul>
            <Link to="/list/gen/5">Generation V</Link>
          </ul>
          <ul>
            <Link to="/list/gen/6">Generation VI</Link>
          </ul>
          <ul>
            <Link to="/list/gen/7">Generation VII</Link>
          </ul>
        </li>
      </Container>
  )
}