const number = prompt("Enter the postive number");
if(number<0) 
console.log("Please enter a postive number");
else if(number==0)
console.log("The factorial of 0 is 1");
else if(number>0)
{
    var fact=1;
    for(i=1; i<=number; i++)
    {
        fact*=i;
    }
    console.log(`The factorial of ${number} is ${fact}.`);
}

