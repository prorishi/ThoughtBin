const inputArea = document.getElementById("input-area");
const clearButton = document.getElementById("clear");

const setThoughts = inputArea.oninput = () => {
  localStorage.setItem("thoughts", inputArea.value);
}

document.body.onload = () => {
  inputArea.value = localStorage.getItem("thoughts") || `This is a place for all your thoughts 
  which you think you might need to remember in future.
  or
  this can be used as a place to keep your notes/ shopping list/ to-doS/ homework/ etc.
  
  write here and it will be saved until you change it.`;
  
}

clearButton.onclick = () => {
  inputArea.value = "";
  setThoughts();
}

