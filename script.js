let input =  document.getElementById("inputBox");
let buttons = document.querySelectorAll('button');
let string  = "";
buttons.forEach(button => {
  button.addEventListener("click", (event) => {
        try{
        if(event.target.innerHTML == '=')
        {
            input.value = eval(input.value);
            //string = input.value;
            
               
        } 
        else if(event.target.innerHTML == 'DEL')
        {
            
           // string = string.substring(0,string.length-1);
            input.value = input.value.substring(0,input.value.length-1);
            
        }
        else if (event.target.innerHTML == 'AC')
        {
            //string = ""; 
            input.value = "";
        }
       
        else{
       // string+= event.target.innerHTML;
        input.value += event.target.innerHTML;
        }
        
    }
    catch(error)
    {
        console.log(error);
        window.alert("Invalid Syntax");
    }
  });

});

document.addEventListener("keydown", (event)=>{
     if((event.key >= "0" && event.key <= "9" ) || (event.key === "+" || event.key === "-" || event.key === "*" || event.key === "/" ||event.key === "%"))
     { 
        input.value+=event.key;
        
     }
     else if (event.key == "Delete")
     {
        input.value = input.value.substring(0,input.value.length-1);
     }
     else if (event.shiftKey && event.key === "Backspace" )
     {
        input.value = "";
     }
     else if (event.key === "=" || event.key == "Enter" )
     {
        input.value = eval(input.value);
     }
    
 }) 


//col span and row span in html tables 
//span tag
//display:block,inline
