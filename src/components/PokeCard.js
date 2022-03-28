import React, { useState } from 'react';
import styled from '@emotion/styled';
import propTypes from 'prop-types';
import { Card, Col, Row, ButtonGroup } from 'react-bootstrap';
import { Button } from '../components';
import { Link } from "react-router-dom";

export default function PokeCard(props) {
  const { pokemon, xs = 3, myPokemon = false } = props;
  const CardWrapper = styled(Card)`
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
  `;
  const ColCentered = styled(Col)`
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const LinkStyled = styled(Link)`
    text-decoration: none;
    color: inherit;
    &:hover{
      color: inherit;
    }
  `;
  const spriteUrl = (id) => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  const [size, setSize] = useState(xs);
  const flavorText = (size == 12) ? {} : { display: 'none' };
  const colSize = {
    3: {
      first: 12,
      second: 12,
      third: 12,
      fourth: 0,
      fifth: 12,
    },
    6: {
      first: 2,
      second: 4,
      third: 3,
      fourth: 0,
      fifth: 3,
    },
    12: {
      first: 1,
      second: 2,
      third: 2,
      fourth: 4,
      fifth: 3,
    }
  };

  if (myPokemon) {
    return pokemon.map((d, index) => {
      return (
        <Col xs={size}>
          <LinkStyled to={`/details/my/${index}`}>
            <CardWrapper>
              <Card.Body {...props}>
                <Row>
                  <ColCentered xs={colSize[xs].first}>
                    {d.id}
                  </ColCentered>
                  <ColCentered xs={colSize[xs].second}>
                    <img style={{ scale: "1.25" }} src={spriteUrl(d.id)} />
                  </ColCentered>
                  <ColCentered xs={colSize[xs].third}>
                    {d.name[0].toUpperCase() + d.name.slice(1)} ({d.nickname})
                  </ColCentered>
                  <ColCentered xs={colSize[xs].fourth} style={flavorText}>
                    {d.flavor_texts[0].flavor_text}
                  </ColCentered>
                  <ColCentered xs={colSize[xs].fifth}>
                    <Types xs={xs} data={d.attributes[0].types}></Types>
                  </ColCentered>
                </Row>
              </Card.Body>
            </CardWrapper>
          </LinkStyled>
        </Col>
      )
    })
  }

  return pokemon.map(d => {
    return (
      <Col xs={size}>
        <LinkStyled to={`/details/${d.id}`}>
          <CardWrapper>
            <Card.Body {...props}>
              <Row>
                <ColCentered xs={colSize[xs].first}>
                  {d.id}
                </ColCentered>
                <ColCentered xs={colSize[xs].second}>
                  <img style={{ scale: "1.25" }} src={spriteUrl(d.id)} />
                </ColCentered>
                <ColCentered xs={colSize[xs].third}>
                  {d.name[0].toUpperCase() + d.name.slice(1)}
                </ColCentered>
                <ColCentered xs={colSize[xs].fourth} style={flavorText}>
                  {d.flavor_texts[0].flavor_text}
                </ColCentered>
                <ColCentered xs={colSize[xs].fifth}>
                  <Types xs={xs} data={d.attributes[0].types}></Types>
                </ColCentered>
              </Row>
            </Card.Body>
          </CardWrapper>
        </LinkStyled>
      </Col>
    )
  })
}

function Types(props) {
  const { data, xs } = props;
  const isVertical = (xs != 3);
  const color = {
    'grass': '#78C850',
    'fire': '#F08030',
    'water': '#6890F0',
    'bug': '#A8B820',
    'normal': '#A8A878',
    'poison': '#A040A0',
    'electric': '#F8D030',
    'ground': '#E0C068',
    'fairy': '#EE99AC',
    'fighting': '#C03028',
    'psychic': '#F85888',
    'rock': '#B8A038',
    'ghost': '#705898',
    'ice': '#98D8D8',
    'dragon': '#7038F8',
  }
  const Type = (props) => {
    const { type } = props;
    const buttonProps = {
      colorPrimary: color[type],
      colorText: 'white',
      colorHover: 'white',
      colorActive: 'white',
    }
    const StyledButton = styled(Button)`
      border-color: transparent;
      min-width: 4.75rem;
      padding: 0.25rem 0.5rem;
      border-radius: 0rem;
      cursor: context-menu;
    `;
    return <StyledButton disabled {...buttonProps} {...props}></StyledButton>;
  }

  return (
    <ButtonGroup vertical={isVertical}>
      {
        data.map(d => {
          return (
            <Type type={d.type.name} {...props}>{d.type.name[0].toUpperCase() + d.type.name.slice(1)}</Type>
          )
        })
      }
    </ButtonGroup>
  )
}

PokeCard.propTypes = {
  data: propTypes.array,
  isTrue: propTypes.bool
}