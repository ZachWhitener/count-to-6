var inputs = process.argv.slice(2); 
var rtn = '';
var result = inputs.map(c => c.charAt(0)).join('');
    
console.log(`[${inputs}] becomes "${result}"`);