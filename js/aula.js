function EstaIndividado(receita, gastos) {
  if (receita < gastos) {
    return "Está negativo(a) ! ";
  } else {
    return "Está positivo(a) !";
  }
}

const Kauã = EstaIndividado(2100, 5000);
const Mileny = EstaIndividado(5000, 2000);

console.log(Kauã);
console.log(Mileny);
