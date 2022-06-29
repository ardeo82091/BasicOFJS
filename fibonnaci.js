var fib1=0;
var fib2=1;
var temp=0;
var sum= fib1;
while(fib2<5000)
{
    sum+=fib2;
    temp=fib1;
    fib1=fib2;
    fib2=temp+fib1;
}
console.log(sum);
