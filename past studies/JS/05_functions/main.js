console.log("\n Task -- 1");

function getAge( year = 2024 ){
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    return currentYear - year;
}
console.log(`Your age is ${getAge(2010)}`);

console.log("\n Task -- 2");

function filter(whiteList, blackList){
    let clearArray = [];
    for(element of whiteList){
        if(!blackList.includes(element)){
            clearArray.push(element);
        }
    }
    
    return clearArray;
}

let whiteList = ['my-email@gmail.ru', 'jsfunc@mail.ru', 'annavkmail@vk.ru', 'fullname@skill.ru', 'goodday@day.ru']
// Массив с почтовыми адресами в чёрном списке:
let blackList = ['jsfunc@mail.ru','goodday@day.ru']

let filtered_arr = filter(whiteList, blackList );
console.log(`${filtered_arr}`);

console.log("\n Task -- 3");

function arrSort(array){
    for (let i = 0 ; i< array.length ; i++ ) {
            for (let j = 0 ; j< array.length - 1 ; j++ ){
                if (array[j] > array[j + 1]){
                    temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                }
            }
    }
    return array;
}

let array = [12,33,3,44,100];
array = arrSort(array);
console.log(`${array} \n`)