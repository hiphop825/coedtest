// // 題目一：平方計算
function square(x){
    return Math.pow(x,2)
}
console.log(square(2));
console.log(square(9));
console.log(square(20));


// //題目二：數學邏輯題
function calculate(x,y,z){
    return x+y-z
}
console.log(calculate(5,7,3));
console.log(calculate(9,8,7));
console.log(calculate(5,2,0));
console.log(calculate(9,9,33));

//題目三：四捨五入題
function rounding(x){
    return x.toFixed(2)
}
console.log(rounding(3.9988));
console.log(rounding(3984.222));
console.log(rounding(77.777));

//題目四：字串轉數字
function parseNumber(x){
    return Number(x)
}
console.log(parseNumber("2.33"));
console.log(parseNumber("Hello!!"));
console.log(parseNumber("30000"));

//題目五：被二整除
function divisible(x){
    return x%2
}
console.log(divisible(2));
console.log(divisible(3));
console.log(divisible(77));
console.log(divisible(88));