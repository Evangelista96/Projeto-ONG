function validarFormulario(form) {
  const inputs = form.querySelectorAll("input");
  let valido = true;

  inputs.forEach(input => {
    if (!input.checkValidity()) {
      input.style.border = "2px solid red";
      valido = false;
    } else {
      input.style.border = "2px solid green";
    }
  });

  return valido;
}

document.querySelectorAll("form").forEach(form => {
  form.addEventListener("submit", event => {
    event.preventDefault();
    if (validarFormulario(form)) {
      alert("Formulário válido! Enviando dados...");
      enviarParaAPI(form);
    } else {
      alert("Por favor, preencha todos os campos corretamente.");
    }
  });
});