const toDisplay = (weddingGuests) => {
  const tbody = document.querySelector('tbody');
  
  weddingGuests.forEach(element => {
    
    const tr_value = document.createElement('tr');
    
    const name = document.createElement('td');
    name.innerHTML  = element.name;
    
    const plusOne = document.createElement('td');
    plusOne.innerHTML  = element.plusOne === true ? '+': '-';
    
    const attending = document.createElement('td');
    attending.innerHTML  = element.attending === true ? '+': '-';
    
    tr_value.append(name,attending,plusOne)
    
    tbody.append(tr_value);
    
    console.log(element)
  });
}
const createTableHead = () => {
  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');
  const theadTr = document.createElement('tr');
  
  const NameTh = document.createElement('th');
  NameTh.textContent = 'Name'
  
  const AttendingTh = document.createElement('th');
  AttendingTh.textContent = 'Attending'
  
  const plusOneTh = document.createElement('th');
  plusOneTh.textContent = 'Plus one'
  
  
  theadTr.append(NameTh,AttendingTh,plusOneTh)
  
  thead.append(theadTr)
  table.append(thead)
  table.append(tbody)
  
  document.body.append(table)
}
createTableHead();
const fetchData = async()=>{
  try{
    const dataToGet = await fetch('https://party-wedding.glitch.me/v1/wedding')
    const weddingGuests = await dataToGet.json()
    toDisplay(weddingGuests)
    
  }catch (error) {
    console.log('Error has beed occured' +error)
  }
}
fetchData();