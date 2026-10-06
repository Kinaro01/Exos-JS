const statut = 'expédie';

switch (statut) {
    case 'expédie' :
        console.log("En livraison")
        break;
    case 'attente' :
        console.log("Nouveau")
        break;
    case 'livre' :
        console.log("Livré")
        break;
    default:
        console.log("En attente")
}