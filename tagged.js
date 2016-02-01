
var html = fn`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`; 
console.log(html);

function fn(str, user, saying) {
    return str[0] 
           + htmlSafe(user)
           + str[1] 
           + htmlSafe(saying) 
           + str[2];
}
function htmlSafe(str){
    return str.replace(/&/g,  "&amp;")
              .replace(/\"/g, "&quot;")
              .replace(/\'/g, "&apos;")
              .replace(/</g,  "&lt;")
              .replace(/>/g,  "&gt;");
}