import React from 'react';
import styled from '@emotion/styled';
import { Button, Container } from "../components";
import { Row, Col, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function Details(props) {
  return (
    <div>
      Pokemon X
      <li>
        <ul>
          <Link to="/">Home</Link>
        </ul>
      </li>
    </div>
  )
}