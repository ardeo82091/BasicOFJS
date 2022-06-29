var x=0;
var y=1;
var temp=0;
console.log(x);
while(y<5000)
{
    console.log(y);
    temp=x;
    x=y;
    y=temp+y;
}
