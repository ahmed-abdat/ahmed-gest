let rendom = [];

let btn = document.getElementById("btn");
let start = document.getElementById("rand");
let inp = document.getElementById("name");
let show = document.getElementById("show");





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
show.innerHTML = `🎉 والفائز هو ${randomName}`;
}



