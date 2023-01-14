function addNumbers() {
  // Récupération des valeurs des champs de formulaire source
  let MorningWorked = document.getElementById("MorningWorked").value;
  let AfternoonWorked = document.getElementById("AfternoonWorked").value;
  let Wholedays = document.getElementById("Wholedays").value;
  let num4 = document.getElementById("4eme").value;
  let num5 = document.getElementById("5eme").value;

  // Conversion des valeurs en nombres
  MorningWorked = parseFloat(MorningWorked);
  AfternoonWorked = parseFloat(AfternoonWorked);
  Wholedays = parseFloat(Wholedays);

  // Addition des nombres
  let result = MorningWorked + AfternoonWorked + Wholedays;

  // Mise à jour de la valeur du champ de formulaire cible
  document.querySelector("#result").value = result;
}
// Ajout d'un listener sur le bouton pour lancer la fonction
document.querySelector("#button").addEventListener("click", addNumbers);

let popup = document.querySelector("#popup");
let popupBtn = document.querySelector("#popup-btn");
let saveBtn = document.querySelector("#save-btn");
let cancelBtn = document.querySelector("#cancel-btn");
let cancelInfoBtn = document.querySelector("#cancel-info-btn");
let password = "mdp";
let validPassword = "secret";
let mdpdisable = document.querySelector("#mdpdisable");
let infoForm = document.querySelector("#TauxHorraire");
let hidden = document.querySelector("#info-form")

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
  let TauxHor = infoForm.value;
  // Fermeture de la pop-up
  popup.style.display = "none";

  // Mise à jour des calculs sur la page initiale en utilisant la variable storedInfo
  console.log(TauxHor);

  let formData  = { TauxHor : TauxHor};
  localStorage.setItem("formData", JSON.stringify(formData));

});

let storedData = JSON.parse(localStorage.getItem("formData"));
console.log(storedData)

// Ajout d'un listener sur le bouton pour annuler
cancelBtn.addEventListener("click", function () {
  // Fermeture de la pop-up
  popup.style.display = "none";
});
