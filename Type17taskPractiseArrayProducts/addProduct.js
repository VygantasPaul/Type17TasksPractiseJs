const BASE = 'https://sophisticated-humane-dandelion.glitch.me';

const getProductObject = () => {
  const producttitle = document.getElementById('add-title').value;
  const productprice = document.getElementById('add-price').value;
  const productimage = document.getElementById('add-image').value;
  
  const productData = {
    title:producttitle,
    image:productimage,
    price:productprice
  }
  return productData;
}


const insertProduct = async(productData) => {
  
  try {
    let response = await fetch (BASE,{
      method:'POST',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json", 
      },
      body: JSON.stringify(productData)
    });
    
    const catalog = await response.json();
    return catalog;
    
  } catch(error){
    return false;
    
  } 
  
}

const onInsertedProduct = (catalog) => {
  if(catalog) {
    console.log('Inserted')
    setTimeout(()=>{
      window.location.replace("./index.html");
    },2000)
  } else {
    console.log('Inserted not')
  }
}

document.querySelector('#submit').addEventListener("click",()=> {
  const catalogObject = getProductObject();
  if(catalogObject) {
    const onCatalogInserted = insertProduct(catalogObject) 
    onInsertedProduct(onCatalogInserted)
  } else {
    return false;
  }
})