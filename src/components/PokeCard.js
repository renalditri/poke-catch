import React, { useState } from 'react';
import styled from '@emotion/styled';
import propTypes from 'prop-types';
import { Card, Col, Row, ButtonGroup } from 'react-bootstrap';
import { Button } from '../components';
import { Link } from "react-router-dom";
import useWindowDimensions from '../hook/useWindowsDimension';

export default function PokeCard(props) {
  const { pokemon, xs = 6, myPokemon = false } = props;
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
      xs: {
        first: 12,
        second: 12,
        third: 12,
        fourth: 0,
        fifth: 12,
      },
      md: {
        first: 12,
        second: 12,
        third: 12,
        fourth: 12,
        fifth: 12,
      }
    },
    6: {
      xs: {
        first: 12,
        second: 12,
        third: 12,
        fourth: 0,
        fifth: 12,
      },
      md: {
        first: 2,
        second: 3,
        third: 4,
        fourth: 0,
        fifth: 3,
      }
    },
    12: {
      xs: {
        first: 12,
        second: 12,
        third: 12,
        fourth: 12,
        fifth: 12,
      },
      md: {
        first: 1,
        second: 2,
        third: 2,
        fourth: 4,
        fifth: 3,
      }
    }
  };
  const { height, width } = useWindowDimensions();
  const vertical = (width < 1024) ? false : (xs != 3);

  if (myPokemon) {
    return pokemon.map((d, index) => {
      return (
        <Col xs={size}>
          <LinkStyled to={`/details/my/${index}`}>
            <CardWrapper>
              <Card.Body {...props}>
                <Row>
                  <ColCentered md={colSize[xs].md.first} xs={colSize[xs].xs.first}>
                    {d.id}
                  </ColCentered>
                  <ColCentered md={colSize[xs].md.second} xs={colSize[xs].xs.second}>
                    <img style={{ scale: "1.25" }} src={spriteUrl(d.id)} />
                  </ColCentered>
                  <ColCentered md={colSize[xs].md.third} xs={colSize[xs].xs.third}>
                    {d.name[0].toUpperCase() + d.name.slice(1)} ({d.nickname})
                  </ColCentered>
                  <ColCentered md={colSize[xs].md.fourth} xs={colSize[xs].xs.fourth} style={flavorText}>
                    {d.flavor_texts[0].flavor_text}
                  </ColCentered>
                  <ColCentered md={colSize[xs].md.fifth} xs={colSize[xs].xs.fifth}>
                    <Types isVertical={vertical} data={d.attributes[0].types}></Types>
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
                <ColCentered md={colSize[xs].md.first} xs={colSize[xs].xs.first}>
                  {d.id}
                </ColCentered>
                <ColCentered md={colSize[xs].md.second} xs={colSize[xs].xs.second}>
                  <img style={{ scale: "1.25" }} src={spriteUrl(d.id)} />
                </ColCentered>
                <ColCentered md={colSize[xs].md.third} xs={colSize[xs].xs.third}>
                  {d.name[0].toUpperCase() + d.name.slice(1)}
                </ColCentered>
                <ColCentered md={colSize[xs].md.fourth} xs={colSize[xs].xs.fourth} style={flavorText}>
                  {d.flavor_texts[0].flavor_text}
                </ColCentered>
                <ColCentered md={colSize[xs].md.fifth} xs={colSize[xs].xs.fifth}>
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
  const { data, isVertical } = props;
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
      colorHover: color[type],
      colorActive: color[type],
      colorText: 'white',
      colorTextHover: 'white',
      colorTextActive: 'white',
    }
    const StyledButton = styled(Button)`
      border-color: transparent;
      min-width: 4.75rem;
      padding: 0.25rem 0.5rem;
      border-radius: 0rem;
      cursor: context-menu;

      @media (max-width: 1023px) {
        font-size: 0.9rem;
        border-color: transparent;
        min-width: 2rem;
        padding: 0.2rem 0.3rem;
        border-radius: 0rem;
      }
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