/* 4-dars */

//  havfli usul
let x:any = 12
let y:number = x  // tavsiya etilmaydi

// havfsiz usul
let z:unknown = 34  //anyga o'xshash tip
// let r:number = z    // tiplarni o'zgartirib yubormaslik kerak
let r: number = <number>z
let v: number = z as number

// tipga qarab funcsiyalari chiqishu uchun shunday yol bilan ishlash kerak
(z as number).toFixed(2);
(<number>z).toFixed(2)


// union tip => tiplar birlashmasi
let n: number | string = 10
n = 'salom'

// literal tip => tayinlangan qiymatlar bo'yicha ishlash
let k: 'sm' | 'md' | 'lg'

k = 'sm'
// k = 'xl'  // xato


// type aliases 
type Sizes = 'sm' | 'md' | 'lg' | boolean

let u: Sizes = 'md'
u = 'sm'

let s1: Sizes = false
s1 = 'lg'

type OBJ = {name:string} | {age: number}
let obj1: OBJ = {name: 'Islom'}
let obj2: OBJ = {age: 12}
let obj3: OBJ = {name: 'Islom', age: 24}


type OBJ2 = {name:string} & {age: number}
let obj4:OBJ2 = {name: 'Islom', age: 24}
// let obj5:OBJ2 = {name: 'Islom'}     // age ham kiritish kerak

// age kiritish majburiy emas
type OBJ3 = {name:string, age?: number}
let obj6: OBJ3 = {name: 'Islom', age: 24}
obj6 = {name: 'Islom'}
// obj6 = {age: 24}     // name yozish majburiy

if('age' in obj6){
    console.log('Mavjud')
}else{
    console.log('mavjud emas')
}




 