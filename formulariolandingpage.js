const form = document.getElementById('formulario')

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let nome = document.getElementById('Nome').value;
  let email = document.getElementById('Email').value;
  let data = {
    nome,
    email,
  }
  let convertData = JSON.stringify(data);

  localStorage.setItem('lead', convertData)

  let content = document.getElementById('formulario')

  let carregando = `<p>Carregando...</p>`

  let pronto = `<p>Pronto!</p>`

  content.innerHTML = carregando

  setTimeout(() => {
    content.innerHTML = pronto
  }, 1000)

})

