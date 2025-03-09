const loginForm = document.getElementById("login-form");
const usernameInput = document.getElementById("username");
const greeting = document.getElementById("greeting");
const logoutButton = document.getElementById("logout-button");
const loginButton = loginForm.querySelector("button");
const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");

const USERNAME_KEY = "username";
const TODOS_KEY = "todos";

function handleLoginSubmit(event) {
  event.preventDefault();
  const username = usernameInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  loginButton.classList.add("hidden");
  usernameInput.classList.add("hidden");
  greeting.innerText = `Hello, ${username}!`;
  greeting.classList.remove("hidden");
  logoutButton.classList.remove("hidden");
  todoForm.classList.remove("hidden");
  todoList.classList.remove("hidden");
}

function handleLogout() {
  localStorage.removeItem(USERNAME_KEY);
  localStorage.removeItem(TODOS_KEY);
  loginButton.classList.remove("hidden");
  usernameInput.classList.remove("hidden");
  greeting.classList.add("hidden");
  logoutButton.classList.add("hidden");
  todoForm.classList.add("hidden");
  todoList.classList.add("hidden");
  todoList.innerHTML = ""; // 화면에서 투두리스트 항목 제거
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername) {
  loginButton.classList.add("hidden");
  usernameInput.classList.add("hidden");
  greeting.innerText = `Hello, ${savedUsername}!`;
  greeting.classList.remove("hidden");
  logoutButton.classList.remove("hidden");
  todoForm.classList.remove("hidden");
  todoList.classList.remove("hidden");
} else {
  loginForm.addEventListener("submit", handleLoginSubmit);
  todoForm.classList.add("hidden");
  todoList.classList.add("hidden");
}

logoutButton.addEventListener("click", handleLogout);
