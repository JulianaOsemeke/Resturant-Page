const menu = () => {
  
  const container = document.createElement("div");
  container.className = 'menuNav'

  container.classList.add('hide')

  const paragraph = document.createElement("p");
  paragraph.innerHTML = "Menu"

  
  // const imageDiv = document.createElement
  // imageDiv.className = "imageList"
  
  const divimage = new Image(200, 200); 
  divimage.setAttribute('src', './Assets/BangaSoup.jpeg')
 
  const divimage2 = new Image(200, 200); 
  divimage2.setAttribute('src', './Assets/Beanpudding.jpeg')
  
  
  const divimage3= new Image(200, 200); 
  divimage3.setAttribute('src', './Assets/Ewariro.jpeg')

  const divimage4 = new Image(200, 200); 
  divimage4.setAttribute('src', './Assets/jollofrice.jpeg')

  const divimage5 = new Image(200, 200); 
  divimage5.setAttribute('src', './Assets/riceandstew.jpeg')

  const divimage6 = new Image(200, 200); 
  divimage6.setAttribute('src', './Assets/Yam.jpeg')


  const menucon = document.createElement("div")
  menucon.className = "menuList"
  menucon.innerHTML = `
  <div class = "house">
  <div></div>
  <p> Banga Soup </p>
  <p> 500naira </p>
  <br>
  <p> BeanPudding</p>
  <p> 500naira </p>
  <br>
  <p> Beans</p>
  <p> 500naira </p>
  <br>
  <p> Jollof Rice </p>
  <p> 500naira </p>
  <br>
  <p> White rice </p>
  <p> 500naira </p>
  <br>
  <p> Yam </p>
  <p> 500naira </p>
  <br>
  </house>
  `

  
  



  container.appendChild(paragraph)
  container.appendChild(divimage)
  container.appendChild(divimage2)
  container.appendChild(divimage3)
  container.appendChild(divimage4)
  container.appendChild(divimage5)
  container.appendChild(divimage6)
  // container.appendChild(imageList)
  container.appendChild(menucon)
  

  // container.appendChild(menucon)
  // container.appendChild(menucon1)
  // container.appendChild(menuDiv2)
  // container.appendChild(menuDiv3)
  // container.appendChild(menuDiv4)
  
  

  

  return container
}

export default menu