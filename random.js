let rendom = [];
<<<<<<< HEAD
let btn = document.getElementById("btn");
let start = document.getElementById("rand");
let inp = document.getElementById("name");
let show = document.getElementById("show");
=======
var k = 1;
do {
  var name = prompt("أدخل إسمك ؟ أو إضغض موافق للخروج");
  if (!(name === "null")) {
    rendom.push(name);
  }
>>>>>>> 89a9996798080cf41b5cfa42f509089772abb7c6




let ran = btn.onclick = function () {
  if (inp.value != "") {
    rendom.push(inp.value);
    console.log(rendom);
    inp.value = "";
  }
};
console.log(rendom);





let result = start.onclick = function(){
  let randomNumber = Math.floor(Math.random() * rendom.length);
let randomName = rendom[randomNumber];
<<<<<<< HEAD
show.innerHTML = `🎉 والفائز هو ${randomName}`;
=======
console.log(randomNumber);
if (rendom.length) {
  if (k) {
    let container = `<h1 class="content">
     <span> 🎉${randomName} </span>: و الفائز هو
      </h1>`;

    document.write(container);
  }
>>>>>>> 89a9996798080cf41b5cfa42f509089772abb7c6
}



