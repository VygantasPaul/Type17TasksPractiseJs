const BASE = 'https://sophisticated-humane-dandelion.glitch.me';
const catalogWrap = document.querySelector('.product-page');

const url = new URL(window.location.href);
const productId = url.searchParams.get("productId");
//const productId = localStorage.getItem("productId");
const deleteButton = document.getElementById("item-delete-button");

const constructHtml =  () => {
  const button = document.createElement('button')
  button.setAttribute('class','btn')
  button.innerText = 'Delete'
  
  const h2 = document.createElement('h2');
  h2.setAttribute('class','product-title');
  
  const h4 = document.createElement('h4');
  h4.setAttribute('class','product-price');
  
  const img = document.createElement('img');
  img.setAttribute('class','product-image');
  
  catalogWrap.append(h2, h4, img,button);
};
constructHtml();

const addProductToScreen = (product) => {
  
  const productPage = product.find(e => e.id == productId); ////
  
  const h2 = document.querySelector('.product-title');
  h2.innerHTML = productPage.title;
  
  const h4 = document.querySelector('.product-price');
  h4.innerHTML = productPage.price;
  
  const img = document.querySelector('.product-image');
  img.setAttribute('src', productPage.image);
};

const getProduct = async (product) => {
  

  let response = await fetch(BASE);
  try {
    let product = await response.json();
    
    return product;
    
    
  } catch (error) {
    console.log(error);
  }
};
const deleteProduct  = async (product) => {
  
  try{
    const response = await fetch (BASE + '/' +productId, {
      method:"DELETE"
    });
    
    const data = await response.json();
    return data;
    
  }catch(error){
    console.log(error)
    return false;
    
  }
}
const onDeleteProduct = (data) => {
  
  if(data) {
    console.log('Product deleted');
    setTimeout(() => {
      window.location.replace("./index.html");
    }, 1000);
  } else {
    console.log('Product not deleted');
  }
  
}


const onDeleteProductButton = async() => {
  const response = await deleteProduct();
  onDeleteProduct(response)
}

document.querySelector('.btn').addEventListener('click', onDeleteProductButton)


const showOnScreen = async() => {

  const product =  await getProduct()
  product && addProductToScreen(product)
}

showOnScreen();




