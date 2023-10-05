document.addEventListener("DOMContentLoaded", function() {
  let progressBarInner = document.querySelector('.progress-bar-inner');
  let progressLabel = document.querySelector('.progress-label');

  function updateProgress() {
    let currentWidth = parseFloat(getComputedStyle(progressBarInner).width);
    let parentWidth = parseFloat(getComputedStyle(progressBarInner.parentElement).width);
    let currentPercentage = (currentWidth / parentWidth) * 100;

    if (currentPercentage < 100) {
      let randomIncrement = Math.random() * 10; // Incremento aleatório entre 0 e 10%
      let newPercentage = currentPercentage + randomIncrement;

      if (newPercentage > 100) {
        newPercentage = 100;
      }

      progressBarInner.style.width = newPercentage + '%';
      progressLabel.textContent = `Carregando... ${Math.round(newPercentage)}%`;

      setTimeout(updateProgress, 500); // Atualiza a barra de progresso a cada 500ms
    } else {
      progressLabel.textContent = 'Carregamento completo!';
    }
  }

  updateProgress();
});