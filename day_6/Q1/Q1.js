let myArray = [
    {
        name:"Aditya",
        age:20,
        city:"Hyderabad" ,       
        salary: 20000,
    },
    {
        name:"microsoft",
        age:26,
        city:"Bangalore",
        salary: 45000,
    },
    {
        name:"Google",
        age:57,
        city:"Hyderabad",     
        salary: 42000,
    },
    {
        name:"Jonas",
        age:45,
        city:"Chennai",
        salary: 78000,
    },
    {
        name:"Jonas",
        age:45,
        city:"Kolkata",
        salary: 61000,
    },

];

const display = (basicArray) => {
    let tabledata = "";
  
    basicArray.forEach((myArray, index) => {
      let currentrow = 
       `<tr>
        <th scope="row">${index + 1}</th>
        <td>${myArray.name}</td>
        <td>${myArray.age}</td>
        <td>${myArray.city}</td>
        <td> ${myArray.salary}</td>
        <td>
      <button class="btn btn-outline-dark" onclick='deleteMyArray(${index})'>delete</button>
      </td>
       </tr>`
  
      tabledata += currentrow;
    });
  
    document.getElementsByClassName("tableData")[0].innerHTML = tabledata;
  }

display(myArray);

const searchArray = (event) => {
    event.preventDefault();
    let id=event.target.name
    // console.log(id)
    let searchValue = document.getElementsByClassName("search")[id].value;

    let newdata = myArray.filter(arr =>  
        (id === "0" ) ? arr.name.toUpperCase().indexOf(searchValue.toUpperCase()) != -1 :
        arr.city.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
   );
    display(newdata);  
}

const deleteMyArray = (index) => {
    myArray.splice(index, 1);
    display(myArray);
}
  
