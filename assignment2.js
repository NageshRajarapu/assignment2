// #1 Write a functin to check whether a triangle is
// equilateral, isosceles or scalene

/*let side1 = 5;
let side2 = 5;
let side3 = 5;

function triangle(s1, s2, s3) {
    if(s1==s2 && s2==s3)
        console.log("The triangle is equilateral");
    else if(s1==s2 || s2==s3 || s1==s3)
        console.log("The triangle is isosceles");
    else
        console.log("The triangle is scalene");
}

triangle(side1,side2,side3);
console.log();*/

// #2 Write a function using switch case to find the grade of a
// student based on marks obtained

/*let marks = 10;

function grade(marks) {
    switch(true) {
        case (marks>=90 && marks<=100):
            console.log("S grade");
            break;
        case (marks>=80 && marks<=90):
            console.log("A grade");
            break;
        case (marks>=70 && marks<=80):
            console.log("B grade");
            break;
        case (marks>=60 && marks<=70):
            console.log("C grade");
            break;
        case (marks>=50 && marks<=60):
            console.log("D grade");
            break;
        case (marks>=40 && marks<=50):
            console.log("E grade");
            break;
        case (marks>=0 && marks<=40):
            console.log("Student has failed");
            break;
        default:
            console.log("Invalid marks");
            break;
    }
}

grade(marks);
console.log();*/

// #3 Write a program to find the sum of the multiples of 3 and 5
// under 1000

/*let sum = 0;

for(let num=1;num<=1000;num++) {
    if(num%3==0 && num%5==0) {
        sum += num;
    }
}

console.log(sum);
console.log(); */

// #4 Write a program to find the factorial of all prime numbers
// between the given range.

let flag;

function prime(num1, num2) {
    for(let i=num1;i<=num2;i++) {
        if(i==0 || i==1)
            continue;
        flag = 1;

        for(let j=2;j<=i/2;j++) {
            if(i%j==0) {
                flag = 0;
                break;
            }
        }
        
        if(flag==1) {
            let result = fact(i);
            console.log(`The factorial of ${i} is: ` +result);
        }
        
    }
}

function fact(num) {
    if(num==0 || num ==1)
    return 1;
    else
    return num * fact(num-1);
}

prime(1,20);
console.log();