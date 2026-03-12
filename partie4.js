function toInt(x, defaut = 0) {
  return Number.isInteger(x) ? x : defaut;
}

console.log(toInt(5));      
console.log(toInt(5.2, 1)); 
console.log(toInt("a", 0)); 

const config = { db: { host: "localhost", port: 5432 } };
const port = config?.db?.port ?? 3306; 
console.log("Port:", port);

function ajouterProduit(liste, p) {
  if (!p || typeof p.nom !== "string" || p.nom.trim() === "") {
    throw new Error("Produit invalide: nom requis");
  }
  if (typeof p.prix !== "number" || p.prix < 0) {
    throw new Error("Produit invalide: prix >= 0");
  }
 
  return [...liste, { ...p }];
}

const produits = [];
const nouvelleListe = ajouterProduit(produits, { nom: "Stylo", prix: 1.2 });
console.log(produits === nouvelleListe); 