const home = () => {
  const container = document.createElement("div");
  container.className = 'homeContainer'
  

  const tagline = document.createElement("h1");
  tagline.innerText = "EXPLORE JAY'S DINER"
  tagline.className = "tag"

  

  container.appendChild(tagline);
  

  return container
}

export default home