let rendom = [];
var k = 1;
do {
  var name = prompt("أدخل إسمك ؟ أو إضغض موافق للخروج");
  if (!(name === "null")) {
    rendom.push(name);
  }

  if (name) {
    var k = 0;
  } else {
    var k = 1;
  }
} while (name);
rendom.pop(rendom.length - 1);
console.log(k);
console.log(rendom);

let randomNumber = Math.floor(Math.random() * rendom.length);

let randomName = rendom[randomNumber];
console.log(randomNumber);
if (rendom.length) {
  if (k) {
    let container = `<h1 class="content">
     <span> 🎉${randomName} <span/>: و الفائز هو
      </h1>`;

    document.write(container);
  }
}
