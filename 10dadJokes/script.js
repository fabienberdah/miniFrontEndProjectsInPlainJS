//using .then

const jokeElement = document.getElementById("joke");
const jokeBtn = document.getElementById("newJoke");

// const generateJoke = () => {
//   const config = {
//     headers: {
//       Accept: "application/json",
//     },
//   };
//   fetch("https://icanhazdadjoke.com", config)
//     .then((res) => res.json())
//     .then((data) => (jokeElement.innerText = data.joke))
//     .catch((err) => console.log("Error: ", err.message));
// };

//Using async/await

const generateJoke = async () => {
  config = {
    headers: {
      Accept: "application/json",
    },
  };

  const res = await fetch("https://icanhazdadjoke.com", config);
  const data = await res.json();
  jokeElement.innerText = data.joke;
};

generateJoke();

jokeBtn.addEventListener("click", () => generateJoke());
