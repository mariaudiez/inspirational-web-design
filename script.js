const articles = [
  {
    title: "La materia como lenguaje",
    subtitle: "Notas sobre procesos escultóricos contemporáneos",
    author: "María López",
    text: `
      <p>La materia deja de ser un simple soporte para convertirse en un lenguaje en sí mismo.</p>
      <p>Los procesos escultóricos contemporáneos entienden el material como un archivo de gestos.</p>
      <p>El error, la repetición y la fragilidad forman parte del discurso visual.</p>
      <p>El objeto final es solo una de las posibles materializaciones del proceso.</p>
    `,
  },
  {
    title: "Archivo y memoria",
    subtitle: "Prácticas de conservación inestables",
    author: "Lucía Martín",
    text: `
      <p>El archivo ya no es un espacio cerrado ni definitivo.</p>
      <p>Las obras funcionan como registros temporales de una acción.</p>
      <p>La memoria se construye a través de capas, fragmentos y ausencias.</p>
    `,
  },
  {
    title: "Archivo y memoria",
    subtitle: "Prácticas de conservación inestables",
    author: "Lucía Martín",
    text: `
      <p>El archivo ya no es un espacio cerrado ni definitivo.</p>
      <p>Las obras funcionan como registros temporales de una acción.</p>
      <p>La memoria se construye a través de capas, fragmentos y ausencias.</p>
    `,
  },
  {
    title: "Archivo y memoria",
    subtitle: "Prácticas de conservación inestables",
    author: "Lucía Martín",
    text: `
      <p>El archivo ya no es un espacio cerrado ni definitivo.</p>
      <p>Las obras funcionan como registros temporales de una acción.</p>
      <p>La memoria se construye a través de capas, fragmentos y ausencias.</p>
    `,
  },
  {
    title: "Archivo y memoria",
    subtitle: "Prácticas de conservación inestables",
    author: "Lucía Martín",
    text: `
      <p>El archivo ya no es un espacio cerrado ni definitivo.</p>
      <p>Las obras funcionan como registros temporales de una acción.</p>
      <p>La memoria se construye a través de capas, fragmentos y ausencias.</p>
    `,
  },
  {
    title: "Archivo y memoria",
    subtitle: "Prácticas de conservación inestables",
    author: "Lucía Martín",
    text: `
      <p>El archivo ya no es un espacio cerrado ni definitivo.</p>
      <p>Las obras funcionan como registros temporales de una acción.</p>
      <p>La memoria se construye a través de capas, fragmentos y ausencias.</p>
    `,
  },
  {
    title: "Archivo y memoria",
    subtitle: "Prácticas de conservación inestables",
    author: "Lucía Martín",
    text: `
      <p>El archivo ya no es un espacio cerrado ni definitivo.</p>
      <p>Las obras funcionan como registros temporales de una acción.</p>
      <p>La memoria se construye a través de capas, fragmentos y ausencias.</p>
    `,
  },
  {
    title: "Archivo y memoria",
    subtitle: "Prácticas de conservación inestables",
    author: "Lucía Martín",
    text: `
      <p>El archivo ya no es un espacio cerrado ni definitivo.</p>
      <p>Las obras funcionan como registros temporales de una acción.</p>
      <p>La memoria se construye a través de capas, fragmentos y ausencias.</p>
    `,
  },
  {
    title: "Archivo y memoria",
    subtitle: "Prácticas de conservación inestables",
    author: "Lucía Martín",
    text: `
      <p>El archivo ya no es un espacio cerrado ni definitivo.</p>
      <p>Las obras funcionan como registros temporales de una acción.</p>
      <p>La memoria se construye a través de capas, fragmentos y ausencias.</p>
    `,
  },
  {
    title: "Archivo y memoria",
    subtitle: "Prácticas de conservación inestables",
    author: "Lucía Martín",
    text: `
      <p>El archivo ya no es un espacio cerrado ni definitivo.</p>
      <p>Las obras funcionan como registros temporales de una acción.</p>
      <p>La memoria se construye a través de capas, fragmentos y ausencias.</p>
    `,
  },
  {
    title: "La materia como lenguaje",
    subtitle: "Notas sobre procesos escultóricos contemporáneos",
    author: "María López",
    text: `
      <p>La materia deja de ser un simple soporte para convertirse en un lenguaje en sí mismo.</p>
      <p>Los procesos escultóricos contemporáneos entienden el material como un archivo de gestos.</p>
      <p>El error, la repetición y la fragilidad forman parte del discurso visual.</p>
      <p>El objeto final es solo una de las posibles materializaciones del proceso.</p>
    `,
  },
  {
    title: "La materia como lenguaje",
    subtitle: "Notas sobre procesos escultóricos contemporáneos",
    author: "María López",
    text: `
      <p>La materia deja de ser un simple soporte para convertirse en un lenguaje en sí mismo.</p>
      <p>Los procesos escultóricos contemporáneos entienden el material como un archivo de gestos.</p>
      <p>El error, la repetición y la fragilidad forman parte del discurso visual.</p>
      <p>El objeto final es solo una de las posibles materializaciones del proceso.</p>
    `,
  },
];

const grid = document.getElementById("grid");

/* Crear tarjetas */
articles.forEach((article, index) => {
  const card = document.createElement("article");
  card.className = "card";

  card.innerHTML = `
    <img src="https://picsum.photos/400/${280 + index * 10}?random=${
    index + 1
  }">
    <h4>${article.title}</h4>
  `;

  card.addEventListener("click", () => {
    document.getElementById("modal").classList.add("active");
    document.getElementById("modal-title").textContent = article.title;
    document.getElementById("modal-subtitle").textContent = article.subtitle;
    document.getElementById("modal-text").innerHTML = article.text;
    document.getElementById("modal-author").textContent = article.author;
  });

  grid.appendChild(card);
});

/* Cerrar modal */
const modal = document.getElementById("modal");
const closeBtn = document.querySelector(".close");

// con botón
closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});

// clicando fondo
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
});
