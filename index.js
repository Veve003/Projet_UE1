//------------------***Construction de l'API avec le serveur Express***---------------------\\
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const port = process.env.PORT || 5000;
const app = express();

app.get("/", function (req, res) {
  res.json({ message: "Statistiques des quiz" });
});

app.listen(port, () => {
  console.log("Server Statistic");
});

//------------------***Connexion à la base de données***---------------------\\
const DatabaseConnection = mysql.createConnection({
  database: "test_quizzeo",
  host: "localhost",
  user: "root",
  password: "",
});
DatabaseConnection.connect(function (err) {
  if (err) {
    console.error("Erreur de connexion à la base de données");
  } else {
    console.log("Connexion à la base de données");
  }
});

//------------------***Récupération des données***---------------------\\
app.use(cors());
app.get("/utilisateurs", (req, res) => {
  const sql =
    "SELECT * FROM utilisateurs  WHERE apikey = 'CwwM?7kefP48Sy5J598VOECd=Tqn=e0q' ";
  DatabaseConnection.query(sql, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

//------------------***Autorisation des requêtes***---------------------\\
// app.options("/post", (req, res) => {
//   res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");
//   res.setHeader(
//     "Access-Control-Allows-Methods",
//     "GET, POST, OPTIONS , PUT, PATCH, DELETE"
//   );
// });

//----------------------------------------------------------------------------------------------------------------------

// app.get("/utilisateurs", (req, res) => {)s
//   const sql =
//     "SELECT * FROM statistiques s INNER JOIN  utilisateurs u ON s.id_utilisateur = u.id_utlisateur WHERE score= score";

//   DatabaseConnection.query(sql, (err, results) => {
//     if (err) throw err;
//     res.send(results);
//   });
// });
//----------------------------------------
//test
// app.get("/something", function (req, res) {
//   res.json({ message: "give me something please" });
// });

// app.get("/user/2", (req, res) => {
//   const sql = "SELECT * FROM utilisateurs WHERE id_utilisateur = 2";

//   DatabaseConnection.query(sql, (err, results) => {
//     if (err) throw err;
//     res.send(results);
//   });
// });

// //test
// app.get("/something", function (req, res) {
//   res.json({ message: "give me something please" });
// });

//-----------------------------------------------------------------------------------------------------

//------------------***Fonction de génération de la clé***---------------------\\
// let caracteres =
//   "AZERTYUIOPQSDFGHJKLMWXCVBNazertyuiopqsdfghjklmwxcvbn1234567890&+=-*?";
// let longueur = 32;

// function GenerateApiKey() {
//   let cleApi = "";
//   for (let i = 0; i < longueur; i++) {
//     const indexCaractere = Math.floor(Math.random() * caracteres.length);
//     cleApi += caracteres[indexCaractere];
//     //document.getElementById("textkey").value = cleApi;
//   }
//   console.log(cleApi);
//   return cleApi;
// }

// //------------------***Insertion de la clé API dansla base de données***---------------------\\
// app.post("/utilisateurs", (req, res) => {
//   const ApiGenere = GenerateApiKey();
//   const sql = "INSERT INTO clé_api (cle_api_utilisateur) VALUES (?)";

//   DatabaseConnection.query(sql, [ApiGenere], (err) => {
//     if (err) {
//       console.error(
//         "Erreur lors de l'insertion des données de la clé API:",
//         err
//       );
//     } else {
//       console.log("Insertion réussie");
//     }
//   });
// });

// app.get("/utilisateurs/2", (req, res) => {
//   const sql = "SELECT * FROM utilisateurs WHERE id_utilisateur = 2";

//   DatabaseConnection.query(sql, (err, results) => {
//     if (err) {
//       console.error("Erreur lors de la récupération des données des données");
//     } else {
//       results.json();
//       console.log(results);
//     }
//     return;
//   });
// });

// module.exports = {
//   myFunction: GenerateApiKey(),
// };

//------------------***Fonction de génération des clés API***---------------------\\

//app.get("/utilisateurs", (req, res) => {

//document.getElementById("textkey").value = cleApi;

//------------------------------------------------------------------------------------------------------------------------------

// Connexion à la base de données

//Si il y a une erreur lors de la connexion(if) si il n'y en a pas (else)
// if (err) {
//   console.error("Erreur lors de la connexion");
// } else {
//   console.log("Connecté à la base de données");
// }

// let button = document.getElementById("button-api");
// const GenerateApiKey = () => {
//   const cleApi = uuidv4();
//   console.log(cleApi);
// };
// button.addEventListener("click", GerenateApiKey());

//document.getElementById("textkey").value = cleApi;
