const contact = () => {
  const container = document.createElement('div');
  container.className = 'contactNav';
  container.classList.add('hide');
  const paragraph = document.createElement('p');
  paragraph.innerHTML = 'CONTACT US';
  paragraph.className = 'contactparagraph';
  const form = document.createElement('form');
  form.actionon = '#';
  form.className = 'form-container';
  form.innerHTML = ` 
<div>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter your email">
</div>
<div>
<br>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter your order" ></textarea>
</div>
<br>
<div>
<input type="submit" value="Submit" class="submit">
</div>
 `;

  container.appendChild(paragraph);
  container.appendChild(form);
  return container;
};

export default contact;
