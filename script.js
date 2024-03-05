"use strict";

const inputTask = document.querySelector(".input-task");

const btnAddItem = document.querySelector(".addItem");
const btnEditItem = document.querySelectorAll(".editItem");

// Cleaning div
const containerTasks = document.querySelector(".containerTasks");
// containerTasks.innerHTML = "";

// Event Handlers

//////////////// Button add items
btnAddItem.addEventListener("click", function (e) {
  e.preventDefault();

  if (inputTask.value) {
    const html = `<div class="task">
    <p>${input.value}</p>
    <button class="editItem">Edit task</button>
    <button class="deleteTask">Delete task</button>
  </div>`;

    containerTasks.insertAdjacentHTML("afterbegin", html);

    inputTask.value = "";
    inputTask.style.border = "2px solid #e3fafc";

    const btnDeleteItem = document.querySelectorAll(".deleteTask");

    btnDeleteItem.forEach((btn) =>
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        e.target.closest("div").remove();
      })
    );
  } else {
    inputTask.style.border = "2px solid #e8590c";
    alert("No data to add in your list!");
  }
});

//////////////// Button edit
