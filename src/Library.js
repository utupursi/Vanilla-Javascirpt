export default class Library {

   constructor() {
     this.tr=document.querySelector('#t');
     this.posts=[]
     this.input=document.querySelector('#input1');
this.input2=document.querySelector('#input2');
  //   this.authors = [];
  //   this.books = [];
  //   this.id=0;
  //   this.listGroup = document.querySelector('#authors');
  //   this.authorSelect = document.querySelector('#addBookForm select[name=author]');
  //   this.booksTbody = document.querySelector('#books > tbody');
   }

    async getApi(){
      this.tr.innerHTML+= 'Loading...'
     let response=await fetch('http://localhost:3000/posts');
     let data= await response.json();
     this.posts=[...data];
     console.log(this.posts);
     this.outputData();

  }
  async saveData(){
    let save=await fetch('http://localhost:3000/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1
    }),
    headers: { 
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  let result=await save.json();
  console.log(result);
  }

  outputData(){
    this.tr.innerHTML='';
    this.posts.forEach(element => {
      this.tr.innerHTML+=`
      <tr>
        <td>${element.id}</td>
        <td>${element.userId}</td>
        <td>${element.title}</td>
        <td>${element.body}</td>
      </tr>`;
    });
  }
}
