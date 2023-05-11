import React from 'react';
import styledAnimals from './Animals.module.css'

export default class Animals extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    const showAnimals = this.props.animals.map(({ name, image, specie }) => (

      <div className={styledAnimals.containerAnimals} key={name}>
        <h5>{name}</h5>
        <img src={image} alt={name} width={'300px'} />
        <span>{specie}</span>
      </div>

    ));

    return (

      <div className={styledAnimals.container} >
        {showAnimals}
      </div>

    )

  };
};
