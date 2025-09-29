/* eslint-disable */
import "@babel/polyfill";
import axios from "axios";
import { login } from "./login";
import { logout } from "../../controllers/authController";
const loginForm = document.querySelector(".form");
const logoutBtn = document.querySelector("./nav__el--logout");

document.querySelector(".form").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  login(email, password);
});

if (loginForm)
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    login(email, password);
  });

if (logoutBtn) logoutBtn.addEventListener("click", logout);
