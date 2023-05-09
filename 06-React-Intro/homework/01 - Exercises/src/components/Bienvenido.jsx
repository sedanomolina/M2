import React from "react";
import Botones from './Botones';

const studentName = "Raul";
const techSkills = ["Html", "Css", "JavaScript", "React", "Redux"];
const alerts = { m1: "Aprobado", m2: "En curso" };

export default function Bienvenido() {
  // el código de tu componente acá

  const showSkills = techSkills.map((skill, index) => <li key={index} >{skill}</li>);
  const alerts = {
    m1: "Precioaste el boton de 'Módulo 1'",
    m2: "Precioaste el boton de 'Módulo 2'"
  };

  return (
    <div>
      <h1>Hi 👋</h1>
      <h3>{studentName}</h3>
      <ul>{showSkills}</ul>
      <Botones alerts={alerts} />
    </div>
  );
};

// Esto lo exportamos para los tests
export { studentName, techSkills, alerts };
