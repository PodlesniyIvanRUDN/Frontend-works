console.log(`Task 1`);

let password = '1234-';
    if( ( password.length >=4) && (password.includes('-')|| password.includes('_') ) ){
        console.log(`Password is secure`);
    }
    else{
        console.log(`Password is not secure`);
    }
    
console.log(`Task 2`);

let userName = 'Sergey';
let userSurname = 'hALieV';
let first_part_name = userName.substring(0,1).toUpperCase();
let second_part_name = userName.substring(1).toLowerCase();
let Name = first_part_name + second_part_name;
Name === userName ? console.log('Имя не было преобразовано'):console.log('Имя было преобразовано');
let first_part_Surname = userSurname.substring(0,1).toUpperCase();
let second_part_Surname = userSurname.substring(1).toLowerCase();
let Surname = first_part_Surname + second_part_Surname;
Surname === userSurname ? console.log('Фамилия не была преобразована'):console.log('Фамилия была преобразована');
console.log(`${Name} ${Surname}`)

console.log(`Task 3`);

let number = 8 ;
    if (number % 2 != 0){
         console.log(`${number} Число нечетное`);
    } else {
         console.log(`${number} Число четное`);
    }