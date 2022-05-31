let a = Math.floor(Math.random()*9 + 1);
let b = Math.floor(Math.random() * 10);
let c = Math.floor(Math.random() * 10);


let ab = "" + a + "" + b;
ab = Number(ab);
let sum_ab = a + b;
let mult_ab = a * b;
let ba = "" + b + "" + a;
ba = Number(ba);

document.getElementById("number1").innerHTML = ab;
document.getElementById("sum1").innerHTML = sum_ab;
document.getElementById("product1").innerHTML = mult_ab;
document.getElementById("reverse1").innerHTML = ba;

let abc = "" + a + "" + b + "" + c;
abc = Number(abc);
let sum_abc = a + b + c;
let mult_abc = a * b * c;
let cba = "" + c + "" + b + "" + a ;
cba = Number(cba);
let bca = "" + b + "" + c + "" + a;
bca = Number(bca);
let bac = "" + b + "" + a + "" + c;
bac = Number(bac);
let acb = "" + a + "" + c + "" + b;
acb = Number(acb);

document.getElementById("number2").innerHTML = abc;
document.getElementById("2a").innerHTML = sum_abc;
document.getElementById("2b").innerHTML = mult_abc;
document.getElementById("2c").innerHTML = cba;
document.getElementById("2d").innerHTML = bca;
document.getElementById("2e").innerHTML = bac;
document.getElementById("2f").innerHTML = acb;

let x = 2;

let f1 = 3 * x **(x + 2) + 6 * x **(x + 4) + 2 * x **(x ** 2);
let f2 = (8 - x **2) **3 + (8 + 2 **x) **2;
let f3 = 5 **(x + 2) - 4 **(5 - x) + x **x;
let f4 = (6 + x **(x **2)) **3;
let f5 = (3 - x) **x / x **2 + (4 **x + 2) **x / x **(2 * x);

document.getElementById("f1").innerHTML = f1;
document.getElementById("f2").innerHTML = f2;
document.getElementById("f3").innerHTML = f3;
document.getElementById("f4").innerHTML = f4;
document.getElementById("f5").innerHTML = f5;