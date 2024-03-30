let i = 0;
let nameTxt = 'Olivia Lewis'; 
let speed = 200;

function type() {
  if (i < nameTxt.length) {
    document.querySelector("#abt-title").innerHTML += nameTxt.charAt(i);
    i++;
    setTimeout(type, speed);
  }
}

type();