import React, { useEffect, useState } from "react";

// eslint-disable-next-line no-unused-vars
import Animals from "../Animals/Animals";
// eslint-disable-next-line no-unused-vars
import Species from "../Species/Species";
import styledZoo from "./Zoo.module.css";

export default function Zoo() {
  /* Escribe acá tu código */

  const [zoo, setZoo] = React.useState({
    zooName: '',
    animals: [],
    species: [],
    allAnimals: []
  });

  const handleInputChange = event => setZoo({ ...zoo, zooName: event.target.value });

  // Exercise 2:
  React.useEffect(() => {
    fetch('http://localhost:3001/zoo')
      .then((res) => res.json())
      .then((data) =>
        setZoo({
          ...zoo,
          animals: data.animals,
          species: data.species,
          allAnimals: data.animals,
        })
      )
      .catch((error) => console.log(error));
  }, []);


  const handleSpecies = event => {
    fetch('http://localhost:3001/zoo')
      .then((res) => res.json())
      .then((data) =>
        setZoo({
          ...zoo,
          animals: data.animals.filter(animal => animal.specie === event.target.value),
          species: data.species,
          allAnimals: data.animals,
        })
      )
      .catch((error) => console.log(error));

  };
  const handleAllSpecies = () => {
    fetch('http://localhost:3001/zoo')
      .then((res) => res.json())
      .then((data) =>
        setZoo({
          ...zoo,
          animals: data.animals,
          species: data.species,
          allAnimals: data.animals,
        })
      )
      .catch((error) => console.log(error));
  }

  return (
    <div className={styledZoo.divContentTitle }>

        <label htmlFor="input">Zoo Name: </label>
        <input onChange={handleInputChange} value={zoo.zooName} id="input" type="text" />
        <h1 className={styledZoo.title} >{zoo.zooName}</h1>

      <Species 
        species={zoo.species}
        handleSpecies={handleSpecies}
        handleAllSpecies={handleAllSpecies}
      />

      <Animals
        animals={zoo.animals}
      />
    </div>
  );
}
