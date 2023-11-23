console.log("FUNCTIONS ...... (•_•)");

function forName(inName) {
    console.log("your " + inName +" is nice");
    return null;  
}

let yourName="abc";
for (let i = 100; i < 110; i++) {
    forName(yourName);
    yourName=yourName+String.fromCharCode(i);
}
function sum(a,b,c=4) {
    console.log(a,b,c);
    return a+b+c;
}
console.log(sum(3));
console.log(sum(3,4));
console.log(sum(3,4,6));

const sub=(a,b)=>{
    return a-b;
}
console.log(sub(3,6));
console.log(sub);
