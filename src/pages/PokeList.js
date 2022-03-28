import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Container, PokeCard } from "../components";
import { Row, Col, Card, Button, ButtonGroup } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { PokemonFetch } from "../fetchData";
import { BrowserRouter as Router, useParams } from "react-router-dom";
import placeholderData from "../placeholder_data/PokemonListGen";

export default function PokeList(props) {
  const [pokemonList, setPokemonList] = useState(placeholderData);
  const [colSize, setColSize] = useState(6);
  const { gen } = useParams();
  const CardContainer = styled(Card)`
    padding: 2rem;
  `;
  const ColContainer = styled(Col)`
    display: flex;
    justify-content: space-between;
  `;

  useEffect(() => {
    PokemonFetch.fetchPokemonListByID(gen)
      .then(r => {
        setPokemonList(r.data);
      })
  }, []);

  const buttonClick = (e) => {
    setColSize(e.target.value);
  }

  return (
    <Container>
      <li>
        <ul>
          <Link to="/list">Lista</Link>
        </ul>
      </li>
      <Row className="w-100">
        <ColContainer>
          <h2>Pokedex</h2>
          <ButtonGroup>
            <Button value={3} onClick={e => buttonClick(e)}>S</Button>
            <Button value={6} onClick={e => buttonClick(e)}>M</Button>
            <Button value={12} onClick={e => buttonClick(e)}>L</Button>
          </ButtonGroup>
        </ColContainer>
      </Row>
      <Row className="w-100">
        <Col>
          <CardContainer>

            <Row>
              <PokeCard xs={colSize} pokemon={pokemonList.pokemonList[0].pokemon}></PokeCard>
            </Row>

          </CardContainer>
        </Col>
      </Row>
    </Container >
  )
}