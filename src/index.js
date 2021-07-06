import navbar from './navbar'
import home from './homepage'
import menu from  './menu'
import contact from './contact'
import '../dist/style.css'

const text = document.createElement("p");
text.innerHTML = "New paragraph"
text.className = "test"
const parent = document.querySelector("#content");

parent.append(navbar())
parent.append(home())
parent.append(menu())
parent.append(contact())

const homes = document.querySelector('.homepage')
const menus = document.querySelector ('.menupage')
const contacts = document.querySelector('.contactLink')



homes.addEventListener('click', () => {
  document.querySelector('.menuNav').classList.remove('show');
  document.querySelector('.homeContainer').classList.remove('hide');
  document.querySelector('.homeContainer').classList.add('show');
  document.querySelector('.menuNav').classList.add('hide');
  document.querySelector('.contactNav').classList.add('hide');
  document.querySelector('.contactNav').classList.remove('show');
});


menus.addEventListener('click', () => {
  document.querySelector('.homeContainer').classList.add('hide');
  document.querySelector('.homeContainer').classList.remove('show');
  document.querySelector('.menuNav').classList.remove('hide');
  document.querySelector('.menuNav').classList.add('show');
  document.querySelector('.contactNav').classList.add('hide');
  document.querySelector('.contactNav').classList.remove('show');
});


contacts.addEventListener('click', () => {
  
  document.querySelector('.contactNav').classList.remove('hide');
  document.querySelector('.contactNav').classList.add('show');
  document.querySelector('.homeContainer').classList.add('hide');
  document.querySelector('.menuNav').classList.add('hide');
  document.querySelector('.menuNav').classList.remove('show');
});



