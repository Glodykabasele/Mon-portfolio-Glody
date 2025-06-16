// Affiche une alerte lorsqu’un utilisateur clique sur une compétence
function afficherMessage(competence) {
  alert("Tu as cliqué sur " + competence + " !");
}

// Affiche une animation simple lors du chargement de page
window.addEventListener("load", () => {
  document.body.style.opacity = 1;
});
