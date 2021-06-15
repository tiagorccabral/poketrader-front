import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 500px;
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
`;

export const TraderContainer = styled.div`
  width: 80%;
  height: 500px;
  border: 1px solid black;
  border-radius: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

export const ActionMessageContainer = styled.div`
  width: 60%;
  height: 40px;
  border: 1px solid black;
  border-radius: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
`;

export const ActionMessageText = styled.p`
  font: 30px;
  margin: 0;
  display: block;
  color: ${props => (props.color ? props.color : 'black')};
`;

export const MiddleSeparator = styled.div`
  height: 100%;
  width: 1px;
  background-color: black;
`;

export const TraderForm = styled.div`
  height: 90%;
  width: 50%;
  display: grid;
  justify-content: left;
  margin-left: 10px;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: 60px 1fr;
`;

export const PokemonInputContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: left;
  align-items: center;
`;

export const ActionButtonsContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SubmitButton = styled.div`
  width: 7em;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
  height: 30px;
  cursor: pointer;
  border: 1px solid black;
`;

export const TradeButton = styled.div`
  width: 7em;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
  height: 30px;
  cursor: pointer;
  background-color: green;
  color: white;
  border: 1px solid black;
`;

export const ClearButton = styled.div`
  width: 7em;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
  height: 30px;
  cursor: pointer;
  background-color: #ddd;
  color: black;
  border: 1px solid black;
`;

export const PokemonList = styled.div`
  height: auto;
  display: grid;
  overflow-y: scroll;
  flex-direction: column;
  grid-template-rows: 60px 1fr;
  grid-row-gap: 40px;
  width: 100%;
`;

export const PokemonCard = styled.div`
  width: 40%;
  height: 60px;
  border: 1px solid gray;
  display: flex;
  align-items: center;
  justify-content: left;
  padding: 10px;
`;

export const PokemonCardTitle = styled.span`
  font: 25px;
`;

export const PokemonCardImage = styled.img`
  width: 75px;
  height: 75px;
`;

export const PokemonInput = styled.input`
  margin: 20px 0px;
  height: 30px;
  border: 1px solid darkblue;
  padding: 3px;
`;
