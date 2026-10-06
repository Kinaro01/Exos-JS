const produits = [{ nom: 'A', stock: 2 }, { nom: 'B', stock: 0 }, { nom: 'C', stock: 4 }];

const produitsCopie = [...produits]

const produitFiltre = produitsCopie.filter(produits => produits.stock > 0).map(produits => produits.nom)

console.log(produitFiltre)
