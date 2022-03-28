import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Container, PokeCard, BackButton, SizeButtons } from "../components";
import { Row, Col, Card, Button, ButtonGroup } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { LocalStorageManager } from "../fetchData";
import { BrowserRouter as Router, useParams } from "react-router-dom";
import placeholderData from "../placeholder_data/PokemonMyList";

export default function MyList(props) {
  const [pokemonList, setPokemonList] = useState(placeholderData);
  const [colSize, setColSize] = useState(6);
  const CardContainer = styled(Card)`
    padding: 2rem;
  `;
  const ColContainer = styled(Col)`
    display: flex;
    justify-content: space-between;
  `;

  useEffect(() => {
    setPokemonList(LocalStorageManager.get())
  }, []);

  console.log(pokemonList)

  const buttonClick = (e) => {
    setColSize(e.currentTarget.value);
  }

  return (
    <Container>
      <Row className="w-100">
        <ColContainer>
          <BackButton icon={'bi-arrow-left-circle'} to="/">Home</BackButton>
          <h2>My Pokemon</h2>
          <SizeButtons clickHandler={buttonClick} colSize={colSize}></SizeButtons>
        </ColContainer>
      </Row>
      <Row className="w-100">
        <Col>
          <CardContainer>

            <Row>
              <PokeCard myPokemon xs={colSize} pokemon={pokemonList.myPokemon}></PokeCard>
            </Row>

          </CardContainer>
        </Col>
      </Row>
    </Container >
  )
}