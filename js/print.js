const icon = "https://openweathermap.org/img/wn/"

function printMainCity(data){
  let mc = document.querySelector('.maincity');

  mc.querySelector('h1').textContent = data.name;
  mc.querySelector('.bigpic').src = `${icon}${data.weather[0]['icon']}@2x.png`;
  mc.querySelector('#currenttemp').innerHTML = `${Math.round(data.main.temp)}&#176;C`;

  let mc_list = mc.querySelector('.info');
  let vars = mc_list.querySelectorAll('.value');

  vars[0].textContent = `${data.wind.speed}м/с`;
  vars[1].textContent = `${data.weather[0]['description']}`;
  vars[2].textContent = `${data.main.pressure} мм. рт. ст.`;
  vars[3].textContent = `${data.main.humidity}%`;
  vars[4].textContent = `[${data.coord.lat}, ${data.coord.lon}]`;
}

function printCity(data, city) {
  city.innerHTML = "";

  let tc = document.querySelector('#template1');

  tc.content.querySelector('h3').textContent = data.name;
  tc.content.querySelector('.temp').innerHTML = `${Math.round(data.main.temp)}&#176;C`;
  tc.content.querySelector('.smallpic').src = `${icon}${data.weather[0]['icon']}@2x.png`;

  let tc_list = tc.content.querySelector('.info');
  let vars = tc_list.querySelectorAll('.value');

  vars[0].textContent = `${data.wind.speed}м/с`;
  vars[1].textContent = `${data.weather[0]['description']}`;
  vars[2].textContent = `${data.main.pressure}мм. рт. ст.`;
  vars[3].textContent = `${data.main.humidity}%`;
  vars[4].textContent = `[${data.coord.lat}, ${data.coord.lon}]`;

  let clone = document.importNode(tc.content, true);
  city.append(clone);

}
