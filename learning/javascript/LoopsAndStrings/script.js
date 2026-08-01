//console.log("Apna college");

//print 1 to 5
/* for(let count=1; count <=5; count++) {
    console.log("Apna college") //5 execute
}
console.log("loop has ended") */

//To calculate sum of first n numbers (1 to n)

/* let sum = 0;
let n = 100
for(let i = 1; i <= n; i++) {
    sum = sum+i;
    console.log("sum = ", sum);
}

console.log("sum = ", sum);
console.log("loop has ended") */

//while loop

/* let i = 1;
while(i<=15) {
    console.log("Apna college");
    i++;
}
 */

//do while loop

/* let i = 1;
do {
    console.log("Apna college");
    i++;   
} while (i <= 5);
 */

//for - of loop

/* let str = "JavaScript"
let size = 0;

for (let i of str) {
    console.log("i = ", i)
    size++;
} */

//for - in loop

/* let student = {
    name : "Rahul Kumar",
    age : 20,
    cgpa : 7.5,
    isPass : true
}

for (let key in student) {
    console.log("key = ", key,",", "value = ", student[key]);
}
 */

//Q1 - print all even number from 0 - 100

/* for (let num = 0; num <= 100; num++) {
    if(num % 2 == 0){
        console.log("num = ", num)
    }    
} */

//Q2

/* let gameNum = 25;
let userNum = prompt("Guess the game number: ");

while(userNum != gameNum) {
    userNum = prompt("you entered wrong number. Guess again: ")

}
console.log("Congratulations, you entered the right number");
 */


//Q1

fullName = prompt("Enter your full name without spaces: ");
console.log(fullName);
let userName = "@" + fullName + fullName.length;
console.log(userName)
