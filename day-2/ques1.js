// Question 1
// Program to search for a particular character in a string


function ques1(){
    let inputString = document.getElementById("ustring").value;
    let inputChar = document.getElementById("uchar").value;

    let ls= [];
    let stringLength = inputString.length;
    for(let i=0; i<stringLength;i++){
        if(inputString[i] == inputChar)
        ls.push(i);
    }

    if(ls.length==0){
        document.getElementById("inst").innerHTML = "your character is not found ";
       
    }
    else{
        document.getElementById("inst").innerHTML = "your character is found at positions " + ls;
    }
   
    document.getElementById("ustring").value = "";
	document.getElementById("uchar").value = "";
}
