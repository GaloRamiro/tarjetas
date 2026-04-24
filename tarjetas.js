function crearTarjetas() {
  let capturarDesde = document.getElementById("txtDesde");
  let validarDesde = capturarDesde.value;
  let enteroDesde = parseInt(validarDesde);

  let capturarHasta = document.getElementById("txtHasta");
  let validarHasta = capturarHasta.value;
  let enteroHasta = parseInt(validarHasta);

  let contenido = "";
  let divTarjetas = document.getElementById("divTarjetas");
  for (let i = enteroDesde; i <= enteroHasta; i++) {
    contenido = contenido + "<div class='item'>" + i + "</div>";
    
  }
  divTarjetas.innerHTML = contenido;
}

