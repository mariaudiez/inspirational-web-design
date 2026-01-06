const modal = document.getElementById("modal");
const modalBody = document.getElementById("modal-body");
const closeBtn = document.querySelector(".close");

const articles = {
  article1: `
    <h1>Diseño como lenguaje visual</h1>
    <p>El diseño no es solo estética, es comunicación...</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
  `,
  article2: `
    <h1>Inspiración en lo cotidiano</h1>
    <p>La creatividad nace de observar lo que nos rodea...</p>
  `,
  article3: `
    <h1>El futuro del diseño digital</h1>
    <p>La inteligencia artificial y el diseño generativo...</p>
  `,
};

document.querySelectorAll(".article-card").forEach((card) => {
  card.addEventListener("click", () => {
    const articleId = card.dataset.article;
    modalBody.innerHTML = articles[articleId];
    modal.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
