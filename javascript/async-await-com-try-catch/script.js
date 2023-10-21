async function getRepos() {
  try {
    const response = await fetch('https://api.github.com/users/jaimeneeves/repos');

    if(!response.ok) {
      throw new Error(`Erro Http: ${response.status}`)
    }

    const repos = await response.json();
    
    let HTMLList = '';
    repos.forEach(repo => {
      HTMLList += `<li class="list-group-item">${repo.name}</li>`;
    });

    document.querySelector('.list-group').innerHTML = HTMLList;

  } catch (error) {
    document.body.textContent = "Erro ao consular a API do GitHub"
  }
}

// getRepos();