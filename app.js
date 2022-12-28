// =======================================  class no 1  ========================================================

// variable:
//         There are three types of variable
//         1. let
//         2. var
//         3. const

// Datatypes:
//           There are two types of data types
//           1. permitive
//           2. non primitive


// permitive datatype:
//                    There are five types of datatypes

//                    1. String

//                    let name = "Muhammad";
//                    console.log(name)

//                    2. Number

//                    let num = 10;
//                    console.log(num)

//                    3. boolean

//                    let a = true;
//                    let b = false;
//                    console.log(a,b)

//                    4. Undefined

//                    let a ;
//                    console.log(a)

//                    5. Null

//                    let b = null
//                    console.log(a);


// =======================================  class no 2  ========================================================

// Nonpermitive Nonpermitive:
//                        There are two types of Nonpermitive Nonpermitive

//                        1. Object

//                        let obj = {
//                         name:"Muhammad ilyas",
//                         class:"University",
//                         age:20,
//                        }
//                         console.log(obj);


//                        2. Array

//                        let arr = ["muhammad ilyas", "university", 20]
//                        console.log(arr);

//                        console.log(arr[0]);
//                        console.log(arr[1]);
//                        console.log(arr[2]);


// =======================================  class no 3  ========================================================


// Arthimitic opertors: 

//                    1. Addition (+)

//                    let a = 10;
//                    let b = 5;
//                    let c = a+b;
//                    console.log(c);


//                    2. Substration (-)

//                    let d = 10;
//                    let e = 5;
//                    let f = a-b;
//                    console.log(f);


//                    3. Multiplication (*)

//                    let g = 10;
//                    let h = 5;
//                    let i = a*b;
//                    console.log(i);


//                    4. Division (/)

//                    let j = 10;
//                    let k = 5;
//                    let l = a/b;
//                    console.log(l);


//                    5. power (**)

//                    let m = 10;
//                    let n = 5;
//                    let o = a**b;
//                    console.log(o);

//                    6. remainder modulus (%)

//                    let p = 10;
//                    let q = 5;
//                    let r = a%b;
//                    console.log(r);


// =======================================  class no 4  ========================================================


// assignment operators:
//                      assignment operators are (+=,-=,*=,/=,%=)

//                      +=  become equal to itself plus
//                      -=  become equal to itself minus
//                      *=  become equal to itself multiplied by
//                      /=  become equal to itself divide by
//                      %=  become equal to the amount which is left when it is divided by


//                     incriment operator (++)

//                     let a = 10;
//                     console.log(a);
//                     let b = ++a;
//                     console.log(b);


//                     decrement operator (--)

//                     let c = 10;
//                     console.log(c);
//                     let d = --c;
//                     console.log(d);


// =======================================  class no 5  ========================================================


// String concatnation:
//                     let firstname = "Muhammad";
//                     let lastname = " Hussain"
//                     let fullname = firstname+lastname;
//                     console.log(fullname);


// String concatnation in Object:
//                                  let obj = {
//                                     firstname:"Muhammad",
//                                     lastname:" ILyas",
//                                     age:20,
//                                     class:"BS-3",
//                                  }
//                                  console.log(obj.firstname+obj.lastname);                    


// In object call by (bracket notaton):
//                                     let obj = {
//                                        firstname:"Muhammad",
//                                        lastname:" ILyas",
//                                        age:20,
//                                        class:"BS-3",
//                                      }
//                                     console.log(obj["lastname"]);                                 


// In object call by (dort notaton):
//                                     let obj = {
//                                         firstname:"Muhammad",
//                                         lastname:" ILyas",
//                                         age:20,
//                                         class:"BS-3",
//                                      }
//                                      console.log(obj.firstname);

// length:
//           let name = "Muhammad ilyas"
//           console.log(name.length)

// length in object:
//                     let obj = {
//                     firstname:"Muhammad",
//                     lastname:" ILyas",
//                     age:20,
//                     class:"BS-3",
//                      }
//                      console.log(obj.firstname.length);                    


// =======================================  class no 6  ========================================================

// string methods:-
               
// toUppperCase:
//             let nam = "muhammad ilyas";
//             console.log(nam)

//             let nam1 =nam.toUpperCase()
//             console.log(nam1)


// Trim: (Trim remove extra space in string)
//     let name = "       muhammad ilyas   ";
//     console.log(name);

//     let name1 = name.trim()
//     console.log(name1);


// trimStart:
//         let name = "         muhammad ilyas   ";
//         console.log(name);

//         let name1 = name.trimStart()
//         console.log(name1);


// trimEnd:
//         let name = "     muhammad ilyas          ";
//         console.log(name);

//         let name1 = name.trimEnd()
//         console.log(name1);


// Split: (Split convert string into array)
//     let name = "Muhammad ilyas";
//     console.log(name);
//     let name1 = name.split();
//     console.log(name1);



// =======================================  class no 7  =========================================================



// Nested Array and Multidimentional Array:


// let array = [
//     ["muhammad", "BS-3", 20],
//     ["Hussain", "9th", 17],
//     ["Israr", "10th", 20],
//     ["imdad", "12th", 20],
//     ["Shahab", "BS-3", 21],

// ]
// console.log(array);



// Call by Idexing in Array

// let array = [
//     ["muhammad", "BS-3", 20],
//     ["Hussain", "9th", 17],
//     ["Israr", "10th", 20],

// ]
// console.log(array[0][0]);
// console.log(array[1][1]);
// console.log(array[2][2]);



// =======================================  class no 8  ========================================================



// Modify method : (Modify method use to change data in Array)


// let myData = ["Muhammad", "BS-3", 20];
// console.log(myData);

// myData[0][1] = "Hussain";
// console.log(myData);

// myData[1] = "pre-9th";
// console.log(myData);

// myData[2] = 16;
// console.log(myData);


// Delete method : (Delete method use to Delete any data in Array)


// let myData = ["Muhammad", "BS-3", 20];
// console.log(myData);

// delete myData[1]
// console.log(myData);


// Array Methods: *****


// 1. pop():  (The pop() method removes the last element from an array)

// let myData =  ["Muhmmad Ilyas", "Muhmmad Essa", "BS-3", 20,]
// console.log(myData);
// myData.pop()
// console.log(myData);


// 2. push():  ( The push() method adds a new element to an array (at the end))

// let myData1 =  ["Muhmmad Ilyas", "Muhmmad Essa", "BS-3", 20,]
// console.log(myData1);
// myData1.push("Gilit");
// console.log(myData1);


// 3. shift():  (The shift() method removes the first array element)

// let myData2 =  ["Muhmmad Ilyas", "Muhmmad Essa", "BS-3", 20,]
// console.log(myData2);
// myData2.shift();
// console.log(myData2);


// 4. unshift():  (The unshift() method adds a new element to an array (at the beginning))

// let myData3 =  ["Muhmmad Ilyas", "Muhmmad Essa", "BS-3", 20,]
// console.log(myData3);
// myData3.unshift("My name")
// console.log(myData3);


// 5. Array concatnation: 

// let array1 = ["Muhammad", "Mazhar", "Ali"];
// let array2 = ["Shahab", "Israr", "Imdad"];
// let array3 = ["Noman", "Saqib", "Iqhlaq"];
// let allArray = array1.concat(array2);
// console.log(allArray)
// let allArrays = array1.concat(array2,array3);
// console.log(allArrays)


// 6. Sort(): (Sort set the items by letter (a-z))

// let array = ["Muhammad", "Mazhar", "Ali", "Shahab", "Israr", "Imdad", "Noman", "Saqib", "Iqhlaq"];
// console.log(array)
// let sort = array.sort();
// console.log(sort)



// =======================================  class no 9  ========================================================



// 1. Alert: ***********

// alert("muhmmad");


// alert in Object:
// let name = {   
//     fname:"Muhammad",
//     lname:"ILyas"
// }
// alert(name.fname) 
// alert(name["lname"])



// 2. Confirm: ***********

// confirm("muhmmad");

// confirm in Object:
// let name = {   
//     fname:"Muhammad",
//     lname:"ILyas"
// }
// confirm(name.fname) 
// confirm(name["lname"])



// 3. prompt: ***********

// let name = prompt("Enter your name please")
// console.log(name)



// =======================================  class no 10  ========================================================


// Comparison Operators: ***********

// let a = "10"
// console.log(a == 10)

// let a = "10"
// console.log(a === 10)

// let a = "10"
// console.log(a != 10)

// let a = 10
// let b = 5
// console.log(a > b)

// let a = 10
// let b = 5
// console.log(a < b)


// Logical Operators: ************


// 1. && (AND) OPERATORS: ******


// let a = 10
// let b = 5
// console.log(a>b && b<a)
// console.log(a>b && b>a)


// 2. || (OR) OPERATORS: ******


// let a = 10
// let b = 5
// console.log(a>b || b<a)
// console.log(a>b || b>a)


// 3. ! (NOT) OPERATORS: ******


// let a = 10
// let b = 5
// console.log(a>b != b<a)



// =======================================  class no 11  ========================================================


// Test**********************************


// =======================================  class no 12  ========================================================


// 1.
// let marks = prompt("Enter your marks")

// if (marks >=50) {
//     console.log("pass")
// }
// else{
//     console.log("Fail")
// }


// 2.
// let Result = prompt("Enter your marks")

// if (Result >= 80 && Result <=100) {
//     console.log("Grade A+")
// }
// else if(Result >= 70 && Result <= 79){
//     console.log("Grade A")
// }
// else if(Result >= 60 && Result <= 69){
//     console.log("Grade B")
// }
// else if(Result >= 50 && Result <= 59){
//     console.log("Grade C")
// }
// else if(Result >= 40 && Result <= 49){
//     console.log("Grade D")
// }
// else if(Result > 100){
//     alert("Please enter valid number")
// }
// else if(Result < 0){
//     alert("Negative numbers are not allowed")
// }
// else{
//     console.log("Fail")   
// }



// =======================================  class no 13  ========================================================



// class Test

// let days = prompt("Enter Number 1 - 7 for Find week days")

// if(days == 1){
//     console.log("Today is Monday")
// }
// else if(days == 2){
//     console.log('Today is Tuesday')
// }
// else if(days == 3){
//     console.log('Today is Wednesday')
// }
// else if(days == 4){
//     console.log('Today is Thusday')
// }
// else if(days == 5){
//     console.log('Today is Friday')
// }
// else if(days == 6){
//     console.log('Today is Saturday')
// }
// else if(days == 7){
//     console.log('Today is Saturday')
// }
// else if(days > 7){
//     alert("Envalid number Enter 1-7")
// }

// else if(days < 0){
//     alert("Negative number is not allowed")
// }
// else{
//     console.log("");
// }



// =======================================  class no 14  ========================================================


// switch statement: *************


// let day = prompt("Enter a number for days")

// switch(day){
//     case "1":
//         console.log("Monday");
//         break;
//     case "2":
//         console.log("Tuesday");
//         break;
//     case "3":
//         console.log("Wednesday");
//         break; 
//     case "4":
//         console.log("Thusday");
//         break;  
//     case "5":
//         console.log("Friday");
//         break;
//     case "6":
//         console.log("Saturday");
//         break;
//     case "7":
//         console.log("Sunday");
//         break;    
//     default:
//         alert("please enter valid number");
// }


// =======================================  class no 15  ========================================================


// ternary operator: *************

// let a = 100;
// (a > 50)? console.log("True") : console.log("Flase");


// let a = 100;
// let b;
// b = (a > 50)? "True" : "Flase";
// console.log(b);



// Loops:
//       There are five types of Loops in javascript
//       1. While Loop
//       2. do While Loop
//       3. for Loop
//       4. for/in Loop
//       5. forEach Loop


// 1. While Loop: ************

// let a = 1;

// while (a <= 10) {
//     document.write(a + ") Helloooo World<br>");
//     a = a+1
// }


// 2. do While Loop: ************

// let a = 1;

// do {
//     document.write("Helloooo World");
//     a++
// } while (a <= 10);


// 3. for Loop: ************

// for(let a = 1; a <= 10; a++){
    document.write(a + ") Hellooo World<br>")
}


// =======================================  class no 16  ========================================================


Delete method of object:

let mySelf = {
    name : "Muhammad Ilyas",
    fatherName : "Muhammad Essa",
    class : "BS-3",
}
console.log(mySelf);
delete mySelf["class"]
console.log(mySelf);


Modify(change) method of object:

let mySelf = {
    name : "Muhammad Ilyas",
    fatherName : "Muhammad Essa",
    class : "BS-3",
}
console.log(mySelf);
mySelf["class"]="12th"
console.log(mySelf);


add element in last in object:

let mySelf = {
    name : "Muhammad Ilyas",
    fatherName : "Muhammad Essa",
    class : "BS-3",
}
console.log(mySelf);
mySelf["Contact"]=03554226020
console.log(mySelf);


// =======================================  class no 17  ========================================================


// function:
        // function is building blocks of programming language

 
























































































































































































