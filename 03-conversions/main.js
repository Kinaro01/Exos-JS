const saisie = '7';

let quantite = Number(saisie)

if (Number.isInteger(quantite) && quantite > 0) {
    console.log(quantite * 2)
} else {
    console.log("Quantité invalide")
}