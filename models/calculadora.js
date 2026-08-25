function somar(arg1, arg2) {
  if (typeof arg1 != "number") {
    return "Erro";
  }
  return arg1 + arg2;
}

function multiplicar(arg1, arg2) {
  return arg1 * arg2;
}

exports.somar = somar;
exports.multiplicar = multiplicar;
