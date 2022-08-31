//break e continue

const scores = [50, 25, 0, 30, 100, 20, 10];

for (let i = 0; i < scores.length; i++) {
  if (scores[i] === 0) {
    continue;
  }
  console.log(`A sua Pontuação: ${scores[i]}`);

  if (scores[i] === 100) {
    console.log(`Parabéns, você conseguiu a pontuação máxima`);

    break;
  }
}
