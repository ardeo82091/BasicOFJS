var fib1=0;
var fib2=1;
var temp=0;
console.log(fib1);
while(fib2<5000)
{
    console.log(fib2);
    temp=fib1;
    fib1=fib2;
    fib2=temp+fib1;
}
