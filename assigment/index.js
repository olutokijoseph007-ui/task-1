 // ES6 scope
 let numbers = [1,2,3,4,5];
 const users = [
    {name:"john", age:20},
    {name: "jane", age:30},
    {name: "mike", age:20},


 ];
 //map 
 const doubled = numbers.map(n => n*2);
 //filter
 const adults = users.filter(user =>user.age);
 //reduce
 const sum =  numbers.reduce((total, n) => total + n, 0)
 //splice
 numbers.splice(2, 1);
 //onbject example
 const student = {
 name: "jo",
 stack:"frontend",
 level:"intermediate",


 };



document.getElementById('output').textContent =`
Map: ${doubled}
Filter:${JSON.stringify(adults)}
Reduce: ${sum}
Splice Result: ${numbers}
Object: ${JSON.stringify(student)}

`;



 







