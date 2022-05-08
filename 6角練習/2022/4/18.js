//https://hackmd.io/gtnLCvA0QHWFNI6HYdnhrw?both
//2022/4/18

//題目一：Hello world (一)
function sayHi() {
  console.log("Hello world！");
}
sayHi();

// 題目二：Hello world (二)
function sayHi2(name) {
  console.log(name + ", Hello world！");
}
sayHi2("Tom");
sayHi2("John");

// 題目三： 把文字都變成小寫
function lowercase(low) {
  console.log(low.toLowerCase());
}
lowercase("Tom");
lowercase("John");

// 題目四：加法產生器
function sum() {
  let j = 0;
  for (let i = 0; i < arguments.length ; i++) {
    j += parseInt(arguments[i]);
  }
  console.log(j);
}
sum(8, 7);
sum("30", 100, 50);

// 題目五：質數
function isPrime(prime){
  if (prime <= 1 ){
    console.log("請輸入大於1的自然數")
  } else if (prime == 2) {
    console.log("是質數")
    } else {
      console.log(isP2(prime))
    }
}
function isP2(p){
  if ( p % 2 == 0 ){
    return ("不是質數")
  } else {
    for ( let i = 3; i < Math.sqrt(p) ; i+2){
      if (p % i == 0){
        return ("不是質數")
      } else {
        return ("是質數")
      }
    }
  }
}
isPrime(20)
isPrime(29)
isPrime(1)