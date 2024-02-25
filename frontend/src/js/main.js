// Função principal responsável por buscar os dados na API e retornar um array de objetos com os dados dos produtos, com as devidas tratativas de erros
async function fetchData(keyword) {
  document.getElementById('loader').style.display = 'block';

  if (keyword.length > 0) {
    try {
      const response = await fetch(
        `http://localhost:3333/api/amazon-scraping?keyword=${keyword}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
      return [];
    }
  } else {
    document.getElementById('loader').style.display = 'none';
  }
}

// Função responsável por montar a interface do usuário com os dados retornados da API
function updateUI(data) {
  const resultsDiv = document.getElementById("main__grid");
  resultsDiv.innerHTML = "";

  if (data.length === 0) {
    document.getElementById('loader').style.display = 'none';
    resultsDiv.innerHTML = "<p>Nenhum resultado encontrado</p>";
    return;
  } else {
    document.getElementById('welcome__screen').style.display = 'none';
    document.getElementById('loader').style.display = 'none';

    data.forEach((product) => {
      if (product.title) {
        const productCard = document.createElement("div");
        productCard.classList.add("card");
        productCard.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <h3 title="${product.title}">${product.title}</h3>
        <p>Rating: ${product.rating}</p>
        <p>Reviews: ${product.reviews}</p>
      `;
        resultsDiv.appendChild(productCard);
      }
    });
  }
}

// Event listener responsável por chamar a função fetchData e updateUI quando o botão de busca for clicado, montando a interface do usuário com os dados retornados
document.getElementById("scrape__btn").addEventListener("click", async () => {
  const keyword = document.getElementById("keyword").value;
  const data = await fetchData(keyword);
  updateUI(data);
});

// Simples função para mostrar um toast quando o usuário tentar buscar sem preencher o campo de busca
document.getElementById('scrape__btn').addEventListener('click', function() {
  let keyword = document.getElementById('keyword').value;
  if (keyword.length === 0) {
    let toast = document.getElementById('toast');
    toast.style.visibility = 'visible';
    setTimeout(function() {
      toast.style.visibility = 'hidden';
    }, 3000);
  }
});
