import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Button, BackButton } from "../components";
import { Row, Col, Card, Table, ButtonGroup, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { BrowserRouter as Router, useParams, useNavigate } from "react-router-dom";
import { LocalStorageManager } from "../fetchData";
import { PokemonFetch } from "../fetchData";
import pokemonPlaceholder from "../placeholder_data/Pokemon";

export default function Details(props) {
  const { myPokemonID } = useParams();
  const { pokemonID } = useParams();
  const [pokemonData, setPokemonData] = useState(pokemonPlaceholder.pokemon[0]);
  const [spriteUrl, setSpriteUrl] = useState('');
  const [HomeLink, setHomeLink] = useState(['My List', '/myList']);
  const PokeImg = styled.img`
    width: 20%;
  `;
  const ColCentered = styled(Col)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid black;
    border-radius: 0.5rem;
    padding: 0.75rem;
    margin: 0.75rem;
  `;
  const StyledTable = styled(Table)`
    padding: 1rem;
  `;
  const navigate = useNavigate();
  useEffect(() => {
    if (pokemonID) {
      PokemonFetch.fetchPokemonByID(pokemonID)
        .then(r => {
          setPokemonData(r.data.pokemon[0]);
          setSpriteUrl(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${r.data.pokemon[0].id}.png`);
          setHomeLink([`Generation ${r.data.pokemon[0].generation_id} Pokemon List`, `/list/gen/${r.data.pokemon[0].generation_id}`]);
        })
    } else if (myPokemonID) {
      const myPokemon = LocalStorageManager.getById(myPokemonID);
      setPokemonData(myPokemon)
      setSpriteUrl(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${myPokemon.id}.png`);
    }
  }, [])

  const ReleaseButton = () => {
    if(window.confirm('Are you sure you want to release this pokemon?')) {
      console.log('tes',myPokemonID)
      console.log('tes',LocalStorageManager.delete(myPokemonID))
      alert('Your pokemon has been released');
      navigate('/myList')
    }
  }

  return (
    <Container className="p-3">
      <Card>
        <Card.Body>
          <Row>
            <Col xs={6}>
              <BackButton icon={'bi-arrow-left-circle'} to={HomeLink[1]}>{HomeLink[0]}</BackButton>
            </Col>
            {
              (myPokemonID) ? (
                <Col xs={6}>
                  <Button
                    colorPrimary={'red'} colorText={'white'} colorHover={'darkred'} colorActive={'black'}
                    colorTextHover={'white'} colorTextActive={'white'} colorFocus={'white'}
                    focusShadow={'0 0 0 0.25rem rgba(255, 0, 0, 0.5)'}
                    onClick={() => (ReleaseButton())} style={{ float: 'right' }}
                  >
                    Release Pokemon
                  </Button>
                </Col>
              ) : ''
            }
          </Row>
          <Row>
            <ColCentered>
              <span>Name</span><br />
              <h3>{AdjustText(pokemonData.name)} (#{pokemonData.id})</h3>
            </ColCentered>
            {
              (pokemonData.nickname) ? (
                <ColCentered>
                  <span>Nickname</span><br />
                  <h3>{pokemonData.nickname}</h3>
                </ColCentered>
              ) : ''
            }
          </Row>
          <Row>
            <ColCentered>
              <PokeImg src={spriteUrl} />
              <b>Type(s): </b><Types data={pokemonData.attributes[0].types}></Types>
            </ColCentered>
          </Row>
          <Row>
            <ColCentered>
              <h3>Abilities</h3>
              <StyledTable>
                <tbody>
                  <Abilities abilities={pokemonData.attributes[0].abilities}></Abilities>
                </tbody>
              </StyledTable>
            </ColCentered>
          </Row>
          <Row>
            <ColCentered>
              <h3>Description</h3>
              <StyledTable>
                <tbody>
                  <FlavorTexts flavTexts={pokemonData.flavor_texts}></FlavorTexts>
                </tbody>
              </StyledTable>
            </ColCentered>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  )
}

function Abilities(props) {
  const { abilities } = props;
  return abilities.map(ability => {
    return (
      <tr>
        <td><b>{AdjustText(ability.ability.name)}</b></td>
        <td>{ability.ability.pokemon_v2_abilityeffecttexts[0].short_effect}</td>
      </tr>
    )
  })
}

function FlavorTexts(props) {
  const { flavTexts } = props;
  return flavTexts.map(text => {
    return (
      <tr>
        <td><b>{AdjustText(text.version.name)}</b></td>
        <td>{text.flavor_text}</td>
      </tr>
    )
  })
}

function Types(props) {
  const { data, xs } = props;
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
      min-width: 4.5rem;
      padding: 0.25rem 0.5rem;
      margin: 0 0.2rem;
      border-radius: 0.5rem;
      cursor: context-menu;
    `;
    return <StyledButton disabled {...buttonProps} {...props}></StyledButton>;
  }

  return (
    <ButtonGroup>
      {
        data.map(d => {
          return (
            <Type type={d.type.name} {...props}>{AdjustText(d.type.name)}</Type>
          )
        })
      }
    </ButtonGroup>
  )
}

function AdjustText(text) {
  return (text[0].toUpperCase() + text.slice(1)).replace('-', ' ');
}