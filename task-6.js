const inputRef = document.querySelector("#validation-input");
const dataLength = +inputRef.dataset.length;

inputRef.addEventListener("blur", handleBlurInput);

function handleBlurInput() {
  if (inputRef.value.length === dataLength) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.add("invalid");
    inputRef.classList.remove("valid");
  }
}
