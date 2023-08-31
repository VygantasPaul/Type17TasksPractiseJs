fetch('https://randomuser.me/api/')
.then((response)=>{
  return response.json();
})
.then((data)=>{
  const user = data.results[0];
  
  const element = document.createElement("div");
  element.setAttribute('id','peoples')
  
  const img = document.createElement("img");
  
  
  img.setAttribute("src", user.picture.large);
  
  
  const intro = document.createElement('h4');
  intro.innerText = `${user.name.first} ${user.name.last}, ${user.dob.age}`;
  
  
  const contacts = document.createElement('h5');
  contacts.innerText = user.email;



  element.append(img)
  
  element.append(intro)

  element.append(contacts)
  
  document.body.append(element);
  
  console.log(data)
})