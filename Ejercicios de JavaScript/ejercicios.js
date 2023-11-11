function verificarContraseña() {
  const pass = document.getElementById("pass").value;

  if (pass.length < 8) {
    document.getElementById('resultado-long')
    .innerHTML = "❌Tu contraseña debe ser de al menos 8 caracteres";
  } else {
    document.getElementById('resultado-long')
    .innerHTML = "✅Tu contraseña tiene la longitud adecuada";
  }

  if (!/[A-Z]/.test(pass)) {
    document.getElementById('resultado-mayus')
    .innerHTML = "❌Tu contraseña debe tener al menos una mayúscula";
  } else {
    document.getElementById('resultado-mayus')
    .innerHTML = "✅Tu contraseña tiene al menos una mayúscula";
  }

  if (!/[a-z]/.test(pass)) {
    document.getElementById('resultado-min')
    .innerHTML = "❌Tu contraseña debe tener al menos una minúscula";
  } else {
    document.getElementById('resultado-min')
    .innerHTML = "✅Tu contraseña tiene al menos una minúscula";
  }

  if (!/[0-9]/.test(pass)) {
    document.getElementById('resultado-num')
    .innerHTML = "❌Tu contraseña debe tener al menos un número";
  } else {
    document.getElementById('resultado-num')
    .innerHTML = "✅Tu contraseña tiene al menos un número";
  }

}