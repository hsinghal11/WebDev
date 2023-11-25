console.log("Practice....");
let arr=[250,300,350,625,985];
console.log(arr);

console.log("PRINT array after making them 10 percent cheap");
for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    const offer=value-value/10;
    arr[i]=offer;
}
console.log(arr);

