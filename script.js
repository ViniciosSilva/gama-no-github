function validar() {
  var nome = document.getElementById("nome");
  var cpf = document.getElementById("cpf");
  var endereco = document.getElementById("endereco");
  var numero = document.getElementById("numero");
  var cel = document.getElementById("cel");



  if (nome.value == "") {
    alert("Nome não informado");
    nome.focus();
    return;
  }

  if (cpf.value.length < 11) {
    alert("CPF não informado");
    cpf.focus();
    return;
  }


  if (endereco.value == "") {
    alert("Endereço não informado");
    endereco.focus();
    return;
  }

  if (numero.value == "") {
    alert("Número não informado");
    numero.focus();
    return;
  }

  if (cel.value == "") {
    alert("Celular não informado");
    cel.focus();
    return;
  }
  alert("Formulário enviado!");

  formulario.submit();
}






