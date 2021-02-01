fetch("../data/data.json").then(response=>{
    return response.json()
}).then(data=>{
     displayData(data)
})
function displayData(info){
    var bodyEle=document.querySelector("body");
    var row=document.createElement("section")
    row.classList.add("row","justify-content-center");
    
    bodyEle.append(row)
    info.mobiles.map(value=>{
        var col=document.createElement("article")
        col.classList.add("col-sm-10","col-md-6","col-lg-3");
        row.append(col)
        //card
        var card=document.createElement("div");
        card.classList.add("card","mt-2")
        //card-body
        var cardBody=document.createElement("div")
        cardBody.classList.add("card-body")
        var imgElement=document.createElement("img")
        imgElement.src=value.image;
        imgElement.classList.add("img-responsive")
        imgElement.alt=value.name;
        
        var name=document.createElement("h2")

        name.textContent=value.name;
       name.classList.add("text-center","text-success")
        var price=document.createElement("p")
                                          
          price.classList.add("text-secondary","text-center")
          price.innerHTML="OriginalPrice : <s>₹ "+value.price+"/-<s>"
          var originalprice=document.createElement("p")
                                          
          originalprice.classList.add("text-danger","text-center")
          originalprice.textContent="Price : ₹ "+value.originalprice+"/-"
          var buttonParent=document.createElement("div")
          buttonParent.classList.add("d-grid","gap-2");
          var button=document.createElement("button")
          button.classList.add("btn","btn-warning","btn-mt-3")
          button.textContent="Add to Cart";

          
          
        cardBody.append(imgElement);
        cardBody.append(name)
        cardBody.append(price)
        cardBody.append(originalprice)
        cardBody.append(buttonParent)
        buttonParent.append(button)
        
        card.append(cardBody);
        col.append(card)



    })
}
/*function displayData(){
   var sampleEle=document.createElement("img")
   sampleEle.src="images/1.jpg";
   //to add class//
   sampleEle.classList.add("class1","class2","class3","class4","class4","class5")
   //to remove class//
   sampleEle.classList.remove("class3")
   /*sampleEle.setAttribute("class","image1 image2 image3 image4 image5");
   sampleEle.setAttribute("id","image");
   sampleEle.setAttribute("alt","image");
   var bodyEle=document.querySelector("body")
   bodyEle.append(sampleEle);
   
}*/