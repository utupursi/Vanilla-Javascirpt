!function(t){var e={};function n(o){if(e[o])return e[o].exports;var s=e[o]={i:o,l:!1,exports:{}};return t[o].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(o,s,function(e){return t[e]}.bind(null,s));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);let o=document.getElementById("btn-update1"),s=document.querySelector("#input3"),l=document.querySelector("#input4"),i=(document.querySelector("#modal-content1"),document.querySelector("#myModal1"));const u=new class{constructor(){this.tr=document.querySelector("#t"),this.posts=[],this.input=document.querySelector("#input1"),this.input2=document.querySelector("#input2")}async getApi(){this.tr.innerHTML+="Loading...";let t=await fetch("http://localhost:3000/posts"),e=await t.json();this.posts=[...e],console.log(this.posts),this.outputData()}async saveData(){let t=this.posts[this.posts.length-1].id+1,e=await fetch("http://localhost:3000/posts",{method:"POST",body:JSON.stringify({title:this.input.value,body:this.input2.value,userId:1,id:t}),headers:{"Content-type":"application/json; charset=UTF-8"}}),n=await e.json();await this.posts.push({title:this.input.value,body:this.input2.value,userId:1,id:t}),this.outputData(n)}async updateData(t,e){let n=await fetch(`http://localhost:3000/posts/${t}`,{method:"PUT",body:JSON.stringify({title:s.value,body:l.value,userId:1}),headers:{"Content-type":"application/json; charset=UTF-8"}});await n.json();this.posts[e].title=s.value,this.posts[e].body=l.value,this.outputData()}outputData(){this.tr.innerHTML="",this.posts.forEach(t=>{this.tr.innerHTML+=`\n      <tr>\n        <td>${t.id}</td>\n        <td>${t.userId}</td>\n        <td>${t.title}</td>\n        <td>${t.body}</td>\n        <td><button class="btn btn-primary" id="btn-update" value="${t.id}">Update</button></td>\n      </tr>`});let t=document.querySelectorAll("#btn-update"),e=this.posts;for(let u=0;u<t.length;u++){function n(e){console.log(i),i.style.display="block",o.id=t[u].value,o.value=u,s.value=e[u].title,l.value=e[u].body}t[u].addEventListener("click",(function(){n(e)}))}}};u.getApi();const a=document.querySelector("#btn");let r=document.getElementById("myModal"),c=document.getElementById("myModal1"),d=document.getElementsByClassName("close")[0],p=document.getElementsByClassName("close1")[0],y=document.querySelector("#btn-save"),h=document.querySelector("#btn-update1");console.log(a),console.log(r),a.onclick=function(){r.style.display="block"},d.onclick=function(){r.style.display="none"},p.onclick=function(){c.style.display="none"},y.onclick=function(){u.saveData(),r.style.display="none"},h.onclick=function(){u.updateData(h.id,h.value),c.style.display="none"}}]);