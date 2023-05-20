document.getElementById("alquilerForm").addEventListener("submit", function(event) {
  event.preventDefault();
  calcularAlquiler();
});

function calcularAlquiler() {
  let iclInicial = parseFloat(document.getElementById("iclInicial").value);
  let iclFinal = parseFloat(document.getElementById("iclFinal").value);
  var valorInicial = parseFloat(document.getElementById("valorInicial").value);

  let aumento = (iclFinal * valorInicial) / iclInicial;
  let aumentoTotal = aumento - valorInicial                            
  let porcentajeAumento = ((iclFinal / iclInicial) - 1) * 100;
  let nuevoValor = (iclFinal * valorInicial) / iclInicial;

  document.getElementById("aumentoTotal").textContent = aumentoTotal.toFixed(2);
  document.getElementById("porcentajeAumento").textContent = porcentajeAumento.toFixed(2);
  document.getElementById("nuevoValor").textContent = nuevoValor.toFixed(2);

  document.getElementById("resultado").classList.remove("hidden");
}