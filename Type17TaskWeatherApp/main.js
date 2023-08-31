// ////Dadėt funkcionalumą, kad pridėdama informacija atsirastu localStorage (JSON.stringify);
// //- Kiekvieną kart pridedant naują oro informaciją - sena yra ištrinama iš localStorage bei supushintas masyvas pridedamas iš naujo;
// ///- EXTRA UŽDUOTIS: Padaryti, perkraunant puslapį orų masyvas būtu imamas iš localStorage bei visi orai taip ir atvaizduojami;


const taskWrapper = document.getElementById('output-wrap');
let weatherData = JSON.parse(localStorage.getItem("Weather")) || [];

const onWeatherClickDelete = (weather) =>{
  
  const filteredWeather = weatherData.filter(filterWeather => filterWeather.city !== weather.city);
  addWeathersToDisplay(filteredWeather);
  localStorage.setItem("Weather", JSON.stringify(filteredWeather));
  weatherData = filteredWeather;
}

const addWeatherToScreen = (weather) => {
  const outputWrap = document.createElement('div');
  outputWrap.setAttribute('class','output-inner'); // storing div inner list
  
  const xClose = document.createElement('i');
  xClose.setAttribute('class','fa-solid fa-circle-xmark')
  outputWrap.append(xClose);
  
  xClose.addEventListener('click',(e)=>{
    onWeatherClickDelete(weather);
  })
  
  const dlfex = document.createElement('div')
  dlfex.setAttribute('class','d-flex');
  outputWrap.append(dlfex)
  
  ////
  const cityHeading = document.createElement('h2');
  cityHeading.setAttribute('class','heading')
  cityHeading.innerHTML = weather.city;
  outputWrap.append(cityHeading)
  
  ////
  
  const rainParagraph = document.createElement('p');
  rainParagraph.setAttribute('class','rain')
  rainParagraph.innerHTML = ` ${weather.isRainCheck ? 'Rain' : 'No rain'}`;
  outputWrap.append(rainParagraph);
  
  ////
  
  const temperature = document.createElement('span');
  temperature.setAttribute('class','temp')
  temperature.innerHTML = weather.temperature + '  °C ';
  outputWrap.prepend(temperature);
  
  
  dlfex.append(cityHeading)
  dlfex.append(temperature)
  
  taskWrapper.append(outputWrap)
  
  if (weather.isRainCheck) {
    temperature.classList.add('raining');
  } else {
    temperature.classList.add('sun');
  }
  
};

const addWeathersToDisplay = (weatherData) => {
  taskWrapper.innerHTML = ''; // Clear existing content
  
  weatherData.forEach((weather) => {
    addWeatherToScreen(weather);
  });
};

document.addEventListener('DOMContentLoaded', () => {
  addWeathersToDisplay(weatherData);
});


document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const weatherData = JSON.parse(localStorage.getItem("Weather")) || [];
  const cityName = document.getElementById('city').value;
  const weatherTemperature = document.getElementById('temperature').value;
  const isRainCheckbox = document.getElementById('isRain');
  const isRainChecked = isRainCheckbox.checked;
  
  taskWrapper.innerHTML = '';
  
  
  const weather = {
    city: cityName,
    temperature: weatherTemperature,
    isRainCheck: isRainChecked
  };
  
  
  weatherData.push(weather);
  
  localStorage.setItem("Weather", JSON.stringify(weatherData));
  addWeathersToDisplay(weatherData);
});


// const button = document.getElementById('btn');
// const tasksWrapper = document.getElementById('tasks');



// let tasks = JSON.parse(localStorage.getItem("TASKS")) || [];

// const onWrapperClick = (task) => {
//   const filteredTasks = tasks.filter((filterTask) => {
//     return filterTask.taskTitle !== task.taskTitle;
//   });
//   tasksWrapper.innerHTML = "";
//   addTasksToScreen(filteredTasks);
//   localStorage.setItem("TASKS", JSON.stringify(filteredTasks));
//   tasks = filteredTasks;
// };

// const onCheckboxClick = (event, task) => {
//   const index = tasks.findIndex((value) => value.taskTitle === task.taskTitle);
//   tasks[index].isDone = !tasks[index].isDone;
//   localStorage.setItem("TASKS", JSON.stringify(tasks));
//   event.stopPropagation();
// };

// const addTaskToScreen = (task) => {
//   const wrapper = document.createElement("div");
//   wrapper.setAttribute("class", "task-wrapper");
//   wrapper.innerHTML = "<div>" + task.taskTitle + "</div>";

//   wrapper.addEventListener("click", (e) => {
//     onWrapperClick(task);
//   });

//   const checkbox = document.createElement("input");
//   checkbox.setAttribute("type", "checkbox");

//   task.isDone && checkbox.setAttribute("checked", "");

//   checkbox.addEventListener("click", (event) => {
//     onCheckboxClick(event, task);
//   });

//   wrapper.appendChild(checkbox);

//   tasksWrapper.appendChild(wrapper);
// };

// const addTasksToScreen = (screenTasks) => {
//   screenTasks.forEach((task) => {
//     addTaskToScreen(task);
//   });
// };

// addTasksToScreen(tasks);

// button.addEventListener("click", () => {
//   tasksWrapper.innerHTML = "";
//   const input = document.getElementById("task").value;
//   document.getElementById("task").value = "";

//   const task = {
//     taskTitle: input,
//     isDone: false,
//   };
//   tasks.push(task);
//   addTasksToScreen(tasks);
//   console.log(tasks);
//   localStorage.setItem("TASKS", JSON.stringify(tasks));
// });