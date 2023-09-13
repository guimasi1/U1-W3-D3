// mainform.addEventListener("submit", function (e) {
//   e.preventDefault();
//   const inputItems = document.getElementById("input-items");
//   const taskValue = inputItems.value;
//   const task = document.createElement("div");
//   task.innerHTML = `
//   <p>${taskValue}</p>
//   <button>Done</button>
//   `;

// });
const mainform = document.getElementById("mainform");
const sectionItems = document.getElementById("item-container");

mainform.addEventListener("submit", function (e) {
  e.preventDefault();
  const inputItems = document.getElementById("input-items");
  taskValue = inputItems.value;
  const taskItem = document.createElement("div");
  taskItem.innerHTML = `
    <div class="task-div">
    <p onclick="complete(event)">${taskValue}</p>
    <button onclick="deleteItem(event)">Remove</button>
    </div>
    `;
  taskItem.classList.add("task-item");

  sectionItems.appendChild(taskItem);
  inputItems.value = "";
});

const deleteItem = function (e) {
  const clickedItem = e.target;
  clickedItem.parentElement.remove();
};

const complete = function (e) {
  const clicked = e.target;
  clicked.classList.add("line");
};
