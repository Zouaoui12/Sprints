//ESSENTIAL
// 1.Fix the syntax & style 
// issues with the three objects below:

let obj1 = {
  firstName: 'Yan',
  lastname: 'Fan'
}

let obj2 = { a: 1,
   b: 2, 
   c: 3,
    d:4} 

    let obj3 = { 
      animal: 'dog' ,
      noise: 'bark', 
      age: 3, 
      type :'Golden Retriever' ,
      color: 'Yellow'
}


//2. Create an object that represents you. It should contain your first name, last name, age and hometown. Assign it to a variable called person.

let person = {
    firstName: "sabrine",
     lastName :"zouaoui",
     age:27, 
     homeTown: "tabarka",
     favoriteFood: "pizza"
     
}
// 3.Access the favorite food property in the object using dot notation, and reassign it to a different food.
person.favoriteFood= "lasange"

// 4.Change your object to have a single name key, the value of which is an object – this object should have first, last and middle keys containing your first, last, and middle names respectively.
person.name= person.firstName + " " + person.lastName
// 5.Write a function called emptyObject that takes no parameters and returns an empty object.

function emptyObject(){  
  return {}
  }  
//   6.Write a function called addProperty that takes two parameters, an object, and a key as a string. It then adds the key as a property in the object and gives it the value true.
function addProperty(object, key) {   
   object[key]=true
   return object
    }  
    // 7.Write‌ ‌a‌ ‌function‌ ‌called‌ ‌‌deleteProperty‌‌ ‌that‌ ‌takes‌ ‌two parameters an‌ ‌object‌ ‌and‌ a key as a string. It then removes the property with that key from the object.
    function deleteProperty (obj,key){
 delete obj[key]
 return obj
    }
    const Employee = {
        firstname: 'Maria',
        lastname: 'Sanchez',
      };
    //   8.Write‌ ‌a‌ ‌function‌ ‌called‌ ‌‌addObjectProperty‌‌ ‌that‌ ‌takes‌ ‌three‌ ‌parameters,‌ ‌an‌ ‌object,‌ ‌a‌ ‌string as a key‌, ‌and‌ ‌a second ‌object. It then adds a new property with the passed key and the second object as its value.
    function addObjectProperty(object1,key,object2){
        object1[key]=object2
        return object1
    }
    // 9.Write‌ ‌a‌ ‌function‌ ‌called‌ ‌‌addFullNameProperty‌‌ ‌that‌ ‌takes‌ ‌an‌ ‌object‌ ‌as‌ ‌a‌ ‌parameter.‌ ‌If the object has both a firstName and a lastName property, then it adds a new property with the key fullName and the value as a string of the firstName and lastName combined with a space between them.
    function addFullNameProp(obj){
        obj.fullName=obj["firstName"]+" "+obj["lastName"]
        return obj
    }
    // 10.Write‌ ‌a‌ ‌function‌ ‌called‌ ‌‌addArrayProperty‌‌ ‌that‌ ‌takes‌ ‌three‌ ‌parameters,‌ ‌an‌ ‌object,‌ ‌a‌ ‌string as a key‌ ‌and‌ ‌an‌ ‌array.‌ ‌It then adds a new property to the object with the specified key and its value is the array.
    function addArrayProp(obj,key,array){
        obj[key]=array
        return obj
    }
    // 11.Write‌ ‌a‌ ‌function‌ ‌called‌ ‌‌printAllProperties‌‌ ‌that‌ takes ‌an‌ ‌object‌ ‌as a parameter. It then prints out to the console the values of all the object’s properties.
    function printAllProp(obj){
    for (const key in obj) {
       console.log(obj[key]) 
    }
    }