const number = prompt("Enter the number");
var not_prime =1;
if(number<0 || number==0 || number ==1) console.log("Enter a no. greater than 1. Because 2 is a smallest prime number");
else{
    for(var i=2; i<number; i++)
    {
        if(number%i==0) not_prime=0;
    }
}
if(not_prime==0) console.log(false);
else console.log(true);
