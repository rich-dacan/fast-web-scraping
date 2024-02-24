async function fetchData(keyword) {
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
}

function updateUI(data) {
  const resultsDiv = document.getElementById("main-grid");
  resultsDiv.innerHTML = "";

  data.forEach(product => {
    const productCard = document.createElement("div");
    productCard.classList.add("card");
    productCard.innerHTML = `
      <h3>${product.title}</h3>
      <p>Rating: ${product.rating}</p>
      <p>Reviews: ${product.reviews}</p>
      <img src="${product.image}" alt="${product.title}">
    `;
    resultsDiv.appendChild(productCard);
  });
}

document.getElementById("scrape__btn").addEventListener("click", async () => {
  const keyword = document.getElementById("keyword").value;
  console.log(keyword);
  const data = await fetchData(keyword);
  updateUI(data);
});
