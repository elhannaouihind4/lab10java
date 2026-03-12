console.log("Début");
try {
  
  JSON.parse("{mauvais json}");
  console.log("Cette ligne ne s'affichera pas");
} catch (e) {
  console.log("Erreur attrapée:", e.name, "-", e.message);
}
console.log("Suite du programme");

let ressourceOuverte = false;
try {
  ressourceOuverte = true;
  console.log("Ressource ouverte");
  throw new Error("Oups!");
} catch (e) {
  console.warn("On gère:", e.message);
} finally {
  ressourceOuverte = false; 
  console.log("Ressource refermée?", !ressourceOuverte);
}

