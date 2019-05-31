let strings = [
  "¡Llame una ambulancia!",
  "Me duele el pie.",
  "La Ambulancia",
  "Me siento débil.",
  "Tengo fiebre.",
  "Tengo dolores.",
  "Sufro de insomnio.",
  "Tengo fiebre del heno",
  "Me duele la rodilla.",
  "No me siento bien.",
  "Necesito una receta médica.",
  "El hospital",
  "¿Tiene fiebre?",
  "Tengo una infección.",
  "Tengo un virus.",
  "Necesito muletas.",
  "Me duele el ojo.",
  "Me duele el hombro.",
  "¡Necesito un médico!"
];

const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

strings.map((d, i) => {
  let seed = Math.random();
  let textelement = document.createTextNode(d);

  let hElement = document.createElement("h1");
  hElement.classList.add("word");
  hElement.appendChild(textelement);
  hElement.style.webkitFilter = "blur(" + (seed+0.6) * 2 + "px)";
  hElement.style.fontSize = (1-seed)*12 + 12 + 'px';

  let textcontainer = document.createElement("div");
  textcontainer.classList.add("inside");
  textcontainer.appendChild(hElement);
  textcontainer.style.position = "absolute";
  textcontainer.style.width = "200px";
  textcontainer.style.left = Math.random() * (innerWidth - 100)+ 100+ "px";
  textcontainer.style.top = Math.random() * (innerHeight - 100)+ 100 + "px";
  //textcontainer.classList.add('speech-bubble');

  let topbox = document.createElement("div");
  topbox.setAttribute("data-depth", 1 - seed);
  topbox.appendChild(textcontainer);

  document.getElementById("scene").appendChild(topbox);
});

//Tweens
//TweenMax.from(".inside", 1, { y: 100 });
TweenMax.staggerFrom(".inside", 1, { y: 50, opacity: 0 }, 0.2);
TweenMax.staggerTo(".inside", 40, { y: -100 }, 0.2);

var scene = document.getElementById("scene");
var parallaxInstance = new Parallax(scene, {
  scalarX: 3,
  scalarY: 3
});

$(document).ready(function() {
  $("button").click(function() {
    $("h1").shuffleLetters();
  });
});
