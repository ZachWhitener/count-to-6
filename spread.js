var nums = []
var i = 2; 

while(!!process.argv[i]){
    nums.push(process.argv[i]);
    i++; 
}

console.log(`The minimum of [${nums}] is ${Math.min(...nums)}`);