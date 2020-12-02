const countLi = document.querySelectorAll(".item");
const amount = `В списке ${countLi.length} категории`;
console.log(amount);

countLi.forEach((item) => {
  const title = item.querySelector("h2").textContent;
  const quantity = item.querySelector("ul").children.length;
  console.log(`Категория: ${title} \nКоличество элементов: ${quantity}`);
});
