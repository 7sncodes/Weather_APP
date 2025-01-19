const ApiKey = "908556e2e0ff8547fcd481eae594fc22";

const searchBox = document.querySelector(".search-input");

const searchBtn = document.querySelector(".search .button");

async function weatherCheck(city) {
  //   fetch(
  //     `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${ApiKey}`
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       document.querySelector(".city").innerText = data.name;
  //       document.querySelector(".temp").innerText =
  //         Math.round(data.main.temp) + "°C";
  //       document.querySelector(".humidity").innerText = data.main.humidity + "%";
  //       document.querySelector(".wind").innerText = data.wind.speed + "km/h";
  //     });

  try {
    const reponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${ApiKey}`
    );
    const data = await reponse.json();
    console.log(data);
    document.querySelector(".city").innerText = data.name;
    document.querySelector(".temp").innerText =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerText = data.main.humidity + "%";
    document.querySelector(".wind").innerText = data.wind.speed + "km/h";
  } catch (error) {
    console.log(error);
  }
}

searchBtn.addEventListener("click", () => {
  weatherCheck(searchBox.value);
});
