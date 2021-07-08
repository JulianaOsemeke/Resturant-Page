const menu = () => {
  const container = document.createElement('div');
  container.className = 'menuNav'
  container.classList.add('hide');
  const paragraph = document.createElement('p');
  paragraph.className = 'menuTitle';
  paragraph.innerHTML = 'Menu';
  const divimage = new Image(200, 200);
  divimage.setAttribute('src', './Assets/BangaSoup.jpeg');
  const divimage2 = new Image(200, 200); 
  divimage2.setAttribute('src', './Assets/Beanpudding.jpeg');
  const divimage3 = new Image(200, 200); 
  divimage3.setAttribute('src', './Assets/Ewariro.jpeg');
  const divimage4 = new Image(200, 200); 
  divimage4.setAttribute('src', './Assets/jollofrice.jpeg');
  const divimage5 = new Image(200, 200); 
  divimage5.setAttribute('src', './Assets/riceandstew.jpeg');
  const divimage6 = new Image(200, 200); 
  divimage6.setAttribute('src', './Assets/Yam.jpeg');
  const menucon = document.createElement('div');
  menucon.className = 'menuList';
  menucon.innerHTML = `
  <div class = "house">
  <div>
  <h2> Banga Soup </h2>
  <p> Price:1500N</p>
  <button type="button">ORDER</button>
  </div>
  <br>
  <div>
  <h2> BeanPudding</h2>
  <p> Price:500N </p>
  <button type="button">ORDER</button>
  </div>
  <br>
  <div>
  <h2>Bean Porridge</h2>
  <p> Price:1000N </p>
  <button type="button">ORDER</button>
  </div>
  <br>
  <div>
  <h2> Jollof Rice </h2>
  <p>Price: 2000N </p>
  <button type="button">ORDER</button>
  </div>
  <br>
  <div>
  <h2> White rice </h2>
  <p> Price:800N </p>
  <button type="button">ORDER</button>
  </div>
  <br>
  <div>
  <h2> Yam </h2>
  <p> Price:500N </p>
  <button type="button">ORDER</button>
  </div>
  <br>
  </house>
  `
  container.appendChild(paragraph);
  container.appendChild(divimage);
  container.appendChild(divimage2);
  container.appendChild(divimage3);
  container.appendChild(divimage4);
  container.appendChild(divimage5);
  container.appendChild(divimage6);
  container.appendChild(menucon);
  return container;
}

export default menu;
