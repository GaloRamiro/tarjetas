function recuperarTexto(idCompontente) {
  let componente = document.getElementById(idCompontente);
  let valor = componente.value;
  return valor;
}

function recuperarEntero(idcomponten) {
  let valorTexto = recuperarTexto(idcomponten);
  let valorEntero = parseInt(valorTexto);
  return valorEntero;
}
