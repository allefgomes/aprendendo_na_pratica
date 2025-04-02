document
  .getElementById('resumoForm')
  .addEventListener('submit', function (event) {
    event.preventDefault();
    const referencia = document.getElementById('referencia').value;
    const resumo = document.getElementById('resumo').value;
    const nome_usuario = document.getElementById('nome_usuario').value;

    const listItem = document.createElement('li');
    const title = document.createElement('h3');
    title.textContent = referencia;
    const description = document.createElement('p');
    description.textContent = resumo;
    const user = document.createElement('p');
    user.textContent = `Escrito por: ${nome_usuario}`;

    listItem.appendChild(user);
    listItem.appendChild(title);
    listItem.appendChild(description);

    document.getElementById('resumos').appendChild(listItem);

    document.getElementById('referencia').value = '';
    document.getElementById('resumo').value = '';
    document.getElementById('nome_usuario').value = '';
  }
  );

document
  .getElementById('cancelar')
  .addEventListener('click', function (event) {
    document.getElementById('referencia').value = '';
    document.getElementById('resumo').value = '';
  })