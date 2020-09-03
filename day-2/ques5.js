// Question 5
// Print an array in reverse order

var ls=[];
var i = 0;

function add(){
    ls[i] = document.getElementById("add").value;
    i++;
    document.getElementById("add").value = "";
    console.log(ls);
}

function ques5(){
    
    document.getElementById("inst").innerHTML = ` Given array -- ${ls} <br> reverse array
    --   ${ls.reverse()}`;
    while(ls.length){
        ls.pop();
    }
    i=0;
}