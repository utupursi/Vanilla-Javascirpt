import Library from './Library';

const lib = new Library();
lib.getApi();

const btn=document.querySelector('#btn');
let  modal = document.getElementById("myModal");
let span = document.getElementsByClassName("close")[0];
let btnSave=document.querySelector('#btn-save');
console.log(btn);
console.log(modal);
btn.onclick=function(){
  modal.style.display='block';
}
span.onclick=function(){
  modal.style.display='none';
}

btnSave.onclick=function(){
  lib.saveData();
}