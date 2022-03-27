import React, { useState } from 'react';
import styled from '@emotion/styled';
import propTypes from 'prop-types';
import { Card, Col, Row, ButtonGroup, Button } from 'react-bootstrap';

export default function CatchArena(props) {
  const { pokemon, bg } = props;
  const backgrounds = [
    'img/volcano.jpg',
    'img/coast.jpg',
    'img/cave.jpg',
    'img/forest.jpg',
    'img/glacier.jpg',
  ];
  const CardWrapper = styled(Card)`
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
    height: 65vh;
    background-image: url('${backgrounds[bg]}');
    background-position: center center;
    background-size: 100% auto;
    backdrop-filter: blur(2px);
    background-repeat: no-repeat;
    @media (max-width: 1024px) {
    background-size: auto 100%;
    }
  `;
  const CardBody = styled(Card.Body)`
    display: flex;
    justify-content: center;
    align-items: end;
    overflow: hidden;
  `;
  const PokemonImg = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    margin: 0;
    transform: translate(-50%, -50%) scale(3 ,3);
    filter: drop-shadow(0 0 0.15rem black);
  `;
  const spriteUrl = (id) => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;


  
  console.log('3. startarena', pokemon, bg)


  return (
    <CardWrapper>
      <CardBody {...props}>
        <PokemonImg src={spriteUrl(pokemon.id)} />
        <Card style={{ marginBottom: '1rem' }}>
          <CardBody>
            <span>A <b>{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</b> appeared!</span>
          </CardBody>
        </Card>
      </CardBody>
    </CardWrapper>
  )
}
