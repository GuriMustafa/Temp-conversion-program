const textbox =document.getElementById("textbox");
const radioferhan=document.getElementById("radioferhan");
const radiocelsius=document.getElementById("radiocelsius");
const result=document.getElementById("result");

let temp;





function convert(){
    if (radioferhan.checked){
        temp = Number(textbox.value);
        temp= temp * 9 / 5 +32;
        result.textContent = temp.toFixed(1) + "°F"
    }
    else if (radiocelsius.checked){
        temp = Number(textbox.value);
        temp= (temp - 32) * (5/9);
        result.textContent = temp.toFixed(1) + "°C"
    }
    else{
        result.textContent=("select an unit")
    }
}