import React, { useState } from "react";
import PokeAPI from '../pokeapi/PokeAPI'
import { Modal, Button, Form } from 'react-bootstrap';

const PokemonCreate = () => {
  const [name, setName] = useState('');
  const [show, setShow] = useState('');
  const [message, setMessage] = useState('');


  const handleSubmit = (async (testObj) => {
    try {
      await PokeAPI.post(`/api/v1/pokemons`, {
        pokemon: { name }
      });

      setShow(false)
    } catch (error) {
      setMessage('Ocorreu algum erro ao cadastrar o pokemon, tente novamente')
    }
    
    setName('')
  });

  return (
    <div>
      <Button onClick={e => setShow(true)} className="btn btn-secondary">+ Pokémon</Button>

      <Modal show={show || false} onHide={e => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Novo Pokémon</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control type="text" placeholder="Escolha o nome para um novo Pokémon" value={name || ''} onChange={e => setName(e.target.value)} />
          <div>{message}</div>
        </Modal.Body>
        <Modal.Footer>
          <form onSubmit={handleSubmit}>
            <Button type="submit">Criar</Button>
          </form>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default PokemonCreate;