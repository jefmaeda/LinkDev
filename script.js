function toggleMode() {
  const html = document.documentElement

  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }

  const img = document.querySelector("#avatar img")

  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar o imagem light
    img.setAttribute("src", "./assets/foto-instagram.jpg")
    img.setAttribute("alt", "foto preta e branca do jeferson tamono")
  } else {
    //se tiver sem light mode, adicionar o imagem normal
    img.setAttribute("src", "https://github.com/jefmaeda.png")
    img.setAttribute("alt", "Foto do Jeferson Tamono")
  }
}
