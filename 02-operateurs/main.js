const prix = 60;
const reduction = 20;
// Complétez ici.

const PrixReduc = prix - (prix * reduction/100)

if (PrixReduc < 50) {
    condition = true
 } else {
    condition = false
 }

console.log(PrixReduc, condition)