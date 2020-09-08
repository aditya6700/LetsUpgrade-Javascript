let myArray = [
    {
        name:"Aditya",
        age:20,
        country:"India",
        hobbies:['movies','cooking','listening songs']
    },
    {
        name:"microsoft",
        age:26,
        country:"America",
        hobbies:['coding','programming','debugging']
    },
    {
        name:"Google",
        age:57,
        country:"India",
        hobbies:['updating news','exploring','reading books']
    },
    {
        name:"Jonas",
        age:45,
        country:"Germany",
        hobbies:['Time travel','creating paradoxes','unveiling mystery']
    },

];


const printArray = () => {
     myArray.forEach(item => {
     console.log(item);
    });
    document.querySelector("#out").innerHTML = "check the console for the output";
};

const countryIndia = () => {
    myArray.forEach(item => {
        if (item.country === "India")
            console.log(item);
    });
   document.querySelector("#out").innerHTML = "check the console for Indians";
};

const age30 = () => {
    myArray.forEach(item => {
        if (item.age < 30)
            console.log(item);
    });
   document.querySelector("#out").innerHTML = "check the console for age < 30";
};



