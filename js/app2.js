function parchecker(something){
    let stack = [];
    console.log(stack);
    for(i=0; i < something.length; i++ ){
        let symbol = something[i];
        if(symbol == "[" || symbol == "(" || symbol == "{"){
            stack.push(symbol);
            console.log(stack);

         }
    }
    if(stack.length === 0 || stack.length === 1){
        console.log(stack.length);
        console.log("false");
        return false;
    } else {
        console.log("true");
        return true;
    }
}
const something = "[[[[[]]]]]"
parchecker("[][][][]");


/*

21 lines (20 sloc) 580 Bytes
module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !=0) 
    return false;
  let array=[];
  for (let i=0; i<str.length; i++) 
    for (let j=0; j<bracketsConfig.length; j++) {
      if ((str[i]==bracketsConfig[j][1])&&(array[array.length-1]==bracketsConfig[j][0])) {
        array.pop();
        break;
      }
      else
        if (str[i]==bracketsConfig[j][0]) {
          array.push(str[i]);
          break;
        }
      if ((str[i]==bracketsConfig[j][1])&&(array.length==0)) 
        return false;
  }
  return (array.length!=0) ? false:true;
}
*/