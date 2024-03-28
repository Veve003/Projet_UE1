import axios from "axios";
import React, { useState } from "react";
import { GenerateApiKey } from "../../../../index";

let Apikey = GenerateApiKey();
//let id_utilisateur = document.getElementById("id-utilisateur");

function afficheUtilisateur() {
  const [utilisateur, setUtilisateur] = useState([]);
  const url = `http://localhost:5000/utilisateurs/${idUser}`;
  const options = {
    headers: {
      Authorization: `Beaer ${Apikey}`,
    },
  };

  const ShowUsers = async () => {
    try {
      ç;
      const response = await axios.get(url, options);
      setUtilisateur(response.data.results, {});
      console.log(response.data);
    } catch (err) {
      console.error("Erreu lors de l'affichage des données");
    }
  };
  return (
    (<div id="id-utilisateur">{utilisateur.idUser}</div>),
    (<button onClick={ShowUsers}></button>)
  );
}
export default afficheUtilisateur;
