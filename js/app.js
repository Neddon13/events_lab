document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  document.querySelector('#new-item-form').addEventListener('submit', handleFormSubmit);
  
  document.querySelector('#delete').addEventListener('click', handleDelete);

  


  // const form = document.querySelector('#new-item-form');
  // form.addEventListener('submit', handleFormSubmit);
})

const handleFormSubmit = function (e) {
  e.preventDefault();
  const createNewItem = document.createElement('li');
  createNewItem.textContent = `${e.target.title.value} ${e.target.author.value} ${e.target.category.value}`;
  const list = document.querySelector('ul');
  list.appendChild(createNewItem);
};

const handleDelete = function (e) {
  console.log('delete');
  
};