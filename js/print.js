const icon = "https://openweathermap.org/img/wn/"

function printMainCity(data) {
    let mc = document.querySelector('.maincity');
    let place = ["h1","#currenttemp",".bigpic"]
    printAll(mc, data, place)

}

function printCity(data, city) {
    city.innerHTML = "";

    let tc = document.querySelector('#template1');
    let place = ['h3','.temp','.smallpic']
    
    printAll(tc.content, data, place)

    let clone = document.importNode(tc.content, true);
    city.append(clone);

}
function printAll(city, data, place){
    
    city.querySelector(place[0]).textContent = data.name;
    city.querySelector(place[1]).innerHTML = `${Math.round(data.main.temp)}&#176;C`;
    city.querySelector(place[2]).src = `${icon}${data.weather[0]['icon']}@2x.png`;
    
    
    let list = city.querySelector('.info');
    let vars = list.querySelectorAll('.value');

    vars[0].textContent = `${data.wind.speed} м/с`;
    vars[1].textContent = `${data.weather[0]['description']}`;
    vars[2].textContent = `${data.main.pressure} мм. рт. ст.`;
    vars[3].textContent = `${data.main.humidity}%`;
    vars[4].textContent = `[${data.coord.lat}, ${data.coord.lon}]`;
    
}


