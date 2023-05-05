import React from "react";
import dataJSON from '../../data.json'; 

const Logement = () => {
  const pathname = window.location.pathname;
  const logementId = pathname.split('/logement/')[1];
  const logement = dataJSON.find((logement) => logement.id === logementId);

  
  return (
    <div>
      <h2>{logement.title}</h2>
      <p>{logement.description}</p>
      {/* Affichez les autres détails du logement */}
    </div>
  );
};

export default Logement;