let message = document.getElementById("msg")

async function getWeather(){
    
    let city = document.getElementById("city_name");
    const api_key = "88863023ee7d958702823ce5ce7fbe49";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${api_key}&units=metric`;

    message.innerText = "Loading..."
    const res = await fetch(url);
    const data = await res.json();

    console.log(data);

    document.getElementById("city").innerText = "City: " + city.value;
    document.getElementById("temp").innerText = "Temperature: " + data.main.feels_like; 
    message.innerText = "";
}
document.getElementById("search").onclick = () => {getWeather();}