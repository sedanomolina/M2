import Card from './Card';

export default function Cards({ characters }) {

   const showCard = characters.map(character => (
      <Card
         key={character.id}
         name={character.name}
         status={character.status}
         species={character.species}
         gender={character.gender}
         origin={character.origin.name}
         image={character.image}
      />
   ))

   return <div>{showCard}</div>;
}
