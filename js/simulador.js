
// Função para salvar progresso no localStorage
function salvarProgresso(materia, acertos) {
  const progresso = JSON.parse(localStorage.getItem('progresso')) || {};
  progresso[materia] = acertos;
  localStorage.setItem('progresso', JSON.stringify(progresso));
}

// Função para recuperar progresso do localStorage
function recuperarProgresso(materia) {
  const progresso = JSON.parse(localStorage.getItem('progresso')) || {};
  return progresso[materia] || 0;
}

// Função para atualizar o progresso no final de cada simulado
function atualizarProgresso(materia) {
  const acertos = obterAcertos(materia); // Deve ser implementado para contar os acertos no simulado
  salvarProgresso(materia, acertos);
  alert(`Progresso salvo! Você acertou ${acertos} questões.`);
}
