// 題目一：字串長度計算
function checkStringLength(str){
    return str.length
}
// console.log(checkStringLength("Hello"));
// console.log(checkStringLength("my name is Tom！"));

//題目二：英文強制小寫
function lowerCase(low){
    return low.toLowerCase()
}
// console.log(lowerCase("FOKFF@gmail.com"));
// console.log(lowerCase("gonSakpm@gmail.com"));

//題目三：去除掉段落的左右空白
function trimString(strim){
    return strim.trim()
}
// console.log(trimString("    hi, mom!  "));
// console.log(trimString(" aa@gmail.com  "));

//題目四：字串依照條件轉陣列
function splitString(toarr){
    return toarr.split(",")
}
// console.log(splitString("black,red,white"));
// console.log(splitString("coffee,tea"));

//題目五：切割市區字串
function getArea(findstr){
    // let i = findstr.indexOf("區")+1
    // return findstr.slice(i-3,i)
    let j = findstr.search("區")+1
    return findstr.slice(j-3,j)
}
// console.log(getArea("高雄市前鎮區一心二路33號"));
// console.log(getArea("高雄市新興區新興路66號"));