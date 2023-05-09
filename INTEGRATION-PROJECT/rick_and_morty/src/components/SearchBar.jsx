import styled from "styled-components";
export default function SearchBar({onSearch}) {
   return (
      <DivSearch>
         <Input placeholder="Enter id" type='search' />
         <Button onClick={onSearch}>Search</Button>
      </DivSearch>
   );
};

const DivSearch = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 1em;
border: solid 3px green;
gap: 1em;
`;

const Input = styled.input`
   text-align: center;
   padding: .3em;
`;

const Button = styled.button`
width: fit-content;
padding: .5em;
cursor: pointer;
background-color: #5ddf4c;
border: none;
border-radius: .5em;
color: #5e5316;
`;