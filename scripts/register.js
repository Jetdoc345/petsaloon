console.log("register.js");
let pets = {};//empty array

//creat pets
let pet1 = {
    name:"scooby",
    age:99,
    gender:"Male"
    service:"grooming"
    breed:"geraman shepherd"
}
let pet2 = {
    name:"scrappy",
    age:67,
    gender:"Male"
    service:"grooming"
    breed:"german shepherd"
}
let pet3 = {
    name:"tweety",
    age:42,
    gender:"Female"
    service:"beak trimming"
    breed:"parokeet"
}



pets.push(pet1,pet2,pet3);//adding into the array

function displayNames(){
    //display pet names
    for i=0;i<pets.length;i==){
    console.log(pets[0].name);
    }
    console.log(pets.length);
    //console.log(pets[1].name);

//hint: use a for loop and travel the array
//hint: use brute force
}