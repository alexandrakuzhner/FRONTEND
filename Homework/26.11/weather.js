// const weatherDiv = document.getElementById('weatherCont');
// const weatherButton = document.getElementById('weatherBtn');
// 
// function getWeather(city = 'Eberbach') {
    // fetch(`https://wttr.in/${city}?format=3`) 
        // .then(response => response.text())   
        // .then(data => {
            // weatherDiv.textContent = data;   
        // })
        // .catch(error => {
            // weatherDiv.textContent = 'Ошибка: не удалось получить данные.';
        // });
// }
// 
// weatherButton.addEventListener('click', () => {
    // const city = prompt('Введите город:');
    // getWeather(city);
// });
// 
// 
// getWeather();

const button = document.getElementById("refreshButton");

const CityUrl = "https://wttr.in/";
const cityParams = {
    2: "",
    m: "",
    lang: "ru",
};

function fetchData() {
    const queryString = new URLSearchParams(cityParams).toString();
    fetch(`${CityUrl}?${queryString}`)
        .then((response) => response.text())
        .then((pageText) => {
            const result = document.getElementById("content");
            result.innerHTML = pageText;
        });
}

button.addEventListener("click", fetchData);