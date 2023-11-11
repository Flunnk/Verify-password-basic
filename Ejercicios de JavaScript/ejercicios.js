window.onload = function() {
  const btnCalcular = document.getElementById("btnCalcular");
  btnCalcular.addEventListener("click", contarParesImpares);

  function contarParesImpares() {
      const num1 = document.getElementById("num1").value;
      const num2 = document.getElementById("num2").value;

      let contador = 0;

      for (let i = num1; i <= num2; i++) {
          if (i % 2 !== 0) {
              contador++;
          }
      }

      document.getElementById("resultado")
        .innerHTML = `Número impares: ${contador}`;
  }
}