document.getElementById("buscador").addEventListener("keyup", filtrarPosts);

function filtrarPosts() {
  let text = document.getElementById("buscador").value;
  let section = document.getElementById("nuevosBlog");
  let titulos = section.querySelectorAll("article>h3");
  titulos = [...titulos];
  let titulosFiltrados = titulos.filter(
    (titulo) => !titulo.innerText.toLowerCase().includes(text)
  );
  titulos.forEach((titulo) => {
    let article = titulo.parentElement;
    article.style.display = "block";
  });

  titulosFiltrados.forEach((titulo) => {
    let article = titulo.parentElement;
    article.style.display = "none";
  });
}
