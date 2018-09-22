funct doFoil(a, b)

var a = a;
var b = b;

if (a>0 && b>0)
then
{console.log(Math.pow("x", 2) + "x" + (a+b) + "x" + "+" + (a*b));}

else
if (a<0 && b>0 and a<b)
then
{console.log(Math.pow("x", 2) + "+" + (a+b) + "x" + "-" + (a*b));}

else
if (a>b && b<0)
then
{console.log(Math.pow("x", 2) + "-" + (a+b) + "x" + "+" + (a*b));}

else
If (a<0 && b<0)
then
{console.log(Math.pow("x", 2) + "-" + (a+b) + "x" + "+" + (a*b));}

return doFoil(a, b);
