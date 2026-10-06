const prix = 12.345;

let prixArrondi = new  Intl.NumberFormat('fr-FR', {
    style: "currency",
    currency: "EUR"
}).format(prix);

console.log(prixArrondi)
