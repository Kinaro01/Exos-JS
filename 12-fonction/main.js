function calculerTTC(prixHT, taux) {
    prix = prixHT + (taux *100)
    console.log(prix)
}

calculerTTC(100, 0.2)