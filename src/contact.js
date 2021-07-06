const contact = () => {
  const container = document.createElement("div");
  container.className = 'contactNav'
  
  container.classList.add('hide')
  
  const paragraph = document.createElement("p");
  paragraph.innerHTML = "Contact"

  container.appendChild(paragraph)

  return container
}

export default contact