// Attendre que la page soit totalement chargée
window.addEventListener("DOMContentLoaded", () => {
  // Effet d’apparition sur la section .bio
  const bio = document.querySelector(".bio");
  const infos = document.querySelector(".infos");

  bio.style.opacity = "0";
  infos.style.opacity = "0";
  bio.style.transform = "translateY(20px)";
  infos.style.transform = "translateY(20px)";

  setTimeout(() => {
    bio.style.transition = "all 0.8s ease";
    infos.style.transition = "all 0.8s ease";
    bio.style.opacity = "1";
    infos.style.opacity = "1";
    bio.style.transform = "translateY(0)";
    infos.style.transform = "translateY(0)";
  }, 300);
});
