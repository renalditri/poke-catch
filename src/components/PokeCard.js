import React, { useState } from 'react';
import styled from '@emotion/styled';
import propTypes from 'prop-types';
import { Card, Col, Row, ButtonGroup, Button } from 'react-bootstrap';

export default function PokeCard(props) {
  const { pokemon, xs = 3 } = props;
  const CardWrapper = styled(Card)`
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
  `;
  const ColCentered = styled(Col)`
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const spriteUrl = (id) => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  const [size, setSize] = useState(xs);
  const flavorText = (size == 12) ? {} : {display: 'none'} ;
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

  return pokemon.map(d => {
    return (
      <Col xs={size}>
        <CardWrapper>
          <Card.Body {...props}>
            <Row>
              <ColCentered xs={colSize[xs].first}>
                {d.id}
              </ColCentered>
              <ColCentered xs={colSize[xs].second}>
                <img style={{scale: "1.25"}} src={spriteUrl(d.id)} />
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
      </Col>
    )
  })
}

function Types(props) {
  const { data, xs } = props;
  const isVertical = (xs != 3);
  const Type = (props) => {
    return (
      <Button {...props}></Button>
    )
  }

  return (
    <ButtonGroup vertical={isVertical}>
      {
        data.map(d => {
          return (
            <Type {...props}>{d.type.name}</Type>
          )
        })
      }
    </ButtonGroup>
  )
}

PokeCard.propTypes = {
  data: propTypes.array,
  isTrue : propTypes.bool
}