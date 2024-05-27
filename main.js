"use strict";
// assignment 1
// const people = {
//     friends : ['friends']
// };
// const friend1 = {
//     firstName : 'naeem',
//     lastName :'khan',
//     id : 1
// }
// const friend2 = {
//     firstName : 'hammad',
//     lastName :'abbasi',
//     id : 2
// }
// const friend3 = {
//     firstName : 'haris',
//     lastName :'baloch',
//     id : 3
// }
// console.log(people.friends,{friend1,friend2,friend3});
// assignment 2
// const scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];
// scrambledArray.pop();
// scrambledArray.shift();
// scrambledArray.splice(0, 3);
// scrambledArray.unshift("I");
// scrambledArray.splice(2, 0, "a student of ");
// scrambledArray.splice(3, 1);
// console.log(scrambledArray.join(" "));
// assignment 3
// Define a Product interface to represent the structure of a product
// interface Product {
//   name: string;
//   model: string | number;
//   cost: number;
//   quantity: number;
// }
// const inventory: Product[] = [];
// const product1: Product = {
//   name: "iphone15",
//   model: "2024",
//   cost: 400000,
//   quantity: 10,
// };
// const product2: Product = {
//   name: "samsungs23",
//   model: 2023,
//   cost: 300000,
//   quantity: 15,
// };
// const product3: Product = {
//   name: "pixel6pro",
//   model: 2022,
//   cost: 150000,
//   quantity: 30,
// };
// inventory.push(product1, product2, product3);
// console.log("Quantity of the third product:", inventory[2].quantity);
// const product4: Product = {
//   name: "macbookpro",
//   model: "M1",
//   cost: 200000,
//   quantity: 20,
// };
// inventory.push(product4);
// console.log("Quantity of the fourth product:", inventory[3].quantity);
// assignment 4
// Define an interface named Student
// type Student = {
//     name: string;
//     senior: boolean;
//     completedAssignments: boolean;
// }
// Array to store student information
// const students: Student[] = [
//     { name: "HAMMAD", senior: false, completedAssignments: true },
//     { name: "SAJJAD", senior: true, completedAssignments: false },
//     { name: "HUZAIFA", senior: true, completedAssignments: true },
//     { name: "ALI", senior: false, completedAssignments: false },
// ];
// Function to find senior students who have completed their assignments
// function findSeniorStudentsWithAssignments(students: Student[]): Student[] {
//     return students.filter(student => student.senior && student.completedAssignments);
// }
// Call the function to find senior students with assignments
// const seniorStudentsWithAssignments = findSeniorStudentsWithAssignments(students);
// console.log("Senior students with completed assignments:", seniorStudentsWithAssignments);
// Function to update the class list by removing students who haven't completed their assignments (assuming only seniors are responsible)
// function updateClassList(students: Student[]): Student[] {
//     return students.filter(student => !student.senior || student.completedAssignments);
// }
// Call the function to update the class list
// const updatedClassList = updateClassList(students);
// console.log("Updated class list:", updatedClassList);
