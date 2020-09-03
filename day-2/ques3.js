// Question 3
// Program to search for a element in a array of strings

var ls=[];
var i = 0;

function add(){
    ls[i] = document.getElementById("add").value;
    i++;
    document.getElementById("add").value = "";
}

function ques3(){
    let ind= [];
    let inputElem = document.getElementById("uelem").value;
    let arrayLength = ls.length;
    for(let i=0; i<arrayLength;i++){
        if(ls[i] == inputElem)
        ind.push(i);
    }

    if(ind.length==0){
        document.getElementById("inst").innerHTML = "your element is not found ";
       
    }
    else{
        document.getElementById("inst").innerHTML = ` Given array ${ls} <br> your element is at ${ind}`;
    }
    
    document.getElementById("uelem").value = "";
}

function cleararr(){
    while(ls.length){
        ls.pop();
    }
    i=0;
    document.getElementById("inst").innerHTML = "";
}