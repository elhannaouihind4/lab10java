function moyenne(nums) {
  if (!Array.isArray(nums) || nums.length === 0) {
    throw new Error("moyenne: fournir un tableau non vide");
  }
  if (!nums.every(n => typeof n === "number" && Number.isFinite(n))) {
    throw new Error("moyenne: tous les éléments doivent être des nombres");
  }
  const total = nums.reduce((a, n) => a + n, 0);
  return total / nums.length;
}

try {
  console.log(moyenne([10, 12, 8])); 
  console.log(moyenne([10, "x", 8])); 
} catch (e) {
  console.warn(e.message);
}

function getSafe(obj, path, defaut) {
  try {
    return path.split(".").reduce((acc, k) => acc?.[k], obj) ?? defaut;
  } catch {
    return defaut;
  }
}

const data = { user: { profil: { nom: "Lina" } } };
console.log(getSafe(data, "user.profil.nom", "(inconnu)")); 
console.log(getSafe(data, "user.adresse.ville", "(inconnue)")); 

async function withRetryOnce(op) {
  try {
    return await op();
  } catch (e) {
    console.warn("Échec, on réessaie une fois...");
    return op(); 
  }
}

let tentative = 0;
const parfoisRate = () => new Promise((ok, ko) => setTimeout(() => (++tentative % 2 ? ko(new Error("raté")) : ok("réussi")), 100));

withRetryOnce(parfoisRate)
  .then(console.log)
  .catch(e => console.error("Toujours en échec:", e.message));