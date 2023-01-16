function addNumbers() {
  // Récupération des valeurs des champs de formulaire source
  let MatinTravaille = document.getElementById("MatinTravaille").value;
  let ApremTravaille = document.getElementById("ApremTravaille").value;
  let ttjournee = document.getElementById("ttjournee").value;
  let JourPresent = document.getElementById("JourPresent").value;
  let NbreRepas = document.getElementById("NbreRepas").value;

  // Conversion des valeurs en nombres
  MatinTravaille = parseFloat(MatinTravaille);
  ApremTravaille = parseFloat(ApremTravaille);
  ttjournee = parseFloat(ttjournee);
  JourPresent = parseFloat(JourPresent);
  NbreRepas = parseFloat(NbreRepas);

  // Addition des nombres
  console.log(NbrHMatin);
  let result =
    MatinTravaille * NbrHMatin +
    ApremTravaille * NbrHAprem +
    JourPresent * NbrHJour;

  // Mise à jour de la valeur du champ de formulaire cible
  document.querySelector("#result").value = result;
}
// Ajout d'un listener sur le bouton pour lancer la fonction
document.querySelector("#button").addEventListener("click", addNumbers);

let password = "mdp";
let validPassword = "secret";
let popup = document.querySelector("#popup");
let popupBtn = document.querySelector("#popup-btn");
let saveBtn = document.querySelector("#save-btn");
let cancelBtn = document.querySelector("#cancel-btn");
let cancelInfoBtn = document.querySelector("#cancel-info-btn");
let mdpdisable = document.querySelector("#mdpdisable");
let hidden = document.querySelector("#info-form");
let TauxH = document.querySelector("#TauxHorraire");

let IndemEntr = document.querySelector("#IndemnEntretien");
let TauxR = document.querySelector("#TauxRepas");
let SlrBaseContr = document.querySelector("#SalaireBaseContrat");
let NbrHMatin = document.querySelector("#NbrHeureMatin");
let NbrHAprem = document.querySelector("#NbrHeureAprem");
let NbrHJour = document.querySelector("#NbrHeurejournee");

// Ajout d'un listener sur le bouton pour ouvrir la pop-up
popupBtn.addEventListener("click", function () {
  popup.style.display = "block";
});

// Ajout d'un listener sur le bouton pour soumettre le mot de passe
submitBtn.addEventListener("click", function () {
  let inputPassword = document.querySelector("#password").value;
  if (inputPassword === password) {
    // Mot de passe correct, affichage du formulaire d'information
    (mdpdisable.style.display = "none"), (hidden.style.display = "block");
  } else {
    alert("Mot de passe incorrect. Veuillez réessayer.");
  }
});

// Ajout d'un listener sur le bouton pour enregistrer les informations

saveBtn.addEventListener("click", function () {
  // Récupération de la valeur saisie dans les champs de saisie

  TauxH = TauxH.value;
  IndemEntr = IndemEntr.value;
  TauxR = TauxR.value;
  SlrBaseContr = SlrBaseContr.value;
  NbrHMatin = NbrHMatin.value;
  NbrHAprem = NbrHAprem.value;
  NbrHJour = NbrHJour.value;

  TauxH = parseFloat(TauxH);
  IndemEntr = parseFloat(IndemEntr);
  TauxR = parseFloat(TauxR);
  SlrBaseContr = parseFloat(SlrBaseContr);
  NbrHMatin = parseFloat(NbrHMatin);
  NbrHAprem = parseFloat(NbrHAprem);
  NbrHJour = parseFloat(NbrHJour);

  // Fermeture de la pop-up
  popup.style.display = "none";

  // Mise à jour des calculs sur la page initiale en utilisant la variable storedInfo
  console.log(TauxH);
  console.log(IndemEntr);
  console.log(TauxR);
  console.log(SlrBaseContr);
  console.log(NbrHMatin);
  console.log(NbrHAprem);
  console.log(NbrHJour);

  let formData = {
    TauxH: TauxH,
    IndemEntr: IndemEntr,
    TauxR: TauxR,
    SlrBaseContr: SlrBaseContr,
    NbrHMatin: NbrHMatin,
    NbrHAprem: NbrHAprem,
    NbrHJour: NbrHJour,
  };

  localStorage.setItem("formData", JSON.stringify(formData));
});

let storedData = JSON.parse(localStorage.getItem("formData"));

  TauxHModif = storedData["TauxH"];
  console.log(storedData)

// Ajout d'un listener sur le bouton pour annuler
cancelBtn.addEventListener("click", function () {
  // Fermeture de la pop-up
  popup.style.display = "none";
});
