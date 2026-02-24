function login(cpf, nascimento) {
  const prof = professores.find(p => p.cpf === cpf && p.nascimento === nascimento);
  if (prof) {
    alert(`Bem-vindo, ${prof.nome}!`);
    // Redireciona para dashboard
    window.location.href = "dashboard.html";
    return true;
  } else {
    alert("CPF ou data de nascimento incorretos!");
    return false;
  }
}
