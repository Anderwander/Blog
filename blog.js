function createPostEvent(event) {
  event.preventDefault();
  let titulo = document.getElementById("titulo").value.trim();
  let contenido = document.getElementById("contenido").value.trim();
  createPost(titulo, contenido);
  document.getElementById("blogForm").reset();
}

function createPost(titulo, contenido) {
  let h3 = document.createElement("h3");
  let p = document.createElement("p");
  let article = document.createElement("article");
  let iconoBorrar = crearIcono("fa-trash", deletePost);
  let iconoEditar = crearIcono("fa-pencil", editPost);
  h3.innerText = titulo;
  p.innerText = contenido;
  article.appendChild(h3);
  article.appendChild(p);
  article.appendChild(iconoEditar);
  article.appendChild(iconoBorrar);
  nuevosBlog.insertBefore(article, nuevosBlog.children[1]);
}

function deletePost(event) {
  let element = event.target;
  let parent = element.parentElement;
  let text = parent.getElementsByTagName("h3")[0].innerText;
  if (confirm("¿deseas borrar este elemento? \n" + text)) {
    parent.remove();
  }
}

function cancelEdit(event, textoTitulo, textoParrafo) {
  let element = event.target;
  let parent = element.parentElement;
  let titulo = document.createElement("h3");
  let parrafo = document.createElement("p");
  titulo.innerText = textoTitulo;
  parrafo.innerText = textoParrafo;
  parent.appendChild(titulo);
  parent.appendChild(parrafo);

  parent.getElementsByTagName("input")[0].remove();
  parent.getElementsByTagName("textArea")[0].remove();
  let iconoEditar = crearIcono("fa-pencil", editPost);
  crearIcono("fa-pencil", editPost);
  parent.appendChild(iconoEditar);
  element.remove();
}

function crearIcono(simbolo, callback) {
  let icono = document.createElement("i");
  icono.classList.add("fa", simbolo);
  icono.addEventListener("click", callback);
  return icono;
}

function editPost(event) {
  let element = event.target;
  let parent = element.parentElement;
  let titulo = parent.getElementsByTagName("h3")[0].innerText;
  let texto = parent.getElementsByTagName("p")[0].innerText;
  let inputTitulo = document.createElement("input");
  let br = document.createElement("br");
  let textArea = document.createElement("textarea");
  let iconoCancelar = crearIcono("fa-close", function (event) {
    cancelEdit(event, titulo, texto);
  });
  element.remove();
  let iconoGuardar = crearIcono("fa-save", savePost);

  inputTitulo.setAttribute("type", "text");
  inputTitulo.value = titulo;
  textArea.value = texto;

  parent.getElementsByTagName("h3")[0].remove();
  parent.getElementsByTagName("p")[0].remove();

  parent.appendChild(inputTitulo);
  parent.appendChild(br);
  parent.appendChild(textArea);
  parent.appendChild(iconoCancelar);
  parent.appendChild(iconoGuardar);
}

function savePost(event, textoTitulo, textoParrafo) {
  let element = event.target;
  let parent = element.parentElement;
  let titulo = document.createElement("h3");
  let parrafo = document.createElement("p");
  titulo.innerText = textoTitulo;
  parrafo.innerText = textoParrafo;
  parent.appendChild(titulo);
  parent.appendChild(parrafo);

  parent.getElementsByTagName("input").value.trim();
  parent.getElementsByTagName("textArea").value.trim();
  let iconoGuardar = crearIcono("fa-save", savePost);
  crearIcono("fa-save", savePost);
  parent.appendChild(iconoGuardar);
}

//evento para submit
let form = document.getElementById("blogForm");
form.addEventListener("submit", createPostEvent);
document.getElementById("blogForm").reset();

createPost("manzana", "manzananananana");
createPost("melocoton", "con chocolate");
createPost("nicaragua", "mi pueblo ");
