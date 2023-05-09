import styled from 'styled-components';

export default function Card(props) {
   return (
      <DivCard>
         <button onClick={props.onClose}>X</button>
         <Title>{props.name}</Title>
         <img src={props.image} alt={props.name} />
         <ul>
         <Details>{props.status}</Details>
         <Details>{props.species}</Details>
         <Details>{props.gender}</Details>
         <Details>{props.origin.name}</Details>
         </ul>
      </DivCard>
   );
}

const DivCard = styled.div`
display: flex;
flex-direction: column;
/* margin: auto; */
background-color: #5a555544;
width: 200px;
/* gap: 3px; */
`
const Title = styled.h3`
font-weight: 400;
`
const Details = styled.li`
margin: auto;

`