function additionSure(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("additionSure: a et b doivent être des nombres");
  }
  return a + b;
}

try {
  console.log(additionSure(2, 3)); 
  console.log(additionSure("2", 3)); 
} catch (e) {
  console.error("Problème:", e.message);
}

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function creerUtilisateur({ id, email }) {
  if (!Number.isInteger(id) || id <= 0) throw new ValidationError("id doit être un entier positif");
  if (typeof email !== "string" || !email.includes("@")) throw new ValidationError("email invalide");
  return { id, email: email.trim() };
}

try {
  creerUtilisateur({ id: 0, email: "a@b.com" });
} catch (e) {
  console.log(e.name, "-", e.message); 
}