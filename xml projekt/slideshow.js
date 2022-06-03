fetch("articles.json")
.then(function(response){
return response.json();
})

.then(function(products){
  let placeholder = document.querySelector(".cont");
  let out="";
  for(let product of products){
    out+= 
    `
          <img src='${product.image}'>
    `;
  }



  placeholder.innerHTML=out;

  
})






