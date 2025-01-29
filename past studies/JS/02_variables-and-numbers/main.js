console.log('Task-1')
let x1 = 5;
let x2 = 5;
let y1 = 8;
let y2 = 5;
console.log( 'Area of rectangle is -- ', Math.abs((x1-x2)*(y1-y2)));
console.log('Task-2')
let a = 13.890123;
let b = 2.891564;
let n = 2;
let a_frac = Math.round(a%1*Math.pow(10, n));
let b_frac = Math.round(b%1*Math.pow(10, n));
console.log('A  fraction is -- ', a_frac);
console.log('B  fraction is -- ', b_frac);
console.log('Fraction part of A > B', a_frac > b_frac );
console.log('Fraction part of A < B', a_frac < b_frac );
console.log('Fraction part of A >= B', a_frac >= b_frac );
console.log('Fraction part of A <= B', a_frac <= b_frac );
console.log('Fraction part of A == B', a_frac === b_frac );
console.log('Fraction part of A != B', a_frac !== b_frac );
console.log('Task 3')
let left = 10;
let right = -10;
let range = Math.abs(left-right)
let RNG_1 = Math.round(Math.random()*range) + Math.min(left,right);
let RNG_2 = Math.round(Math.random()*range) + Math.min(left,right);
console.log(`RNG #1 is ${RNG_1}\nRNG #2 is ${RNG_2}`);
console.log(`${RNG_1}  > ${RNG_2}`, RNG_1 > RNG_2 );
console.log(`${RNG_1}  < ${RNG_2}`, RNG_1 < RNG_2 );
console.log(`${RNG_1} >= ${RNG_2}`, RNG_1 >= RNG_2 );
console.log(`${RNG_1} <= ${RNG_2}`, RNG_1 <= RNG_2 );
console.log(`${RNG_1} === ${RNG_2}`, RNG_1 === RNG_2 );
console.log(`${RNG_1} != ${RNG_2}`, RNG_1 !== RNG_2 );

