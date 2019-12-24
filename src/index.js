import Library from './Library';

const lib = new Library();

lib.getApi();


const btn = document.querySelector('#btn');
let modalOfCreate = document.getElementById("myModal");
let modalOfUpdate = document.getElementById("myModal1");
let span = document.getElementsByClassName("close")[0];
let span1 = document.getElementsByClassName("close1")[0];
let btnSave = document.querySelector('#btn-save');
let btnUpdate = document.querySelector('#btn-update1');

console.log(btn);
console.log(modalOfCreate);
btn.onclick = function () {
  modalOfCreate.style.display = 'block';
};
span.onclick = function () {
  modalOfCreate.style.display = 'none';
};

span1.onclick = function () {
  modalOfUpdate.style.display = 'none';
}

btnSave.onclick = function () {
  lib.saveData();
  modalOfCreate.style.display = 'none';
};
btnUpdate.onclick = function () {
  lib.updateData(btnUpdate.id, btnUpdate.value);
  modalOfUpdate.style.display = 'none';
}