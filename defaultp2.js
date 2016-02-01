module.exports = function makeImportant(str, add = Array.prototype.map.call(str, (c) => '!').join('')){
    if (!isNaN(add)) return str + '!'.repeat(add);
    
    return str + add;
}