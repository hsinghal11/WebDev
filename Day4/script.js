console.log("loops");
console.log("Fibonacci Series");
console.log("0,1,1,2,3,5,8,13....");
// let T1=0;
// let T2=1;
// let N=prompt("enter the num till you want fiboncacci: ");
// N=Number(N);
// console.log(T1);
// console.log(T2);
// for (let i = 2; i < N; i++) {
//     const t3=T1+T2;
//     console.log(t3);
//     T1=T2;
//     T2=t3;  
// }

let object={
    name:"himanshu",
    english:"22",
    coding:"carrer end 🥲",
    health:"Fucked up"
};

for (const key in object) {
        
        const element = object[key];
        console.log(key+" : "+ element);
        // console.log(element);
        
}
for (const iterator of "Himanshu") {
    console.log(iterator);   
}