function creerCompteur() {
  let valeur = 0;
  return () => ++valeur;
}

const compteur = creerCompteur();

console.log(compteur(), compteur());