import React, { useState } from 'react';
import styled from '@emotion/styled';
import propTypes from 'prop-types';
import { Card, Col, Row, Modal, Button, InputGroup, FormControl } from 'react-bootstrap';

export default function ModalCatch(props) {
  const { isSuccess = false, show = false, pokemon, handleClose, handleButton } = props;
  const [nickname, setNickname] = useState('');
  console.log('2. startmodal', isSuccess, show, pokemon, handleClose)

  const inputChange = (e) => {
    setNickname(e.target.value);
    console.log(nickname);
  }

  const buttonClick = () => {
    if(nickname == '') {
      alert('You need to give your pokemon a nickname!')
    } else {
      handleButton(nickname);
      alert('Your pokemon is saved!')
      setTimeout(() => {handleClose()}, 1500)
    }
  }

  if (isSuccess) {
    return (
      <Modal show={show} centered onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>The pokemon is catched!</Modal.Title>
        </Modal.Header>
        <Modal.Body>You catched {pokemon.name}! Now you can give it a nickname</Modal.Body>
        <InputGroup className="p-3">
          <FormControl
            placeholder="Pokemon's nickname"
            aria-label="Pokemon's nickname"
            aria-describedby="Pokemon's nickname"
            onChange={(e) => {inputChange(e)}}
          />
          <Button variant="outline-secondary" id="button-addon2" onClick={buttonClick}>
            Confirm
          </Button>
        </InputGroup>
      </Modal>
    )
  } else {
    return (
      <Modal show={show} centered onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>The pokemon escaped!</Modal.Title>
        </Modal.Header>
        <Modal.Body>You failed to catch {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</Modal.Body>
      </Modal>
    )
  }
}