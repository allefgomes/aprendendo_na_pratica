document
  .getElementById('resumoForm')
  .addEventListener('submit', function(event) {
    event.preventDefault();
    const referencia = document.getElementById('referencia').value;
    const resumo = document.getElementById('resumo').value;

    const listItem = document.createElement('li');
    const title = document.createElement('h3');
    title.textContent = referencia;
    const description = document.createElement('p');
    description.textContent = resumo;

    listItem.appendChild(title);
    listItem.appendChild(description);

    // document.getElementById('Resumos').appendChild(listItem);

    document.getElementById('referencia').value = '';
    document.getElementById('resumo').value = '';
  }
);
