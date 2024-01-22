let input =  document.getElementById("inputBox");
let buttons = document.querySelectorAll('button');
let string  = "";
buttons.forEach(button => {
  button.addEventListener("click", (event) => {
        try{

        
        if(event.target.innerHTML == '=')
        {
            string = eval(string);
            
               
        } 
        else if(event.target.innerHTML == 'DEL')
        {
            string = string.substring(0,string.length-1);
            
        }
        else if (event.target.innerHTML == 'AC')
        {
            string = ""; 
        }
       
        else{
        string+= event.target.innerHTML;
        
        }
        input.value = string;
    }
    catch(error)
    {
        console.log("invalid syntax");
        window.alert("Invalid Syntax");
    }
  });
});
