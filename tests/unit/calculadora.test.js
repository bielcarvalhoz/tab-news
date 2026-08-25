const calculadora = require("../../models/calculadora");

test("somar 5 + 5 deve retornar 10", () => {
  expect(calculadora.somar(5, 5)).toBe(10);
});

test("multiplicar 5 * 5 deve retornar 25", () => {
  const resultado = calculadora.multiplicar(5, 5);
  expect(resultado).toBe(25);
});

test("string 'banana' + 100 deve retornar erro", () => {
  const resultado = calculadora.somar("banana", 100);
  expect(resultado).toBe("Erro");
});
