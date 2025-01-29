console.log("\n Task - 1");

let n = 0;
let m = 100;
let count = 20;
let array = [];
let range = Math.abs(m-n);
let minNum = Math.min(m,n);
for (let i = 0; i < count; i++)
    array.push( Math.round(Math.random()*range + minNum));
console.log(`Array of ${count} numbers [ ${array} ]`);

console.log(`\n Task -- 2`);

let array_2 = [];
let count_2 = 10;

for (let i = 1; i <= count_2; i++){
    array_2.push(i);
}
console.log(`${array_2} -- изначальный массив`);
let temp;
for (let i = 0; i < count_2; i++){
    let j = Math.floor(Math.random()*Math.abs(count_2));
    temp = array_2[i];
    array_2[i] = array_2[j];
    array_2[j] = temp;
}

console.log(`${array_2} -- обработанный массив`); 

console.log(` \n Task -- 3`);

let given_n = 5;
let break_flag = false;
let index_position;
for (let i = 0; i < count_2; ++i){
       if(given_n === array_2[i]){
           index_position = i;
           break_flag = true;
           break;
       }
}
if(break_flag === true){
    console.log (`Given Number ${given_n} on index ${index_position}`);
}else{
    console.log (`No such Number in the array`);
}

console.log(` \n Task -- 4`);
let arr1 = [2, 2, 17, 21, 45, 12, 54, 31, 53];
let arr2 = [12, 44, 23, 5];
let length = arr1.length + arr2.length;
let new_array = [];
console.log(`first array -- ${arr1}`);
console.log(`second array -- ${arr2}`);
for(let i = 0; i < length ; i++ ) {
        if( i < arr1.length){
            new_array.push(arr1[i]);
        }
        else{
            new_array.push(arr2[i - arr1.length]);
        }
}
console.log(`new array -- ${new_array} `);
