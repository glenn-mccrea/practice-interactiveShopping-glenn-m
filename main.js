const myForm = document.getElementById("list-form");
const itemList = document.getElementById("items-list");

myForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let textInput = document.getElementById("text-input").value;
  //
  const addItem = function (txt) {
    if (txt !== "") {
      itemList.innerHTML += `<li>${txt}
      <button class="remove-items" style="margin: 5px">Remove</button>
      <button class="edit-items" style="margin-right: 5px">Edit</button></li>`;
    }
    document.getElementById("text-input").value = "";
  };
  return addItem(textInput);
});

// const removeItems = itemList.querySelector("remove-items");
// const editItems = itemList.querySelector("edit-items");

itemList.addEventListener("click", (event) => {
  if (event.target.classList.contains("remove-items")) {
    const listItem = event.target.parentElement;
    console.log(listItem);
    // what is it now?
    itemList.removeChild(listItem);
    //
  } else if (event.target.classList.contains("edit-items")) {
    const listItem = event.target.parentElement;
    console.log(listItem); //testing for identification prposes
    const newText = prompt("Edit item:");
    if (newText !== null && newText !== "") {
      listItem.childNodes[0].textContent = newText;
    }
  }
});
