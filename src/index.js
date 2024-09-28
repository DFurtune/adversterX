class User {
  constructor(id, name, username, email, address, phone, website, company) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
    this.address = `${address.street}, ${address.city}`;
    this.phone = phone;
    this.website = website;
    this.company = company.name;
  }

  createCard() {
    return `
        <div class="card">
            <h2>${this.name} (${this.username})</h2>
            <p><strong>Email:</strong> ${this.email}</p>
            <p><strong>Phone:</strong> ${this.phone}</p>
            <p><strong>Address:</strong> ${this.address}</p>
            <p><strong>Website:</strong> <a href="http://${this.website}" target="_blank">${this.website}</a></p>
            <p><strong>Company:</strong> ${this.company}</p>
        </div>
        `;
  }
}

class UserApp {
  constructor() {
    this.users = [];
    this.filteredUsers = [];
    this.appElement = document.getElementById("app");
    this.filterElement = document.getElementById("filter");
  }

  async fetchUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    this.users = data.map(
      (user) =>
        new User(
          user.id,
          user.name,
          user.username,
          user.email,
          user.address,
          user.phone,
          user.website,
          user.company
        )
    );
    this.filteredUsers = this.users;
    this.render();
  }

  filterUsers(searchTerm) {
    const lowerCaseTerm = searchTerm.toLowerCase();
    this.filteredUsers = this.users.filter((user) => {
      return (
        user.name.toLowerCase().includes(lowerCaseTerm) ||
        user.username.toLowerCase().includes(lowerCaseTerm) ||
        user.phone.toLowerCase().includes(lowerCaseTerm) ||
        user.address.toLowerCase().includes(lowerCaseTerm) ||
        user.website.toLowerCase().includes(lowerCaseTerm) ||
        user.email.toLowerCase().includes(lowerCaseTerm) || // Додано фільтр за email
        user.company.toLowerCase().includes(lowerCaseTerm) // Додано фільтр за компанією
      );
    });
    this.render();
  }

  render() {
    this.appElement.innerHTML = this.filteredUsers
      .map((user) => user.createCard())
      .join("");
  }

  addFilterEvent() {
    this.filterElement.addEventListener("input", (e) => {
      this.filterUsers(e.target.value);
    });
  }

  init() {
    this.fetchUsers();
    this.addFilterEvent();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const app = new UserApp();
  app.init();
});
