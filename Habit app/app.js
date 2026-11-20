// Key under which the habit list is saved in the browser's storage.
const STORAGE_KEY = "habits";

// Page elements used by the app.
const form = document.getElementById("habit-form");
const input = document.getElementById("habit-input");
const list = document.getElementById("habit-list");
const countLabel = document.getElementById("habit-count");
const clearButton = document.getElementById("clear-completed");

// Loaded from storage at start-up; each habit is { id, name, doneOn }.
let habits = loadHabits();

// Returns today's date as a YYYY-MM-DD string in the user's local time.
function today() {
  const d = new Date();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${d.getFullYear()}-${month}-${day}`;
}

// Reads the saved habit list from browser storage (empty list if none or unreadable).
function loadHabits() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch (error) {
    return [];
  }
}

// Writes the current habit list to browser storage so it survives closing the browser.
function saveHabits() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(habits));
}

// Rebuilds the visible list of habits from the habits array.
function render() {
  list.innerHTML = "";

  habits.forEach((habit) => {
    const isDone = habit.doneOn === today();

    const row = document.createElement("li");
    row.className = "habit" + (isDone ? " done" : "");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = isDone;
    checkbox.addEventListener("change", () => toggleHabit(habit.id));

    const name = document.createElement("span");
    name.className = "name";
    name.textContent = habit.name;

    const removeButton = document.createElement("button");
    removeButton.className = "remove";
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => removeHabit(habit.id));

    row.append(checkbox, name, removeButton);
    list.appendChild(row);
  });

  renderFooter();
}

// Updates the "N habits left" counter and enables "Clear completed" only when something is done.
function renderFooter() {
  const doneCount = habits.filter((h) => h.doneOn === today()).length;
  const remaining = habits.length - doneCount;

  countLabel.textContent = `${remaining} ${remaining === 1 ? "habit" : "habits"} left`;
  clearButton.disabled = doneCount === 0;
}

// Adds a new, not-yet-done habit with the given name, then saves and redraws.
function addHabit(name) {
  habits.push({ id: Date.now(), name: name, doneOn: null });
  saveHabits();
  render();
}

// Marks a habit as done for today, or undoes it if it was already done today.
function toggleHabit(id) {
  const habit = habits.find((h) => h.id === id);
  habit.doneOn = habit.doneOn === today() ? null : today();
  saveHabits();
  render();
}

// Deletes the habit with the given id, then saves and redraws.
function removeHabit(id) {
  habits = habits.filter((h) => h.id !== id);
  saveHabits();
  render();
}

// Deletes every habit that is marked done today, then saves and redraws.
function clearCompleted() {
  habits = habits.filter((h) => h.doneOn !== today());
  saveHabits();
  render();
}

// Handles the Clear completed button.
clearButton.addEventListener("click", clearCompleted);

// Handles the Add button / Enter key: adds the typed habit and clears the text field.
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = input.value.trim();
  if (name === "") return;
  addHabit(name);
  input.value = "";
  input.focus();
});

render();
