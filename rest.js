module.exports = function average(...args) {
    return args.reduce((sum, c) => sum += c) / args.length;
    
}