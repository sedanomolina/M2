import styled from 'styled-components';
import Card from './Card';

export default function Cards({ characters }) {

   const showCard = characters.map(character => (
      <Card
         key={character.id}
         name={character.name}
         status={character.status}
         species={character.species}
         gender={character.gender}
         origin={character.origin}
         image={character.image}
      />
   ))

   return <SectionCards>{showCard}</SectionCards>;
}

const SectionCards = styled.section`
display: flex;
gap: 2em;
border: solid 3px blue;
padding: 1.5em;
`