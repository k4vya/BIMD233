//var todos = document.querySelector("ul");

var lis = document.querySelectorAll("li");

for(var i = 0; i < lis.length; i++){
   let e = lis[i]
   console.log(i, e.id, e.tagName, e.textContent);
   lis[i].addEventListener("mouseover", function(){
      console.log("mouseover");
      if (document.getElementById(lis[i]) == "selected"){
         document.getElementById(lis[i]).style.backgroundColor= "#4b2e83";
      }
   });

   lis[i].addEventListener("mouseout", function(){
    console.log("mouseout");
   });

   lis[i].addEventListener("click", function(){
      console.log("clicked");
   });
}

