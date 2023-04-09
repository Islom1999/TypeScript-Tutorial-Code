
/* 1-dars */

// tsc -v
// tsc index.ts
// tsc --init
// tsc
// tsc locale ru

console.log('Salom')

// console.log(true + 10)  - numberga booleanni qo'shib bo'lmaydi

throw new Error('Some Err')



/* 2-dars */

let a = 12

// a = 'salom'   - tiplarni to'gridan to'gri o'zgartirib bo'lmaydi
// a = true
// a = {}
// a = []
a = 12 + 12

let b: number = 12
let c: string = 'text'
let d: boolean = true

let e = null;
let f: null = null
let g: undefined = undefined

let h: object = {}

let i: {name: string} = {name: 'salom'}
i.name

let j: any
j = 12
j = 'text'
j = false


/* 3-dars */

// function pow( x,y ){
//     return x ** y
// }

function pow(x:number, y:number): number {
    return x ** y
}

const add = (x:number, y:number): number => x + y

const log = (): void => {
    console.log('text')
}

// funcksita tamomlanmaydigan holat - err kelib qolsa
function someFuc( s:string ): never {
    throw new Error(s)
}


// signature - funksiya uchun shablon yaratiladi va shu shablon bo'yicha funksiya yaratiladii

let s:(x:number, y:string) => string

s = function(a:number, b:string):string {
    return `${a} + ${b}`
}

// function overloads 

function overloadFunc(x:number, y:number): number
function overloadFunc(x:string, y:number): string

function overloadFunc(x:any, y:any): any {
    if(typeof x === 'number' && typeof y == "number"){
        return x + y
    }else{
        return `${x} ${y}`
    }
}

console.log( overloadFunc( 2,2 ) )








