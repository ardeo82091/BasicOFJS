const arr_len = prompt("Enter the number");
var arr = [];
var even=0;
var odd=0;
var zero=0;
for(var i=0; i<arr_len; i++)
{
    arr[i] = prompt("Enter elements of an array");
}
for(var i=0; i<arr_len; i++)
{
    if(arr[i]==0)
    zero++;
    else if(arr[i]%2==1)
    odd++;
    else if(arr[i]%2==0)
    even++;
}
console.log(`The count of even number is ${even}`);
console.log(`The count of odd number is ${odd}`);
console.log(`The count of zero number is ${zero}`);