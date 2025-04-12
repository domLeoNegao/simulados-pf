const gabarito = {
  q1: 'C',
  q2: 'C',
  q3: 'C',
  q4: 'C',
  q5: 'C',
  q6: 'C',
  q7: 'C',
  q8: 'E',
  q9: 'E',
  q10: 'C',
  q11: 'C'
};

function verificarRespostas() {
  let acertos = 0;
  let html = "<h2>Resultado:</h2><ul>";
  for (let i = 1; i <= 11; i++) {
    const resposta = document.querySelector(`input[name=q${i}]:checked`);
    if (resposta) {
      if (resposta.value === gabarito[`q${i}`]) {
        acertos++;
        html += `<li>Questão ${i}: <span class='result'>Certa</span></li>`;
      } else {
        html += `<li>Questão ${i}: <span class='wrong'>Errada</span> (gabarito: ${gabarito[`q${i}`]})</li>`;
      }
    } else {
      html += `<li>Questão ${i}: <span class='wrong'>Sem resposta</span> (gabarito: ${gabarito[`q${i}`]})</li>`;
    }
  }
  html += `</ul><p><strong>Total de acertos:</strong> ${acertos} de 11</p>`;
  document.getElementById("resultado").innerHTML = html;
}