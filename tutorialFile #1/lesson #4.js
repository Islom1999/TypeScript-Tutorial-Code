"use strict";
/* 4-dars */
//  havfli usul
let x = 12;
let y = x; // tavsiya etilmaydi
// havfsiz usul
let z = 34; //anyga o'xshash tip
// let r:number = z    // tiplarni o'zgartirib yubormaslik kerak
let r = z;
let v = z;
// tipga qarab funcsiyalari chiqishu uchun shunday yol bilan ishlash kerak
z.toFixed(2);
z.toFixed(2);
// union tip => tiplar birlashmasi
let n = 10;
n = 'salom';
// literal tip => tayinlangan qiymatlar bo'yicha ishlash
let k;
k = 'sm';
let u = 'md';
u = 'sm';
let s1 = false;
s1 = 'lg';
let obj1 = { name: 'Islom' };
let obj2 = { age: 12 };
let obj3 = { name: 'Islom', age: 24 };
let obj4 = { name: 'Islom', age: 24 };
let obj6 = { name: 'Islom', age: 24 };
obj6 = { name: 'Islom' };
// obj6 = {age: 24}     // name yozish majburiy
if ('age' in obj6) {
    console.log('Mavjud');
}
else {
    console.log('mavjud emas');
}
//# sourceMappingURL=lesson%20#4.js.map