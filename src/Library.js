export default class Library {

  constructor() {
    this.tr = document.querySelector('#t');
    this.posts = [];
    this.input = document.querySelector('#input1');
    this.input2 = document.querySelector('#input2');
    //   this.authors = [];
    //   this.books = [];
    //   this.id=0;
    //   this.listGroup = document.querySelector('#authors');
    //   this.authorSelect = document.querySelector('#addBookForm select[name=author]');
    //   this.booksTbody = document.querySelector('#books > tbody');
  }

  async getApi() {
    this.tr.innerHTML += 'Loading...'
    let response = await fetch('http://localhost:3000/posts');
    let data = await response.json();
    this.posts = [...data];
    console.log(this.posts);
    this.outputData();

  }

  async saveData() {
    let id = this.posts[this.posts.length - 1].id + 1;
    let save = await fetch('http://localhost:3000/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: this.input.value,
        body: this.input2.value,
        userId: 1,
        id: id
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    let result = await save.json();
    await this.posts.push({title: this.input.value, body: this.input2.value, userId: 1, id: id})
    this.outputData(result);
  }

  async updateData(id, value) {
    let update = await fetch(`http://localhost:3000/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        title: inputOfUpdate.value,
        body: input1OfUpdate.value,
        userId: 1
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    let result = await update.json();
    this.posts[value].title = inputOfUpdate.value;
    this.posts[value].body = input1OfUpdate.value;
    this.outputData();

  }

  outputData() {
    this.tr.innerHTML = '';
    this.posts.forEach(element => {
      this.tr.innerHTML += `
      <tr>
        <td>${element.id}</td>
        <td>${element.userId}</td>
        <td>${element.title}</td>
        <td>${element.body}</td>
        <td><button class="btn btn-primary" id="btn-update" value="${element.id}">Update</button></td>
      </tr>`;
    });

    let btnUpdate = document.querySelectorAll('#btn-update');
    let posts = this.posts;
    for (let i = 0; i < btnUpdate.length; i++) {
      btnUpdate[i].addEventListener('click', function () {
        m(posts);
      });

      function m(posts) {
        console.log(modal);
        modal.style.display = 'block';
        button.id = btnUpdate[i].value;
        button.value = i;
        inputOfUpdate.value = posts[i].title;
        input1OfUpdate.value = posts[i].body;
      }
    }

  }
}
let button = document.getElementById('btn-update1');
let inputOfUpdate = document.querySelector('#input3');
let input1OfUpdate = document.querySelector('#input4');
let modalContent = document.querySelector('#modal-content1');
let modal = document.querySelector("#myModal1");

