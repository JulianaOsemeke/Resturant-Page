const menu = () => {
  const container = document.createElement("div");
  container.className = 'menuNav'

  container.classList.add('hide')

  const paragraph = document.createElement("p");
  paragraph.innerHTML = "Menu"

  container.appendChild(paragraph)

  return container
}

export default menu