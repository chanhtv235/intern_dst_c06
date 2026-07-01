console.log("hello")
// function các cách tạo;
// declare function (hoisting)
// console.log("tổng là " + sum( 10,20));
// const sum2 = function (a,b){
//     return a+b;
// };
// console.log(`Tổng là: ${sum2(10,20)}`);
// function sum(a,b){
//     return a+b;
// }
// // express function
//
//
// // arrow function;
// const sum3 = (a,b)=>a+b;
// const sum4 = a=>a+10;
// const sum5 = ()=>10;

// quy tắc viết gon hơn;
// let : trong dấu {} scope , không hoisting , không dc khai bái trùng tên biến,
// var ( funtion scope), có hoisting, được khai báo trùng tên

// let array = [11,20,35,40];

// for (let i = 0; i <array.length ; i++) {
//     console.log(`${i} : ${array[i]}`)
// }
// call back function: một hàm1 có tham số truyền vào 1 haàm1 => hàm 2 gọi callBackF

// const showElement =  (i,e)=>{
//     console.log(`${i} : ${e}`)
// }

// array.forEach((i,e)=>{
//     console.log(`${i} : ${e}`)
// });
// let newArray = array.map((e)=>{
//     return e +100;
// })
// console.log(newArray);
// let newArray2 = array.filter(e=>e%2==0);
// console.log(newArray2);

// destructuring; // phân ra mảng hoặc đối tượng
//
// let array = [11,20,35,40];
//
// // let e1 = array[0];
// // let e2 = array[1];
// let [e1,e2,...a1] = array;
// console.log(e1);
// console.log(e2);
// console.log(a1);
//
// const  student = {
//     id: 1,
//     name: "Chánh",
//     address : "ĐN"
// }
// let student2 = {
//     ...student,
//     score :10
// }
// console.log(student2)
// let id = student.id;
// let name = student.name;
// let {id,name} = student;
// console.log(id);
// console.log(name);
//
//
// // tạo array2 từ array
// let array2 =[...array];
// //
// // for (let i = 0; i <array.length ; i++) {
// //     array2.push(array[i]);
// // }
//
// array2[0] = 100;
// console.log(array)
// console.log(array2)

import {sum as tinhTong3} from "./package1/file1.js";
import * as file1 from "/package1/file1.js"
import tinhTong1 from "./package1/file1.js";

function sum (a,b){
    return a+b;
}
console.log(file1.sum(10,20));



