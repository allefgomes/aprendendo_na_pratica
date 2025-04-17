document.addEventListener('DOMContentLoaded', function() {
    gerarNumeroRandomico();
});

document
  .getElementById('numeroForm')
  .addEventListener('submit', function(event) {
    event.preventDefault();
    const numero = document.getElementById('numero').value;

    const listItem = document.createElement('li');
    const title = document.createElement('h3');
    title.textContent = numero;
    
    listItem.appendChild(title);
    
    document.getElementById('numeros').appendChild(listItem);

    document.getElementById('numero').value = '';
  }
);

function gerarNumeroRandomico () {
  const numero = Math.floor(Math.random() * 100);
  const listItem = document.createElement('li');
  const title = document.createElement('h3');
  title.textContent = numero;
  
  // listItem.appendChild(title);
  
  // document.getElementById('numeros').appendChild(listItem);
  console.log(numero)
}

