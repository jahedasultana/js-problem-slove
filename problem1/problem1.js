const mixer = [1,3,"hh",7,"jj","i",5,2,9]
const numbers = mixer.filter(item => typeof(item) === 'number');
const strings = mixer.filter(item => typeof(item) === 'string');
// console.log('string', strings );
// console.log('number', numbers );


// or


let number = [];
let string = [];

mixer.forEach((ele)=>{
    if(typeof ele === "number"){
        number.push(ele)
    }
    else{
        string.push(ele)
    }
})

console.log("numbers",number)
console.log("string",string)