fetch("articlesstabilizers.json")
.then(function(response){
return response.json();
})

.then(function(products){
  let placeholder = document.querySelector("#kutija");
  let out="";
  for(let product of products){
    out+= 
    `
    <div class="filterDiv ${product.subType} show">
    <a href="${product.bestVendor.link}"><div class="container">
      
           <img src='${product.image}'>
        
        
           <div id="uredi">
            <div class="naslov">
            <h2>${product.bestVendor.vendor}</h2>
            <p>${product.subType}</p>
            <h3>${product.title}</h3>
            </div>
            <div class="cijena">
            <div id="price"><h1>${product.price} $</h1></div>
            <p> View on ${product.bestVendor.vendor}<p>

            </div>
          </div>
          </div>

    </div></a>
      `;
  }
  placeholder.innerHTML=out;
})






