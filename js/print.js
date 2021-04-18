const icon = "https://openweathermap.org/img/wn/"

function printMainCity(data) {
    let mc = document.querySelector('.maincity');
    let place = ["h1", "#currenttemp", ".bigpic"]

    printAll(mc, data, place)

}

function printAll(city, data, place) {
    let list = city.querySelector('.info');
    let vars = list.querySelectorAll('.value');
    
    city.querySelector(place[0]).textContent = data.name;
    city.querySelector(place[1]).innerHTML = `${Math.round(data.main.temp)}&#176;C`;
    city.querySelector(place[2]).src = `${icon}${data.weather[0]['icon']}@2x.png`;

    vars[0].textContent = `${data.wind.speed} м/с`;
    vars[1].textContent = `${data.weather[0]['description']}`;
    vars[2].textContent = `${data.main.pressure} мм. рт. ст.`;
    vars[3].textContent = `${data.main.humidity}%`;
    vars[4].textContent = `[${data.coord.lat}, ${data.coord.lon}]`;

}

function cleartemp(city, place) {
    let list = city.querySelector('.info');
    let vars = list.querySelectorAll('.value');

    city.querySelector(place[0]).textContent = 'Загрузка';
    city.querySelector(place[1]).innerHTML = '';
    city.querySelector(place[2]).src = "images/time-left.png";

    for (let i = 0; i < 5; i++) {
        vars[i].textContent = '.'
    }

}


function printLoader(data) {
    let template = document.getElementById("template1")

    for (let i = 0; i < data.length; i++) {
        let city = document.createElement('div');

        city.setAttribute('class', 'city')
        city.setAttribute('id', "city" + i)
        city.append(template.content.cloneNode(true));
        document.getElementsByClassName("sidecities")[0].appendChild(city)
    }
}


function printListCities(data, count) {
    let name = "city" + count
    let city = document.getElementById(name)
    let tc = document.querySelector('#template1');
    let place = ['h3', '.temp', '.smallpic']
    let clone = document.importNode(tc.content, true);


    city.innerHTML = ""

    printAll(tc.content, data, place)

    city.append(clone);

    cleartemp(tc.content, place)
}
