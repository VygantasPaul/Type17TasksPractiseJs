// fetch('https://party-wedding.glitch.me/v1/party')
// .then((res)=>{
//   return res.json();
// })
// .then((guests)=>{
//   console.log(guests)
// })
// .catch(()=>{

// })

const toDisplay = (partyGuests,questName) => {
  const h2 = document.createElement('h2')
  const quest = partyGuests.find(quest => quest.name === questName)
  const ifVip = quest.VIP === true ? `${quest.name} is vip` : `${quest.name} not vip` 
  
  h2.innerHTML = ifVip
  document.body.append(h2)
  
  console.log(ifVip) 
}


const fetchData = async()=>{
  try{
    const dataToGet = await fetch('https://party-wedding.glitch.me/v1/party')
    const partyGuests = await dataToGet.json()
    toDisplay(partyGuests,'Kristupas Lapeika')
    
  }catch (error) {
    console.log('Error has beed occured' +error)
  }
}
fetchData();