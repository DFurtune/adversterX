/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// Створюємо клас для роботи з користувачами\r\nclass User {\r\n  constructor(id, name, username, email, address, phone, website, company) {\r\n    this.id = id;\r\n    this.name = name;\r\n    this.username = username;\r\n    this.email = email;\r\n    this.address = `${address.street}, ${address.city}`;\r\n    this.phone = phone;\r\n    this.website = website;\r\n    this.company = company.name;\r\n  }\r\n\r\n  // Метод для створення картки користувача\r\n  createCard() {\r\n    return `\r\n        <div class=\"card\">\r\n            <h2>${this.name} (${this.username})</h2>\r\n            <p><strong>Email:</strong> ${this.email}</p>\r\n            <p><strong>Phone:</strong> ${this.phone}</p>\r\n            <p><strong>Address:</strong> ${this.address}</p>\r\n            <p><strong>Website:</strong> <a href=\"http://${this.website}\" target=\"_blank\">${this.website}</a></p>\r\n            <p><strong>Company:</strong> ${this.company}</p>\r\n        </div>\r\n        `;\r\n  }\r\n}\r\n\r\n// Основний клас для додатку\r\nclass UserApp {\r\n  constructor() {\r\n    this.users = [];\r\n    this.filteredUsers = [];\r\n    this.appElement = document.getElementById(\"app\");\r\n    this.filterElement = document.getElementById(\"filter\");\r\n  }\r\n\r\n  // Отримуємо користувачів з API\r\n  async fetchUsers() {\r\n    const response = await fetch(\"https://jsonplaceholder.typicode.com/users\");\r\n    const data = await response.json();\r\n    this.users = data.map(\r\n      (user) =>\r\n        new User(\r\n          user.id,\r\n          user.name,\r\n          user.username,\r\n          user.email,\r\n          user.address,\r\n          user.phone,\r\n          user.website,\r\n          user.company\r\n        )\r\n    );\r\n    this.filteredUsers = this.users;\r\n    this.render();\r\n  }\r\n\r\n  // Фільтруємо користувачів\r\n  filterUsers(searchTerm) {\r\n    const lowerCaseTerm = searchTerm.toLowerCase();\r\n    this.filteredUsers = this.users.filter((user) => {\r\n      return (\r\n        user.name.toLowerCase().includes(lowerCaseTerm) ||\r\n        user.username.toLowerCase().includes(lowerCaseTerm) ||\r\n        user.phone.toLowerCase().includes(lowerCaseTerm) ||\r\n        user.address.toLowerCase().includes(lowerCaseTerm) ||\r\n        user.website.toLowerCase().includes(lowerCaseTerm) ||\r\n        user.email.toLowerCase().includes(lowerCaseTerm) || // Додано фільтр за email\r\n        user.company.toLowerCase().includes(lowerCaseTerm) // Додано фільтр за компанією\r\n      );\r\n    });\r\n    this.render();\r\n  }\r\n\r\n  // Відображаємо картки користувачів\r\n  render() {\r\n    this.appElement.innerHTML = this.filteredUsers\r\n      .map((user) => user.createCard())\r\n      .join(\"\");\r\n  }\r\n\r\n  // Додаємо подію для фільтрації\r\n  addFilterEvent() {\r\n    this.filterElement.addEventListener(\"input\", (e) => {\r\n      this.filterUsers(e.target.value);\r\n    });\r\n  }\r\n\r\n  // Ініціалізація додатку\r\n  init() {\r\n    this.fetchUsers();\r\n    this.addFilterEvent();\r\n  }\r\n}\r\n\r\n// Ініціалізація додатку при завантаженні сторінки\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n  const app = new UserApp();\r\n  app.init();\r\n});\r\n\n\n//# sourceURL=webpack://adversterx/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;