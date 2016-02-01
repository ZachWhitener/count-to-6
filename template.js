var name = process.argv[2];
var lname = name.toLowerCase(); 

var greet = `Hello, ${name}!
Your name lowercased is "${lname}".`; 
            
console.log(greet);