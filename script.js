"use strict";

const form = document.getElementById("form");
const inputTask = document.getElementById("input");
const submitTask = document.getElementById("input");

// Cleaning div
const containerTasks = document.getElementById("tasks-container");
containerTasks.innerHTML = "";

const callback = function (e) {
  e.preventDefault();

  if (!inputTask.value) {
    inputTask.style.border = "3px solid #e8590c";
    alert("No data to add in your list!");
    return;
  }

  const value = inputTask.value;
  let html = `
  <div class="task">
    <div class="content">
      <input
        type="text"
        class="text"
        value="${value}"
        name="task-value"
        readonly = 'readonly'
      />
    </div>
    <div class="actions">
      <button class="edit">Edit</button>
      <button class="delete">Delete</button>
    </div>
  </div>
  `;

  containerTasks.insertAdjacentHTML("afterbegin", html);

  inputTask.value = "";
  inputTask.style.border = "2px solid #e3fafc";

  //////////////// Button delete item
  const btnDeleteItem = document.querySelectorAll(".delete");

  btnDeleteItem.forEach((btn) =>
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      e.target.closest(".task").remove();
    })
  );

  //////////////// Button edit item
  const btnEditItem = document.querySelectorAll(".edit");

  btnEditItem.forEach((btn, i) =>
    btn.addEventListener("click", function (e) {
      e.preventDefault();

      const input = btn
        .closest(".task")
        .querySelector(".content")
        .querySelector("input");

      if (btn.innerHTML === "Edit") {
        input.removeAttribute("readonly");
        input.style.outline = "1px solid";
        input.focus();

        btn.innerHTML = "Save";
        btn.style.color = "#a629cc";
      } else {
        input.setAttribute("readonly", "readonly");
        input.style.outline = "none";

        btn.innerHTML = "Edit";
        btn.style.color = "#4167ff";
      }
    })
  );
};

//////////////// Button add items
form.addEventListener("submit", callback);

const copyright = document.createElement("div");
const text = document.createElement("p");
text.innerHTML =
  "To-do list app created by ian_mnv 😀, you can find me like that on instagram and github if you'd like to add me. <button class='got-you'>Gotcha</button>";
text.style.fontSize = "2rem";

copyright.append(text);
document.querySelector("main").append(copyright);

const copyBtn = document.querySelector(".got-you");

copyBtn.style.border = "1px solid #000";
copyBtn.style.padding = "1rem";
copyBtn.style.marginLeft = "2rem";

copyBtn.addEventListener("click", function () {
  copyright.remove();
});
