var state = "IDLE";
var cmd = "";
do {
  cmd = prompt("Enter a command:","run")
  switch (state){  
    case "IDLE":{
      if (cmd==="run"){
        alert("state1!" , state ="S1");       
      }     
    }     
    break;  
    case "S1":
      {
        if (cmd==="next") { 
          alert("state2!" , state ="S2");        
        } 
        else if (cmd==="skip") {
          alert("state3!" , state ="S3");        
        } 
        else if (cmd==="prev") { 
          alert("state4!" , state ="S4");        
        }     
      }     
      break; 
  } 
  cmd=getUserInput();
} while (cmd !="exit");