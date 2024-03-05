"use strict";

const inputTask = document.querySelector(".input-task");

const btnAddItem = document.querySelector(".addItem");
const btnEditItem = document.querySelectorAll(".editItem");
const btnDeleteItem = document.querySelectorAll(".deleteTask");
const listItem = document.querySelectorAll("li");

// Cleaning div
// const containerTasks = document.querySelector(".containerTasks");
// containerTasks.innerHTML = "";

// Storing tasks
const arrayTasks = [];

// Event Handlers
btnAddItem.addEventListener("click", function (e) {
  e.preventDefault();

  if (inputTask.value) {
    const html = `<li>
  ${inputTask.value}
  <button class="deleteItem">Delete task</button>
</li>`;

    arrayTasks.push(`<button class="deleteItem">Delete task</button>`);
    console.log(arrayTasks);
    containerTasks.insertAdjacentHTML("afterbegin", html);
    inputTask.value = "";
    inputTask.style.border = "2px solid #e3fafc";
  } else {
    inputTask.style.border = "2px solid #e8590c";
    alert("No data to add in your list!");
  }
});
// arrayTasks.push("hi");

// console.log(arrayTasks);

for (let i = 0; i < btnDeleteItem.length; i++) {
  btnDeleteItem[i].addEventListener("click", function () {
    console.log("delete");
  });
}

//////////////// Button edit
// arrayTasks.forEach((task, i) => {
// });

// for (let i = 0; i < btnEditItem.length; i++) {
//   btnEditItem[i].addEventListener("click", function () {
//     console.log("edit");
//   });
// }
// btnEditItem.addEventListener("click", function () {
//   console.log(listItem);
// });

// listItem.forEach((el, i) => {
//   console.log(el);
// });

// btnEditItem.forEach((el, i) => {
//   console.log(el);
//   el.addEventListener("click", function () {
//     console.log("edit");
//   });
// });
