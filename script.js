let string=document.querySelector("#mesg");
let buttons=document.querySelectorAll("button");


let expression = "";

buttons.forEach(button =>{
    button.addEventListener("click",(e)=>{
        const value=e.target.innerText;

        if(value=="AC"){
            expression="";
            string.value="";
        }
        else if(value=="DEL"){
            expression=expression.slice(0,-1);
            string.value=expression;
        }
        else if(value=="="){
            try{
                expression=eval(expression).toString();
                string.value=expression;
            }
            catch{
                string.value="Error";
                expression="";
            }
        }
        else{
            expression += value;
            string.value = expression;
        }
    
    });
});