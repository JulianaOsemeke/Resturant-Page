function navbar() {
  // Logo
  const logoname = document.createElement('h1');
  logoname.innerText = "JAY'S DINER";
  logoname.className = 'logo';
  // Home Toggle link
  const homepageLink = document.createElement('a');
  const secondText = document.createTextNode('Home');
  homepageLink.href = '#homepage';
  homepageLink.className = 'homepage';
  homepageLink.appendChild(secondText);
  // Menu Toggle link
  const menuLink = document.createElement('a');
  const thirdText = document.createTextNode('Menu');
  menuLink.href = '#menupage';
  menuLink.className = 'menupage';
  menuLink.appendChild(thirdText);
  // Contact Toggle link
  const nav = document.createElement('a');
  const firstText = document.createTextNode('Contact');
  nav.href = '#contact';
  nav.className = 'contactLink';
  nav.appendChild(firstText);
  const menu = document.createElement('div');
  menu.className = 'test';
  menu.appendChild(logoname);
  menu.appendChild(homepageLink);
  menu.appendChild(menuLink);
  menu.appendChild(nav);
  return menu;
}

export default navbar;
