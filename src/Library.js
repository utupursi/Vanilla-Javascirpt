export default class Library {

  constructor() {
    this.tr = document.querySelector('#t');
    this.users = [];
    this.input = document.querySelector('#input0');
    this.input2 = document.querySelector('#input1');
    this.input3 = document.querySelector('#input2');
    //   this.authors = [];
    //   this.books = [];
    //   this.id=0;
    //   this.listGroup = document.querySelector('#authors');
    //   this.authorSelect = document.querySelector('#addBookForm select[name=author]');
    //   this.booksTbody = document.querySelector('#books > tbody');
  }

  async getApi() {
    this.tr.innerHTML += 'Loading...';
    let response = await fetch('http://localhost:3000/users');
    let data = await response.json();
    this.users = [...data];
    this.outputData();

  }

  async saveData() {
    let id = this.users[this.users.length - 1].id + 1;
    let save = await fetch('http://localhost:3000/users', {
      method: 'POST',
      body: JSON.stringify({
        name: this.input.value,
        username: this.input2.value,
        email: this.input3.value,
        id: id
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    let result = await save.json();
    await this.users.push({name: this.input.value, username: this.input2.value, email: 1, id: id})
    this.outputData(result);
  }

  async updateData(id, value) {
    let update = await fetch(`http://localhost:3000/users/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        name: inputOfName.value,
        username: inputOfUsername.value,
        email: inputOfEmail.value,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    let result = await update.json();
    this.users[value].name = inputOfName.value;
    this.users[value].username = inputOfUsername.value;
    this.users[value].email = inputOfEmail.value;
    this.outputData();
  }

  outputData() {
    this.tr.innerHTML = '';
    this.users.forEach(element => {
      this.tr.innerHTML += `
      <tr>
        <td>${element.id}</td>
        <td>${element.name}</td>
        <td>${element.username}</td>
        <td>${element.email}</td>
        <td><button class="btn btn-primary" id="btn-update" value="${element.id}">Update</button></td>
        <td><button class="btn btn-danger" id="btn-delete" value="${element.id}">Delete</button></td>
      </tr>`;
    });

    let btnUpdate = document.querySelectorAll('#btn-update');
    let btnDelete = document.querySelectorAll('#btn-delete');
    let users = this.users;
    for (let i = 0; i < btnUpdate.length; i++) {
      btnUpdate[i].addEventListener('click', function () {
        m(users);
      });
      btnDelete[i].addEventListener('click', function () {
        deleteUser(users);
      })

      function m(users) {
        modal.style.display = 'block';
        button.id = btnUpdate[i].value;
        button.value = i;
        inputOfName.value = users[i].name;
        inputOfUsername.value = users[i].username;
        inputOfEmail.value = users[i].email;
      }

      async function deleteUser(users) {
        if (confirm('Are you sure you want to delete this user?')) {
          let deleteUser = await fetch(`http://localhost:3000/users/${users[i].id}`, {
            method: 'DELETE',
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
          });
          let deleteData = await deleteUser.json();
          users.splice(i, 1);
          let parent = btnUpdate[i].parentElement.parentElement.remove();
        }
      }
    }

  }
}
let button = document.getElementById('btn-update1');
let inputOfName = document.querySelector('#input3');
let inputOfUsername = document.querySelector('#input4');
let inputOfEmail = document.querySelector('#input5');
let modalContent = document.querySelector('#modal-content1');
let modal = document.querySelector("#myModal1");

