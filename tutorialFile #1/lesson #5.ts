
// ======================
// Arrays
let a1 = []
a1 = [12, 'text', true, undefined, {}]   // tip oldindan ko'rsatilmagani uchun any deb oldi

let b1 = [1,2,3,4]
// b1 = [12, true, undefined]   // tip oldindan ko'rsatilgani uchun number deb oldi

let c1:number[] = []
c1 = [1,2,3]


let e1: Array<number>;   // let c1:number[] = [] ikalasi bir hil
e1 = [1,2,3]

let d1: (number | string)[] = [12, 'text']
let d2: Array<number | boolean> = [12, false]


// =====================
// typles

let f1: [number, string] = [12, 'text']

// f1 = ['text', 12]    // xato

// ======================
// enums - Qayta hisoblash

enum Gender {
    male,
    female,
}

enum G {
    male = 10,
    female,
}

enum F {
    a,
    b = 10,
    c,
}

console.log(Gender.male, Gender.female)  // 0,1
console.log(G.male, G.female)  // 10, 11
console.log(F.a, F.b, F.c)  // 0, 10, 11
console.log(Gender[1], Gender[Gender.female])  // Female, Female

enum H {
    A = 'Hello',
    B = 'TypeScript'
}

console.log( H.A, H.B ) // Hello TypeScript

const enum I {
    A = 0,
    B = 'TypeScript'
}

console.log( I.A, I.B ) 





