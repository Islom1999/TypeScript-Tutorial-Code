"use strict";
/* 1-dars */
// tsc -v
// tsc index.ts
// tsc --init
// tsc
// tsc locale ru
console.log('Salom');
// console.log(true + 10)  - numberga booleanni qo'shib bo'lmaydi
throw new Error('Some Err');
/* 2-dars */
let a = 12;
// a = 'salom'   - tiplarni to'gridan to'gri o'zgartirib bo'lmaydi
// a = true
// a = {}
// a = []
a = 12 + 12;
let b = 12;
let c = 'text';
let d = true;
let e = null;
let f = null;
let g = undefined;
let h = {};
let i = { name: 'salom' };
i.name;
let j;
j = 12;
j = 'text';
j = false;
/* 3-dars */
// function pow( x,y ){
//     return x ** y
// }
function pow(x, y) {
    return x ** y;
}
const add = (x, y) => x + y;
const log = () => {
    console.log('text');
};
// funcksita tamomlanmaydigan holat - err kelib qolsa
function someFuc(s) {
    throw new Error(s);
}
// signature - funksiya uchun shablon yaratiladi va shu shablon bo'yicha funksiya yaratiladii
let s;
s = function (a, b) {
    return `${a} + ${b}`;
};
function overloadFunc(x, y) {
    if (typeof x === 'number' && typeof y == "number") {
        return x + y;
    }
    else {
        return `${x} ${y}`;
    }
}
console.log(overloadFunc(2, 2));
//# sourceMappingURL=lesson%20#1#2#3.js.map