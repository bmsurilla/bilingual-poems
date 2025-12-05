function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 40,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let languageInput1 = document.querySelector("#input-language-1");
  let languageInput2 = document.querySelector("#input-language-2");

  let apiKey = "bab44a6ef3at298bof0b63093865ccef";
  let prompt = `generate a biligual poem with the two languages given by the user: ${languageInput1.value} and ${languageInput2.value}`;
  let context =
    "You are a learned linguist who loves poems. Create a limerick with the given languages by the user. Use HTML and add line breaks for added structure. Skip the backticks and html only display the poem. Please also sign it with a random common name.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#input-form");
poemFormElement.addEventListener("submit", generatePoem);
