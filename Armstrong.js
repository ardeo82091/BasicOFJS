var num;
for(var i=0; i<100000; i++)
{
    var count=0;
    num=i;
    while(num>0)
    {
        count++;
        num = ~~(num/10);
    }
    //console.log(count,num);
    num=i;
    var sum=0;
    while(num>0)
    {
        var digit = num % 10;
        sum = sum + Math.pow(digit, count);
       // console.log(sum,count);
        num = ~~(num/10);
    }
    if(sum == i) {
        console.log(i);
    }
}