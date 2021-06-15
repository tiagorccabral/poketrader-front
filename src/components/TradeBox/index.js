import React, { useState } from 'react';
import axios from 'axios'

import { apiEndPoint } from '../../utils/globals'

import {
  Container, TraderContainer, TraderForm, MiddleSeparator, PokemonInput, PokemonInputContainer,
  SubmitButton, PokemonList, PokemonCard, PokemonCardTitle, PokemonCardImage,
  ActionButtonsContainer, TradeButton, ClearButton, ActionMessageContainer, ActionMessageText
} from './styles';

function useInput(defaultValue) {
  const [value, setValue] = useState(defaultValue);
  function onChange(e) {
    setValue(e.target.value);
  }
  return {
    value,
    onChange,
  };
}

function TradeBox() {

  async function fetchPokemonData(trainer, pokemonName) {
    try {
      const data = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      if (trainer === 'firstTrainer') {
        setTrader1Pokemons(trader1Pokemons => [...trader1Pokemons, { id: data.data.id, name: data.data.name, imageUrl: data.data.sprites.front_default }])
      } else {
        setTrader2Pokemons(trader2Pokemons => [...trader2Pokemons, { id: data.data.id, name: data.data.name, imageUrl: data.data.sprites.front_default }])
      }
    } catch (error) {
      setErrorMessage("Pokemon não encontrado!")
    }
  }

  async function makeTradePress() {
    if (trader1Pokemons === [] | trader2Pokemons === []) {
      setErrorMessage("Informar ao menos um pokemon de cada lado!")
      return
    } else {
      try {
        const trainer1 = trader1Pokemons.map(pokemon => `${pokemon.id}`)
        const trainer2 = trader2Pokemons.map(pokemon => `${pokemon.id}`)
        const formData = {
          trader1: { pokemon_ids: trainer1 },
          trader2: { pokemon_ids: trainer2 }
        }
        const response = await axios.post(`${apiEndPoint}/trade/`, formData)
        setSuccessMessage(response.data.message)
      } catch (error) {
        if (error.response) {
          setErrorMessage(error.response.data.message)
        }
      }
    }
  }

  function displayMessage() {
    if (errorMessage) {
      return (
        <ActionMessageText color="red">{errorMessage}</ActionMessageText>
      )
    } else if (successMessage) {
      return <ActionMessageText color="green">{successMessage}</ActionMessageText>
    }
  }

  function clearDataPress() {
    setTrader1Pokemons([])
    setTrader2Pokemons([])
    setErrorMessage(null)
    setSuccessMessage(null)
  }

  const [trader1Pokemons, setTrader1Pokemons] = useState([]);
  const [trader2Pokemons, setTrader2Pokemons] = useState([]);

  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const leftInputProps = useInput();
  const rightInputProps = useInput();

  return (
    <Container>
      <ActionButtonsContainer>
        <TradeButton onClick={() => makeTradePress()}>
          Trocar!
        </TradeButton>
        <ClearButton onClick={() => clearDataPress()}>
          Limpar
        </ClearButton>
      </ActionButtonsContainer>
      <ActionMessageContainer>
        <ActionMessageText>Digite o nome dos pokémons que deseja trocar e aperte no botão "Trocar!"</ActionMessageText>
        {displayMessage()}
      </ActionMessageContainer>
      <TraderContainer>
        <TraderForm>
          <PokemonInputContainer>
            <PokemonInput
              {...leftInputProps}
              placeholder="Nome do pokemon"
            />
            <SubmitButton onClick={() => fetchPokemonData('firstTrainer', leftInputProps.value)}>
              Adicionar
            </SubmitButton>
          </PokemonInputContainer>
          <PokemonList>
            {trader1Pokemons.map((pokemon) => {
              return (
                <PokemonCard key={pokemon.id}>
                  <PokemonCardImage src={pokemon.imageUrl} alt={pokemon.name} />
                  <PokemonCardTitle>{pokemon.name}</PokemonCardTitle>
                </PokemonCard>
              )
            })}
          </PokemonList>
        </TraderForm>
        <MiddleSeparator />
        <TraderForm>
          <PokemonInputContainer>
            <PokemonInput
              {...rightInputProps}
              placeholder="Nome do pokemon"
            />
            <SubmitButton onClick={() => fetchPokemonData('secondTrainer', rightInputProps.value)}>
              Adicionar
            </SubmitButton>
          </PokemonInputContainer>
          <PokemonList>
            {trader2Pokemons.map((pokemon) => {
              return (
                <PokemonCard key={pokemon.id}>
                  <PokemonCardImage src={pokemon.imageUrl} alt={pokemon.name} />
                  <PokemonCardTitle>{pokemon.name}</PokemonCardTitle>
                </PokemonCard>
              )
            })}
          </PokemonList>
        </TraderForm>
      </TraderContainer>
    </Container>
  );
}

export default TradeBox;