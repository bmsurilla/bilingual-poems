function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: `Alors avance, entre viento y suerte, <br/>
cada paso te lleva, rompiendo la inerte. <br/>
Hacia la liberté que en toi se cache— <br/>
l’aventure empieza cuando tú te lâches.`,
    autoStart: true,
    delay: 50,
  });
}

let poemFormElement = document.querySelector("#input-form");
poemFormElement.addEventListener("submit", generatePoem);
