function operationLente(reussit = true) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (reussit) resolve("OK");
      else reject(new Error("Opération échouée"));
    }, 300);
  });
}
operationLente(true)
  .then(val => console.log("Succès:", val))
  .catch(err => console.error("Erreur:", err.message));
(async () => {
  try {
    const val = await operationLente(false);
    console.log("Succès:", val);
  } catch (e) {
    console.warn("Attrapé avec await:", e.message);
  }
})();

const p1 = operationLente(true);
const p2 = operationLente(false);

Promise.allSettled([p1, p2]).then(results => {
  console.log("Résultats:", results);
});