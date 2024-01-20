// a. Display 1-100 numbers
let num1,num2;
num1=prompt("Enter the first number: ");
num2=prompt("Enter the last number: ");
function output(first,last)
{
if (num1>=1 && num2<=100) {
    for (let i = num1; i <=num2; i++)
    {
        console.log(i);        
    }

} else
  {
console.log("out of range");  
  }
return 
}
console.log(`Numbers betweeen ${num1}-${num2}`);
let result=output(num1,num2);
console.log(result);

//b. Display Even numbers from 1 to 100


let num3,num4;
num3=prompt("Enter the first number: ");
num4=prompt("Enter the last number: ");
function output1(first,last)
{
if (num3>=1 && num4<=100) {
    for (let i = num3; i <=num4; i++)
    {
        if (i%2==0) {
            console.log(i);
        }         
               
    }

} else
  {
console.log("out of range");  
  }
return 
}
console.log(`Even Numbers betweeen ${num3}-${num4}`);
let result1=output1(num3,num4);
console.log(result1);

//c. Display Odd numbers


let num5,num6;
num5=prompt("Enter the first number: ");
num6=prompt("Enter the last number: ");
function output2(first,last)
{
if (num5>=1 && num6<=100) {
    for (let i = num5; i <=num6; i++)
    {
        if (i%2==1) {
            console.log(i);
        }         
               
    }

} else
  {
console.log("out of range");  
  }
return 
}
console.log(`Odd numbers between ${num5}-${num6}`);
let result2=output2(num5,num6);
console.log(result2);


//d. Display Prime Numbers

// console.log("Even Numbers betweeen 1-100");
// let num7,num8;
// num7=prompt("Enter the first number: ");
// num8=prompt("Enter the last number: ");

// function output3(first,last)
// {
// if (num7>=1 && num8<=100) {

//     for (let i = num7; i <=num8; i++) {
        
//         const number=console.log(i);
//         let isPrime= true;
//         if(number>1){
//             for (let a = 2; a < number; a++) {
//                 if(number % i ==0){
//                     isPrime=false;
//                     break;
//                 }
                           
//             }
//         }
//         if(isPrime)
//                 {
//         return number
//                 }
        
//     }

// else
//   {
// console.log("out of range");  
//   }
// return 
// }
// let result3=output3(num7,num8);
// console.log(result3);
// // const value=parseInt(prompt("Enter the number: "));
// // let isPrime=true;

// // if (value==1) {
// //     console.log("1 is neither prime number nor composite number");
// // } else if(value>1) 
// //  {
// //   for (let i = 2; i < value; i++){
// //     if(i%2==0)
// //     {
// //             isPrime=false
// //             break;
// //     }
// //       }  
// //  }
// //  if(isPrime=true){
// //     console.log(`${value} is the prime number`);
// //  }
// //  else{
// //     console.log("This is not a prime number")
// //  }
// // else{
// //     console.log("The number is not a prime number");
// // }