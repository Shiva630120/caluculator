let buttons=document.getElementsByTagName("button");
let output=document.getElementById("output");

for(i=0;i<buttons.length;i++){
    buttons[i].onclick=function(){
        let input=this.innerText;
        updateDisplay(input)
    }
}
function updateDisplay(input){``
    let currentDisplay=output.innerText
    if(currentDisplay=="0"){
        if(input!=="C"&&input!=="Del"&&input!=="="){
            output.innerText=""
            output.innerText=input
        }
    }
    else{
        if(input=="Del"){
            output.innerText=currentDisplay.substring(0,currentDisplay.length-1)

        }
        if(input=="C"){
            output.innerText="0"
        }
        if(input!="C"&&input!="Del"&&input!="="){
            output.innerText+=input
        }
        if(input=="="){
            let display=output.innerText
            output.innerText
            output.innerText=eval(display)
        }

    }

}

// var a=document.createElement("h4");
// var b=document.querySelector("body");
// b.innerText="append"
// b.appendChild(a);


// this key
// class is not working for buttons modfying
// eval method
// on click