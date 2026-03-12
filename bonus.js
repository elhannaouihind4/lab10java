try {
  
} catch (e) {
  console.log(e.name, e.message)
} finally {
  
}

throw new Error("message utile")

const ok = Array.isArray(a)
const n = typeof x === "number" && Number.isFinite(x)
const s = typeof str === "string" && str.trim().length > 0
const v = obj?.chemin?.profondeur ?? valeurParDefaut