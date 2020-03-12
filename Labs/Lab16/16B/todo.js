//var todos = document.querySelector("ul");

var lis = document.querySelectorAll("li");

for(var i = 0; i < lis.length; i++){
   let e = lis[i]
   console.log(i, e.id, e.tagName, e.textContent);
   lis[i].addEventListener("mouseover", function(){
      console.log("mouseover");
   });

   lis[i].addEventListener("mouseout", function(){
    console.log("mouseout");
   });

   lis[i].addEventListener("click", function(){
      console.log("clicked");
   });
}

