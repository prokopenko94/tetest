" use strict";

if (4 == 9) {
    console.log('Ok!');
} else {
    console.log('Error');
}

// const num = 50;

// if (num < 49) {
//     console.log("Error");
// } else if (num > 100) {
//     console.log("Много");
// } else {
//     console.log("Ok!");
// }

// (num === 50) ? console.log('ok!') : console.log(' error');

// const num = '50';

// switch (num) {
//     case '49':
//         console.log('error');
//         break;
//     case '100':
//         console.log('error');
//         break;
//     case '50':
//         console.log('good');
//         break;
//     default:
//         console.log('comming soon');
// }


// const hamburger = 5;
// const fries = 0;

// if (hamburger && fries) {
//     console.log('я сыт!');
// }


// const hamburger = 3;
// const fries = 1;
// const cola = 0;

// console.log(hamburger === 3 && cola && fries);

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && 'lklknk');


// if (hamburger === 3 && cola && fries) {
//     console.log('все сыты!');
// } else {
//     console.log('мы уходим');
// }


// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const naggets = 2;

// if (hamburger === 3 && cola ===2 || fries === 3 && naggets) {
//     console.log('все сыты!');
// } else {
//     console.log('мы уходим');
// }

// console.log(hamburger === 3 && cola ===2 || fries === 3 && naggets);


// let johnReport, alexReport, samReport, marisReport = 'done';

// console.log(johnReport || alexReport || samReport || marisReport);


// console.log(NaN || 2 || undefined); 
// console.log(NaN && 2 && undefined); 
// console.log(1 && 2 && 3);
// console.log(!1 && 2 || !3);
// console.log( 25 || null && !3 );
// console.log( NaN || null || !3 || undefined || 5);
// console.log( NaN || null && !3 && undefined || 5);
// console.log( 5 === 5 && 3 > 1 || 5);



// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }


// let  hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger || cola || fries === 3 || nuggets) {
//    console.log('Done!')
// };


// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }


// let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// let num =50;

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

// for (let i = 1; i < 8; i++) {
//     console.log(i);
// }

// let num = 50;

// for (let i = 1; i < 8; i++) {
//     num++;
//     console.log(num);
// }

// for (let i = 1; i < 10; i++){
//     if (i === 6) {
//         continue;
//     }
//     console.log(i);
// }

// for (let i = 0; i < 3; i++) {
//     console.log(i);
//     for (let j = 0; j <3; j++){
//         console.log(j);
//     }
// }

// *
// **
// ***
// ****
// *****
// ******

// let result = '';
// const lenght = 7;

// for (let i = 1; i < lenght; i++) {
//     for (let j = 0; j < i; j++) {
//         result += '*';
//     }

//     result += '\n';
// }

// console.log(result);



// first: for (let i = 0; i < 3 ; i++) {
//     console.log(`First level: ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`Second level: ${j}`);
//         for (let k = 0; k < 4; k++){
//             if (k === 3) continue first;
//             console.log(`Third level: ${k}`);
//         }
//     }
// }


// first: for (let i = 0; i < 3 ; i++) {
//     console.log(`First level: ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`Second level: ${j}`);
//         for (let k = 0; k < 4; k++){
//             if (k === 3) break first;
//             console.log(`Third level: ${k}`);
//         }
//     }
// }


for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}

// let num = 50;
// while (num <= 55) {
//     console.log(num);
//     num++;
// }


let i = 2;

while (i < 16) {
    i++;
    
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}

let arr = [];

for (i = 5; i <= 10; i++){
    arr[i] = i;
}

console.log(arr);
// console.log(arr[5]);
// console.log(arr[6]);
// console.log(arr[7]);
// console.log(arr[8]);
// console.log(arr[9]);
// console.log(arr[10]);

 
