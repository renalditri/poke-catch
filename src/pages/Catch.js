import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Link } from "react-router-dom";
import { Button, Container, CatchArena, ModalCatch } from "../components";
import { Row, Col, Card } from 'react-bootstrap';
import { PokemonFetch } from "../fetchData";
import pokemonData from "../placeholder_data/Pokemon";

export default function Catch(props) {
  const [pokemon, setPokemon] = useState(pokemonData);
  const [successShow, setSuccessShow] = useState(false);
  const [failedShow, setFailedShow] = useState(false);
  const ButtonMenu = styled(Button)`
    display: flex;
    align-items: center; 
    justify-content: center;
    min-height: 10vh;
    flex-grow: 1;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  `;

  console.log('1. startcatch', pokemon, successShow, failedShow)

  useEffect(() => {
    console.log('useeffect')
    refresh();
  }, []);

  const refresh = () => {
    PokemonFetch.fetchRandomPokemon()
      .then(r => {
        setPokemon(r.data);
      })
  }

  const catchClick = () => {
    console.log('click-catch', pokemon, successShow, failedShow)
    const chance = getRandomInt(1, 3);
    if(chance == 1) {
      setSuccessShow(true);
    } else {
      setFailedShow(true);
    }
  }

  const handleClose = () => {
    setFailedShow(false);
    setSuccessShow(false);
    setTimeout(() => {refresh()}, 100)
  }

  return (
    <Container>
      <li>
        <ul>
          <Link to="/">Home</Link>
        </ul>
      </li>
      <ModalCatch show={failedShow} pokemon={pokemon.pokemon[0]} handleClose={handleClose}></ModalCatch>
      <ModalCatch isSuccess show={successShow} pokemon={pokemon.pokemon[0]} handleClose={handleClose}></ModalCatch>
      <CatchArena bg={randomBg()} pokemon={pokemon.pokemon[0]}></CatchArena>
      <Row>
        <Col xs={6} className='d-flex'>
          <ButtonMenu onClick={refresh} full>Run</ButtonMenu>
        </Col>
        <Col xs={6} className='d-flex'>
          <ButtonMenu onClick={catchClick} full>Catch</ButtonMenu>
        </Col>
      </Row>
    </Container>
  )
}

function getRandomInt(min, max) {
  console.log('?. number')
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomBg() {
  console.log('dsa')
  return Math.floor(Math.random() * 5);
}


function Child({onMount}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    onMount([value, setValue]);
  }, [onMount, value]);


  return (
    <div>
      {value}
    </div>    
  );
};


function Parent() {

  let value = null;
  let setValue = null;
  
  const onChildMount = (dataFromChild) => {
    value = dataFromChild[0];
    setValue = dataFromChild[1];
  };

  // Call setValue to update child without updating parent

  return (
    <div>
      <Child onMount={onChildMount}/>
    </div>    
  );
};