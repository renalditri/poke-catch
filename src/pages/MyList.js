import React from 'react';
import styled from '@emotion/styled';
import { Button, Container } from "../components";
import { Row, Col, Table, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function MyList(props) {
  return(
    <Container>
      <li>
        <ul>
          <Link to="/myList">My List</Link>
        </ul>
      </li>
      <h2>My Pokemon</h2>
      <Row className="w-100">
        <Col>
          <Card>
            <Row>
              <Col>
                <Card>
                  asd
                </Card>
              </Col>
              <Col>
                <Card>
                  asd
                </Card>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}