function registrarAtividade(alunoId, presente, deverFeito) {
  const aluno = alunos.find(a => a.id === alunoId);
  if (!aluno) return;

  // Registrar faltas
  if (!presente) aluno.faltas++;

  // Registrar dever
  if (!deverFeito) {
    aluno.deveresNaoFeitos++;
    if (aluno.deveresNaoFeitos >= 3) {
      alert(`⚠️ Alerta! ${aluno.nome} não fez a atividade mais de 3 vezes!`);
      // Aqui você pode enviar notificação ao responsável
    }
  }

  console.log(aluno);
}
