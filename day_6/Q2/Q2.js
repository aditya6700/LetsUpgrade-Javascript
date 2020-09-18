window.onload = () => {
let myArray = [
      // {
      //     name:"Aditya",
      //     bus_no: 20,
      //     source:"chennai",
      //     destination:"Hyderabad" ,       
      //     passcap: 200,
      // },
      // {
      //     name:"ryan",
      //     bus_no: 26,
      //     source: "Mumbai",
      //     destination:"Bangalore",
      //     passcap: 450,
      // },
      // {
      //     name:"bartoz",
      //     bus_no: 57,
      //     source:"Kolkata",
      //     destination:"Hyderabad",     
      //     passcap: 420,
      // },
      // {
      //     name:"Jonas",
      //     bus_no: 45,
      //     source:"Bangalore",
      //     destination:"Chennai",
      //     passcap: 780,
      // },
      // {
      //     name:"noah",
      //     bus_no: 14,
      //     source:"Mumbai",
      //     destination:"Kolkata",
      //     passcap: 610,
      // },

  ];

  if (localStorage.getItem("myArray") == null) {
    localStorage.setItem("myArray", JSON.stringify(myArray));
  }

};

const display = (basicArray = undefined) => {
    let tabledata = "";
    let myNewArray;
    
    (basicArray == undefined) ? myNewArray = JSON.parse(localStorage.getItem("myArray")) : myNewArray = basicArray;
    
    // console.log(myNewArray)
  
    myNewArray.forEach((myArray, index) => {
      let currentrow = 
       `<tr>
        <th scope="row">${index + 1}</th>
        <td>${myArray.name}</td>
        <td>${myArray.bus_no}</td>
        <td>${myArray.source}</td>
        <td> ${myArray.destination}</td>
        <td> ${myArray.passcap}</td>
        <td>
      <button class="btn btn-outline-dark" onclick='deleteMyArray(${index})'>delete</button>
      </td>
       </tr>`
      // console.log(myArray.bus_no)
      tabledata += currentrow;
    });
  
    document.getElementsByClassName("tableData")[0].innerHTML = tabledata;
  }

  display();

const searchArray = (event) => {
    event.preventDefault();
    let id=event.target.name
    // console.log(id)

    let searchValue = document.getElementsByClassName("search")[id].value;
    let myArray = JSON.parse(localStorage.getItem("myArray"));
    

    let newdata = myArray.filter(arr =>  
        (id === "0" ) ? arr.source.toUpperCase().indexOf(searchValue.toUpperCase()) > -1 :
        arr.destination.toUpperCase().indexOf(searchValue.toUpperCase()) > -1 
        );
    display(newdata);  

    
}

const deleteMyArray = (index) => {
    let myArray = JSON.parse(localStorage.getItem("myArray"));
    myArray.splice(index, 1);
    localStorage.setItem("myArray", JSON.stringify(myArray));
    display();
}

const addData = (event) => {
    event.preventDefault();
    let newBusData = {};
    let name =    document.getElementById("name").value  
    let bus_no =     document.getElementById("bus_no").value  
    let source =  document.getElementById("source").value  
    let destination =  document.getElementById("destination").value  
    let passcap = document.getElementById("passcap").value  
  
    newBusData.name = name;
    newBusData.bus_no = Number(bus_no);
    newBusData.source = source;
    newBusData.destination = destination;
    newBusData.passcap = Number(passcap);

    let myNewArray = JSON.parse(localStorage.getItem("myArray"));
    myNewArray.push(newBusData);
    // console.log(newBusData)
    // console.log(myNewArray)
    localStorage.setItem("myArray", JSON.stringify(myNewArray));

    display();   
    document.getElementById("addData").reset(); 

}
 