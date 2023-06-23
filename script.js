function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagme light
    img.setAttribute("src", "./assets/avatar-erick.png")
  } else {
    //se tiver sem light node, manter a imagem normal
    img.setAttribute("src", "./assets/avatar-escuro.png")
  }
}
