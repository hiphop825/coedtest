//題目一：hello world！
function hello(){
    return "Hello world"
}
console.log(hello())
console.log(hello())

//題目二：參數+字串練習
function sayHi(name){
    return `${name}，Hello world!`
}
console.log(sayHi("TOM"));

//題目三：參數加法產生器
function add(sum){
    return sum+=sum
}
console.log(add(2));
console.log(add(4));
console.log(add(8));

//題目四：兩個參數相加器
function addTwo(x,y){
    return x+y
}
console.log(addTwo(5,10));
console.log(addTwo(4,20));
console.log(addTwo(9,100));

//題目五：參數+字串相加
function addNumberAndString(x,y,z){
    return (`第一個加第二個參數加總為 ${x+y}，第三個參數為 ${z}`)
}
console.log(addNumberAndString(5,10,30));
console.log(addNumberAndString(4,20,22)); 
console.log(addNumberAndString(9,100,44)); 