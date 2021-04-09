const text = document.getElementById("text");
const add = document.getElementById("add");
const list = document.getElementById("container");
// let counter = 0;

add.addEventListener("click", addToList);

function addToList() {
  const newItem = document.createElement("div");
  const newToDo = document.createElement("input");
  const editButton = document.createElement("button");
  const deleteButton = document.createElement("button");

  if (text.value !== "") {
    editButton.style.margin = "1rem";
    editButton.style.width = "5rem";
    editButton.style.height = "2.7rem";
    editButton.textContent = "edit";

    deleteButton.style.margin = "1rem";
    deleteButton.style.width = "5rem";
    deleteButton.style.height = "2.7rem";

    deleteButton.textContent = "delete";

    newToDo.setAttribute("type", "text");
    newToDo.style.width = "30rem";
    newToDo.style.fontSize = "2rem";
    newToDo.style.margin = "1rem";
    newToDo.disabled = true;

    list.appendChild(newItem);
    newItem.appendChild(newToDo);
    newItem.appendChild(editButton);
    newItem.appendChild(deleteButton);

    newToDo.value = /*counter + ". " +*/ text.value;
    text.value = "";
  }

  editButton.addEventListener("click", () => {
    newToDo.disabled = 1 - newToDo.disabled;
    editButton.textContent = newToDo.disabled ? "edit " : "edited";
  });

  deleteButton.addEventListener("click", () => {
    list.removeChild(newItem);
  });
}

function enterKey(evt) {
  var charCode = evt.which ? evt.which : evt.keyCode;
  if (charCode == 13) {
    addToList();
  }
  return true;
}
