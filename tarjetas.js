function crearTarjetas() {
  //let capturarDesde = document.getElementById("txtDesde");
  //let validarDesde = capturarDesde.value;
  //let enteroDesde = parseInt(validarDesde);
  
  let enteroDesde = recuperarEntero("txtDesde");

  //let capturarHasta = document.getElementById("txtHasta");
 // let validarHasta = capturarHasta.value;
  let enteroHasta =  recuperarEntero("txtHasta");

  //let capturarSalto = document.getElementById("txtsalto");
  //let validarSalto = capturarSalto.value;
  let enteroSalto= recuperarEntero("txtsalto");

  if (enteroSalto<=0){
    alert("el salto debe ser mayor a 0");
    return
  }

  let contenido = "";
  let divTarjetas = document.getElementById("divTarjetas");
  for (let i = enteroDesde; i <= enteroHasta; i+= enteroSalto) {
    contenido = contenido + "<div class='item'>" + i + "</div>";
  }
  divTarjetas.innerHTML = contenido;
}
