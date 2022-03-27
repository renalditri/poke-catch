import React, { useState } from 'react';
import styled from '@emotion/styled';
import propTypes from 'prop-types';
import { Card, Col, Row, Modal, Button } from 'react-bootstrap';

export default function ModalCatch(props) {
  const { isSuccess = false, show = false, pokemon, handleClose } = props;
  console.log('2. startmodal', isSuccess, show, pokemon, handleClose)
  
  if (isSuccess) {
    return (
      <Modal show={show} centered onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>The pokemon is catched!</Modal.Title>
        </Modal.Header>
        <Modal.Body>You catched {pokemon.name}</Modal.Body>
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