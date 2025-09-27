const myForm = document.getElementById("list-form");
const itemList = document.getElementById("items-list");

myForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let textInput = document.getElementById("text-input").value;
  console.log(textInput);
  const addItem = function (textInput) {
    if (textInput !== "") {
      itemList.innerHTML += `<li>${textInput}</li>`;
    }
  };
  return addItem(textInput);
});
