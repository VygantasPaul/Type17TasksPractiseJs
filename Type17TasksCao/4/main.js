
const tablecheckBox = () => {
  const checkbox = document.createElement('input');
  checkbox.setAttribute('id','vipCheckbox')
  checkbox.type = 'checkbox';
  
  const label = document.createElement('label');
  label.setAttribute('for','vipCheckbox')
  label.setAttribute('class','vipCheckbox')
  label.textContent = "Check if is VIP"
  label.append(checkbox)
  document.body.prepend(label)
}
const inputSearch = () => {
  const input = document.createElement('input');
  input.setAttribute('placeholder','Search');
  
  const searchButton = document.createElement('button');
  searchButton.innerHTML = 'Search for name';
  searchButton.setAttribute('id', 'searchButton');
  
  document.body.prepend(input, searchButton);
}
const createTableStruscture = () => {
  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');
  const theadTr = document.createElement('tr');
  
  const idTh = document.createElement('th');
  idTh.textContent = 'ID'
  
  const nameTh = document.createElement('th');
  nameTh.textContent = 'Name'
  
  const imageTh = document.createElement('th');
  imageTh.textContent = 'Image'
  
  const cityTh = document.createElement('th');
  cityTh.textContent = 'City'
  
  const favTh = document.createElement('th');
  favTh.textContent = 'Fav color'
  
  theadTr.append(idTh,imageTh,nameTh,cityTh,favTh)
  
  thead.append(theadTr)
  table.append(thead)
  table.append(tbody)
  
  document.body.append(table)
}
const displayData = (jsonResponse) => {
  
  const tbody = document.querySelector('tbody');
  tbody.innerHTML = '';
  jsonResponse.forEach(robot => {
    const tbody_tr = document.createElement('tr');
    const id = document.createElement('td')
    id.innerHTML = robot.id;
    
    
    const img = document.createElement('img')
    
    img.setAttribute('src', robot.image);
    img.setAttribute('alt', robot.city);
    
    
    const name = document.createElement('td')
    name.innerHTML = robot.name;
    
    const city = document.createElement('td')
    city.innerHTML = robot.city;
    
    const favColor = document.createElement('td')
    favColor.style.backgroundColor = robot.fav_color;
    favColor.innerHTML = robot.fav_color;
    
    tbody_tr.append(id,img,name,city,favColor)
    tbody.append(tbody_tr)
    console.log(robot)
  });
  
} 
createTableStruscture();
tablecheckBox();
inputSearch();

document.querySelector('button').addEventListener('click', (e) => {
  e.preventDefault()
  const input = document.querySelector('input').value.toLocaleLowerCase();
  displayData(jsonResponse.filter(robot => robot.name.toLocaleLowerCase().includes(input)))
});
document.querySelector('.vipCheckbox').addEventListener('change', (e) => {
  const checked = e.target.checked;
  displayData(checked ? jsonResponse.filter(robot => robot.vip) : jsonResponse);
});

const tableData = async() => {
  try {
    let fetchData = await fetch('https://magnetic-melon-yam.glitch.me');
    jsonResponse = await fetchData.json();
    displayData(jsonResponse)
    
  } catch (error){
    console.log('Error fetching data' + error)
  }
};

tableData();


