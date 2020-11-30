const current = document.querySelector('#value');
// let currentValue = +current.innerText;
const increment = () => {
    current.innerText = +current.innerText + 1
}
const decrement = () => {
    current.innerText = +current.innerText -1
}

const decrementButton = document.querySelector('button[data-action="decrement"]');
decrementButton.addEventListener('click', decrement);

const incrementButton = document.querySelector('button[data-action="increment"]');
incrementButton.addEventListener('click', ()=>{increment()});