function sumar() {
  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;
  const resultado = parseInt(num1) + parseInt(num2);
  document.getElementById("resultado").innerHTML = resultado;
}

function restar() {
  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;
  const resultado = parseInt(num1) - parseInt(num2);
  document.getElementById("resultado").innerHTML = resultado;
}

function multiplicar() {
  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;
  const resultado = parseInt(num1) * parseInt(num2);
  document.getElementById("resultado").innerHTML = resultado;
}

function dividir() {
  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;
  const resultado = parseInt(num1) / parseInt(num2);
  document.getElementById("resultado").innerHTML = resultado;
}