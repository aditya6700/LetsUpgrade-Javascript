// Question 4
// Program to display only elements containing 'a' in them from a array

var ls=[];
var i = 0;

function add(){
    ls[i] = document.getElementById("add").value;
    i++;
    document.getElementById("add").value = "";
    console.log(ls);
}

function ques4(){
    let ind= [];
    ls.forEach(element => {
        if(element.includes('a'))
            ind.push(element);
        
    });

    if(ind.length==0){
        document.getElementById("inst").innerHTML = "your element is not found ";
       
    }
    else{
        document.getElementById("inst").innerHTML = ` Given array ${ls} <br> elements containing 'a' are
        <br>  ${ind}`;
    }
    
    while(ls.length){
        ls.pop();
    }
    i=0;
}