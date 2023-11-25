console.log("Arrays Methods .... 🛳️🛳️🛳️");
let items=["chips", "lays", "onion", "Tamato"];
console.log(items);
console.log(items.push("biagen"));//return arr.length
console.log(items);
console.log(items.pop());
console.log(items);
let itemsStr=items.toString();
console.log(itemsStr);
console.log(typeof itemsStr);
console.log(items);
let rollno=[80,66,62,63,52,54,49,79];
console.log(rollno);
console.log(rollno.toString());

let marvHeros=["IronMan", "SpiderMan"];
let dcHeros=["BatMan", "SuperMan"];
let indianHeros=["ShaktiMan", "MonkeyD.Luffy"];
let allHeros=marvHeros.concat(dcHeros,indianHeros);
let allHeros2=indianHeros.concat(dcHeros.concat(marvHeros));
console.log(marvHeros.concat(dcHeros,indianHeros))// always return a new array
console.log(marvHeros);
console.log(dcHeros);
console.log(indianHeros);
console.log(allHeros);
console.log(allHeros2);


console.log(marvHeros.unshift("Thor"));//unshift add in start of array and return arr.length
console.log(marvHeros);
let val=marvHeros.shift();//remove from starting from an array
console.log(marvHeros);

let sampleArr=[];
for(let i=0;i<10;i++){
    sampleArr[i]=String.fromCharCode(i+65);
}
console.log(sampleArr);
console.log(sampleArr.slice(2,7));//2nd index included and 7th index not included
console.log(sampleArr.slice(4,));
console.log(sampleArr.slice(0,8));









