const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const createElement = (item) => {
  const li = document.createElement('li');
  li.textContent = item;
  return li
}

const ingredientsItems = ingredients.map(createElement)
const list = document.querySelector('#ingredients')
list.append(...ingredients);
