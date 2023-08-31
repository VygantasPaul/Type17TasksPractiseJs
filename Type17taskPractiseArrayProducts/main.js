const URL_DIR = 'https://sophisticated-humane-dandelion.glitch.me'

const toShowCatalogData = (catalog)  =>{
  
  const catalogWrap = document.querySelector('.items-catalog');
  
  catalog.forEach(item => {
    const innerWrap = document.createElement('a')
   
    innerWrap.href = "./product.html?productId=" + item.id;
    
    innerWrap.setAttribute('class','inner-product')

    const h2 = document.createElement('h2');
    
    h2.innerHTML = item.title
    
    const img = document.createElement('img');
    
    img.setAttribute('src',item.image)
    
    const h4 = document.createElement('h4');
    
    h4.innerHTML = item.price
  
    innerWrap.append(h2,img,h4)

    catalogWrap.append(innerWrap)
    console.log(item)
  });
  
  
  
}



const toDisplayData = async() => {
  try {
    const response = await fetch(URL_DIR)
    
    if(response.ok){
      let catalog = await response.json();
      toShowCatalogData(catalog)
      
    }
  } catch (error) {
    console.log(error)
  }
}

toDisplayData();