//題目一：比大小
function higher(x,y){
    return (x>y)
}
// console.log(higher(3,2));
// console.log(higher(100,299));
// console.log(higher(8,2.5));

//題目二：布林反轉
function booleanToggle(x){
    return x!=true
}
// console.log(booleanToggle(true));
// console.log(booleanToggle(false));

//題目三：型別判斷
function checkType(x){
    return typeof(x)
}
// console.log(checkType(3.33));
// console.log(checkType("Hello"));
// console.log(checkType(true));
// console.log(checkType([1,2,3]));

//題目四：打八折後，是否總價大於 100 元
function onSale(x){
    return (x*.8)>100
}
// console.log(onSale(200));
// console.log(onSale(150));
// console.log(onSale(125));
// console.log(onSale(100));

//題目五：是否大於 200，且符合會員條件
function checkVIP(x,y){
    return (x>200 && y===true)
}
// console.log(checkVIP(300,true));
// console.log(checkVIP(0,true));
// console.log(checkVIP(30000,false));
// console.log(checkVIP(888,true));