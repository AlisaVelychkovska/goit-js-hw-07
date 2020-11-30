const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

inputRef.addEventListener('input', handleChangeInput)

function handleChangeInput({currentTarget}) {
    const value = currentTarget.value;
    textRef.style.fontSize = value + 'px';
}